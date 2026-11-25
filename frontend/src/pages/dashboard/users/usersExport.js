export const userExportFormats = ["csv", "xlsx", "pdf", "docx", "txt"];

const columns = ["id", "name", "lastName", "username", "role", "status", "connection"];
const headers = ["ID", "First name", "Last name", "Username", "Role", "Status", "Connection"];
const fileEncoder = new TextEncoder();

const filenamePart = (value, limit) => {
    const text = value.replace(/[<>:"/\\|?*]/g, "-").replace(/[\p{Cc}\p{Cf}]/gu, " ").replace(/\s+/g, " ").trim();
    let part = "";
    let bytes = 0;

    for (const character of text) {
        bytes += fileEncoder.encode(character).length;
        if (bytes > limit) return `${part.trimEnd()}…`;
        part += character;
    }

    return part.replace(/[. ]+$/, "");
};

export const usersExportFilename = (format, filters, search, date = new Date()) => {
    const pad = (value) => String(value).padStart(2, "0");
    const day = `${pad(date.getMonth() + 1)}-${pad(date.getDate())}-${date.getFullYear()}`;
    const hour = date.getHours();
    const time = `${hour % 12 || 12}-${pad(date.getMinutes())} ${hour < 12 ? "am" : "pm"}`;
    const parts = ["users", filenamePart(filters, 140) || "all", filenamePart(search, 50), day, time];
    return `${parts.filter(Boolean).join(" - ")}.${format}`;
};

const csvCell = (value) => {
    const text = String(value);
    const safeText = /^(\s*[=+@\-＝＋＠－]|[\t\r\n])/u.test(text) ? `'${text}` : text;
    return `"${safeText.replaceAll('"', '""')}"`;
};

const exportExcel = async (rows) => {
    const { default: writeExcelFile } = await import("write-excel-file/browser");
    const heading = headers.map((value) => ({ value, fontWeight: "bold" }));
    return writeExcelFile([heading, ...rows], {
        sheet: "Users",
        columns: [8, 20, 20, 24, 25, 14, 14].map((width) => ({ width })),
    }).toBlob();
};

const exportWord = async (rows) => {
    const { Document, HeadingLevel, Packer, PageOrientation, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } = await import("docx");
    const tableRow = (cells, heading = false) => new TableRow({
        tableHeader: heading,
        cantSplit: true,
        children: cells.map((value) => new TableCell({
            children: [new Paragraph({ children: [new TextRun({ text: String(value), bold: heading })] })],
        })),
    });

    return Packer.toBlob(new Document({
        sections: [{
            properties: { page: { size: { orientation: PageOrientation.LANDSCAPE } } },
            children: [
                new Paragraph({ text: "Users", heading: HeadingLevel.HEADING_1 }),
                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [tableRow(headers, true), ...rows.map((row) => tableRow(row))],
                }),
            ],
        }],
    }));
};

const needsPdfFont = (value) => typeof value === "string" && /[^\u0020-\u007e\u00a0-\u00ff\r\n\t]/u.test(value);

const exportPdf = async (rows) => {
    const [{ jsPDF }, { autoTable }] = await Promise.all([import("jspdf"), import("jspdf-autotable")]);
    const pdf = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4", compress: true });
    const margin = 28;
    const tableWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
    const widths = [0.07, 0.15, 0.16, 0.19, 0.18, 0.12, 0.13];

    if (rows.some((row) => row.some(needsPdfFont))) await document.fonts.ready;

    pdf.setFontSize(16);
    pdf.text("Users", margin, 34);
    autoTable(pdf, {
        head: [headers],
        body: rows,
        startY: 46,
        margin,
        styles: { fontSize: 9, cellPadding: 4 },
        columnStyles: Object.fromEntries(widths.map((width, index) => [index, { cellWidth: tableWidth * width }])),
        didParseCell: ({ cell }) => {
            if (needsPdfFont(cell.raw)) cell.text = [""];
        },
        // The browser renders scripts outside the PDF's built-in font, including Arabic.
        didDrawCell: ({ cell }) => {
            if (!needsPdfFont(cell.raw)) return;

            const width = cell.width - 8;
            const height = cell.height - 8;
            const canvas = document.createElement("canvas");
            canvas.width = Math.ceil(width * 3);
            canvas.height = Math.ceil(height * 3);
            const context = canvas.getContext("2d");
            context.font = '27px "Readex Pro Variable", Arial, sans-serif';
            context.textAlign = "left";
            context.textBaseline = "middle";
            context.direction = /[\p{Script=Arabic}\p{Script=Hebrew}]/u.test(cell.raw) ? "rtl" : "ltr";
            context.fillText(cell.raw.replace(/\s+/g, " "), 0, canvas.height / 2, canvas.width);
            pdf.addImage(canvas, "PNG", cell.x + 4, cell.y + 4, width, height);
        },
    });

    return pdf.output("blob");
};

export const makeUsersExport = async (users, format) => {
    const rows = users.map((user) => columns.map((column) => user[column] ?? ""));

    switch (format) {
        case "csv": {
            const csv = [columns, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
            return new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
        }
        case "xlsx":
            return exportExcel(rows);
        case "pdf":
            return exportPdf(rows);
        case "docx":
            return exportWord(rows);
        case "txt": {
            const text = [headers, ...rows].map((row) => row.map((value) => String(value).replace(/[\t\r\n]+/g, " ")).join("\t")).join("\r\n");
            return new Blob([text], { type: "text/plain;charset=utf-8" });
        }
        default:
            throw new RangeError(`Unsupported user export format: ${format}`);
    }
};
