import { UserCheck, Users, UserX2Icon, ActivityIcon, UserPlus, FilterIcon, FileOutputIcon, Settings } from "lucide-react";
import { makeUsersExport, userExportFormats, usersExportFilename } from "./usersExport";
import AvatarBuilder from "../../../ui/AvatarBuilder";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const usersTest = [
        { id: 1, name: 'Anas', lastName: 'Odeh', username: 'anas.o', Connection: 'online', status: "Active", role: 'Admin' },
        { id: 2, name: 'Sara', lastName: 'Haddad', username: 'sara.h', Connection: 'offline', status: "Active", role: 'Team Member' },
        { id: 3, name: 'Omar', lastName: 'Khalil', username: 'omar.k', Connection: 'online', status: "Active", role: 'Manager' },
        { id: 4, name: 'Lina', lastName: 'Mansour', username: 'lina.m', Connection: 'offline', status: "Active", role: 'Viewer' },
        { id: 5, name: 'Khaled', lastName: 'Nasser', username: 'khaled.n', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 6, name: 'Maya', lastName: 'Saleh', username: 'maya.s', Connection: 'offline', status: "Active", role: 'Manager' },
        { id: 7, name: 'Yousef', lastName: 'Darwish', username: 'yousef.d', Connection: 'online', status: "Active", role: 'Viewer' },
        { id: 8, name: 'Nour', lastName: 'Farah', username: 'nour.f', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 9, name: 'Adam', lastName: 'Yasin', username: 'adam.y', Connection: 'offline', status: "Active", role: 'Admin' },
        { id: 10, name: 'Rana', lastName: 'Qasem', username: 'rana.q', Connection: 'online', status: "Active", role: 'Viewer' },
        { id: 11, name: 'Hadi', lastName: 'Barakat', username: 'hadi.b', Connection: 'offline', status: "Active", role: 'Team Member' },
        { id: 12, name: 'Dina', lastName: 'Awad', username: 'dina.a', Connection: 'online', status: "Active", role: 'Manager' },
        { id: 13, name: 'Ali', lastName: 'Jaber', username: 'ali.j', Connection: 'offline', status: "Active", role: 'Viewer' },
        { id: 14, name: 'Leen', lastName: 'Taha', username: 'leen.t', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 15, name: 'Tareq', lastName: 'Zein', username: 'tareq.z', Connection: 'offline', status: "Active", role: 'Admin' },
        { id: 16, name: 'Salma', lastName: 'Rami', username: 'salma.r', Connection: 'offline', status: "Inactive", role: 'Manager' },
        { id: 17, name: 'Hassan', lastName: 'Mahmoud', username: 'hassan.m', Connection: 'offline', status: "Inactive", role: 'Team Member' },
        { id: 18, name: 'Jana', lastName: 'Elias', username: 'jana.e', Connection: 'offline', status: "Inactive", role: 'Viewer' },
        { id: 19, name: 'Zaid', lastName: 'Hamdan', username: 'zaid.h', Connection: 'offline', status: "Inactive", role: 'Manager' },
        { id: 20, name: 'Farah', lastName: 'Othman', username: 'farah.o', Connection: 'offline', status: "Inactive", role: 'Team Member' },
        { id: 21, name: 'Anas', lastName: 'Qadri', username: 'anas.q', Connection: 'online', status: "Active", role: 'Admin' },
        { id: 22, name: 'Sara', lastName: 'Naim', username: 'sara.n', Connection: 'offline', status: "Active", role: 'Team Member' },
        { id: 23, name: 'Omar', lastName: 'Dabbas', username: 'omar.d', Connection: 'online', status: "Active", role: 'Manager' },
        { id: 24, name: 'Lina', lastName: 'Hussein', username: 'lina.h', Connection: 'offline', status: "Active", role: 'Viewer' },
        { id: 25, name: 'Khaled', lastName: 'Masri', username: 'khaled.m', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 26, name: 'Maya', lastName: 'Rashid', username: 'maya.r', Connection: 'offline', status: "Active", role: 'Manager' },
        { id: 27, name: 'Yousef', lastName: 'Abboud', username: 'yousef.a', Connection: 'online', status: "Active", role: 'Viewer' },
        { id: 28, name: 'Nour', lastName: 'Shami', username: 'nour.s', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 29, name: 'Adam', lastName: 'Khatib', username: 'adam.k', Connection: 'offline', status: "Active", role: 'Admin' },
        { id: 30, name: 'Rana', lastName: 'Daher', username: 'rana.d', Connection: 'online', status: "Active", role: 'Viewer' },
        { id: 31, name: 'Hadi', lastName: 'Saad', username: 'hadi.s', Connection: 'offline', status: "Active", role: 'Team Member' },
        { id: 32, name: 'Dina', lastName: 'Fares', username: 'dina.f', Connection: 'online', status: "Active", role: 'Manager' },
        { id: 33, name: 'Ali', lastName: 'Mikhael', username: 'ali.m', Connection: 'offline', status: "Active", role: 'Viewer' },
        { id: 34, name: 'Leen', lastName: 'Hamdi', username: 'leen.h', Connection: 'online', status: "Active", role: 'Team Member' },
        { id: 35, name: 'Tareq', lastName: 'Bishara', username: 'tareq.b', Connection: 'offline', status: "Active", role: 'Admin' },
        { id: 36, name: 'Salma', lastName: 'Kanaan', username: 'salma.k', Connection: 'offline', status: "Inactive", role: 'Manager' },
        { id: 37, name: 'Hassan', lastName: 'Jamal', username: 'hassan.j', Connection: 'offline', status: "Inactive", role: 'Team Member' },
        { id: 38, name: 'Jana', lastName: 'Zureikat', username: 'jana.z', Connection: 'offline', status: "Inactive", role: 'Viewer' },
        { id: 39, name: 'Zaid', lastName: 'Rifai', username: 'zaid.r', Connection: 'offline', status: "Inactive", role: 'Manager' },
        { id: 40, name: 'Farah', lastName: 'Sabbagh', username: 'farah.s', Connection: 'offline', status: "Inactive", role: 'Team Member' },
];

const filterOptions = [
    { id: 1, group: "all", value: "all" },
    { id: 2, group: "connection", value: "online" },
    { id: 3, group: "connection", value: "offline" },
    { id: 4, group: "account", value: "active" },
    { id: 5, group: "account", value: "inactive" },
    { id: 6, group: "role", value: "Manager" },
    { id: 7, group: "role", value: "Supervisor" },
    { id: 8, group: "role", value: "Accountant" },
    { id: 9, group: "role", value: "HR" },
    { id: 10, group: "role", value: "Admin" },
    { id: 11, group: "role", value: "Office Engineer" },
    { id: 12, group: "role", value: "Field Engineer" },
    { id: 13, group: "role", value: "Field Worker" },
    { id: 14, group: "role", value: "Receptionist" },
    { id: 15, group: "role", value: "Team Member" },
    { id: 16, group: "role", value: "Viewer" },
];

const getText = (value) => typeof value === "string" ? value.trim() : "";
const normalize = (value) => getText(value).normalize("NFKC").toLowerCase().replace(/\s+/g, " ");
const normalizeSearch = (value) => normalize(value)
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[٠-٩۰-۹]/g, (digit) => String(digit.charCodeAt(0) - (digit <= "٩" ? 0x0660 : 0x06f0)));
const searchWords = (value) => normalizeSearch(value).split(/[\s,،]+/u).filter(Boolean);
const usersStorageKey = "peca.users.general.v1";
const allFilterIds = filterOptions.filter((option) => option.group !== "all").map((option) => option.id);
const roleOptions = filterOptions.filter((option) => option.group === "role");
const roleByValue = new Map(roleOptions.map((option) => [normalize(option.value), option]));
const statusOptions = filterOptions.filter((option) => option.group === "account");

const normalizeUsers = (records) => {
    const ids = new Set();
    return records.flatMap((record) => {
        if (!record || typeof record !== "object") return [];

        const id = Number.isSafeInteger(record.id) ? record.id : getText(record.id);
        if (id === "" || ids.has(String(id))) return [];
        ids.add(String(id));

        const role = getText(record.role);
        const status = normalize(record.status);
        const connection = normalize(record.connection ?? record.Connection);

        return [{
            id,
            name: getText(record.name),
            lastName: getText(record.lastName),
            username: getText(record.username),
            role: roleByValue.get(normalize(role))?.value ?? role,
            status: ["active", "inactive"].includes(status) ? status : "unknown",
            connection: ["online", "offline"].includes(connection) ? connection : "unknown",
        }];
    });
};

const defaultUsers = normalizeUsers(usersTest);

const loadUsers = () => {
    try {
        const saved = window.localStorage.getItem(usersStorageKey);
        if (saved === null) return { users: defaultUsers, error: "" };

        const records = JSON.parse(saved);
        if (!Array.isArray(records)) throw new TypeError("Expected a user list");

        const users = normalizeUsers(records);
        return { users, error: users.length === records.length ? "" : "loadPartial" };
    } catch {
        return { users: defaultUsers, error: "loadError" };
    }
};

export default function UsersGeneral() {

    const { t } = useTranslation("translation", { keyPrefix: "UsersGeneral" });
    const [ openToolbarMenu, setOpenToolbarMenu ] = useState(null);
    const [ isExporting, setIsExporting ] = useState(false);
    const isFilterOptionOpend = openToolbarMenu === "filter";
    const isExportOpen = openToolbarMenu === "export";
    const filterRef = useRef(null);
    const filterButtonRef = useRef(null);
    const allFilterRef = useRef(null);
    const exportRef = useRef(null);
    const exportButtonRef = useRef(null);
    const searchRef = useRef(null);
    const userDialogRef = useRef(null);

    const [ directory, setDirectory ] = useState(loadUsers);
    const [ editingUser, setEditingUser ] = useState(null);
    const [ isUserDialogOpen, setIsUserDialogOpen ] = useState(false);
    const [ formError, setFormError ] = useState("");
    const [ actionMessage, setActionMessage ] = useState("");
    const [ search, setSearch ] = useState("");
    const [ selectedFilters, setSelectedFilters ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ rowsPerPage, setRowsPerPage ] = useState(10);

    const isAllChecked = selectedFilters.length === allFilterIds.length;
    const isPartiallyChecked = selectedFilters.length > 0 && !isAllChecked;

    const clearFilters = () => {
        setSelectedFilters([]);
        setCurrentPage(1);
    };

    const toggleFilter = (id) => {
        setSelectedFilters((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
        setCurrentPage(1);
    };

    const filterValues = { connection: new Set(), account: new Set(), role: new Set() };

    filterOptions.forEach((option) => {
        if (selectedFilters.includes(option.id)) {
            filterValues[option.group].add(normalize(option.value));
        }
    });

    const matchesGroup = (group, value) =>
        filterValues[group].size === 0 || filterValues[group].has(value);

    const getRoleLabel = (role) => {
        const option = roleByValue.get(normalize(role));
        return option ? t(`roles.${option.id}`) : role || t("unknown");
    };

    // Match complete status and connection labels before splitting free text.
    const terms = searchWords(search);
    const searchTerms = [];

    if (terms.length > 0) {
        const fields = { account: "status", connection: "connection" };
        const labels = filterOptions.filter((option) => fields[option.group]).flatMap((option) => {
            const value = normalize(option.value);
            const field = fields[option.group];
            return [value, t(`${field}.${value}`)].map((label) => ({ field, value, words: searchWords(label) }));
        }).filter((label) => label.words.length > 0).sort((a, b) => b.words.length - a.words.length);

        for (let index = 0; index < terms.length;) {
            const label = labels.find((candidate) => candidate.words.every((word, offset) => word === terms[index + offset]));
            searchTerms.push(label || { value: terms[index] });
            index += label?.words.length ?? 1;
        }
    }

    const filteredUsers = directory.users.filter((user) => {
        const role = normalize(user.role);
        if (!matchesGroup("connection", user.connection) || !matchesGroup("account", user.status) || !matchesGroup("role", role)) {
            return false;
        }

        if (searchTerms.length === 0) return true;

        const username = normalizeSearch(user.username);
        const roleOption = roleByValue.get(role);
        const fields = [user.name, user.lastName, user.role, getRoleLabel(user.role), roleOption && t(`filters.${roleOption.id}`)].map(normalizeSearch);
        const id = normalizeSearch(String(user.id));

        return searchTerms.every((term) => {
            const value = term.value;
            if (term.field) return user[term.field] === value;
            if (value.startsWith("#")) return value.length > 1 && id === value.slice(1);
            if (/^\d+$/.test(value)) return id === value;
            if (value.startsWith("@")) return value.length > 1 && username.includes(value.slice(1));

            return id === value || username.includes(value) || fields.some((field) => field.includes(value));
        });
    });

    // Pagination after filtering
    const totalPages = Math.max(
        1,
        Math.ceil(filteredUsers.length / rowsPerPage)
    );

    const validPage = Math.max(1, Math.min(currentPage, totalPages));

    const startIndex = (validPage - 1) * rowsPerPage;

    const paginatedUsers = filteredUsers.slice(
        startIndex,
        startIndex + rowsPerPage
    );

    const startRow = filteredUsers.length === 0 ? 0 : startIndex + 1;

    const endRow = Math.min(
        startIndex + rowsPerPage,
        filteredUsers.length
    );


    useEffect(() => {
        if (allFilterRef.current) allFilterRef.current.indeterminate = isPartiallyChecked;
    }, [isPartiallyChecked]);

    useEffect(() => {
        if (!openToolbarMenu) return;

        const menuRef = openToolbarMenu === "filter" ? filterRef : exportRef;
        const buttonRef = openToolbarMenu === "filter" ? filterButtonRef : exportButtonRef;

        const handleOutsideClicking = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenToolbarMenu(null);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape" && !userDialogRef.current?.open) {
                setOpenToolbarMenu(null);
                buttonRef.current?.focus();
            }
        };

        document.addEventListener("pointerdown", handleOutsideClicking);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("pointerdown", handleOutsideClicking);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [openToolbarMenu]);

    useEffect(() => {
        const syncUsers = (event) => {
            if (event.key === usersStorageKey || event.key === null) {
                setDirectory(loadUsers());
            }
        };

        window.addEventListener("storage", syncUsers);
        return () => window.removeEventListener("storage", syncUsers);
    }, []);

    useEffect(() => {
        if (isUserDialogOpen && !userDialogRef.current.open) userDialogRef.current.showModal();
    }, [isUserDialogOpen]);

    const openUserDialog = (user) => {
        setEditingUser(user);
        setFormError("");
        setActionMessage("");
        setIsUserDialogOpen(true);
    };

    const saveUser = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const name = getText(data.get("name"));
        const lastName = getText(data.get("lastName"));
        const username = getText(data.get("username"));
        const role = roleByValue.get(normalize(data.get("role")))?.value;
        const status = getText(data.get("status"));

        if (!name || !username || !role || !["active", "inactive"].includes(status)) {
            setFormError("invalidUser");
            return;
        }

        const { users, error } = loadUsers();
        if (error) {
            setFormError("saveError");
            return;
        }

        const original = users.find((user) => user.id === editingUser?.id);
        if (editingUser && !original) {
            setFormError("userMissing");
            return;
        }

        if (users.some((user) => user.id !== original?.id && normalize(user.username) === normalize(username))) {
            setFormError("duplicateUsername");
            return;
        }

        const highestId = users.reduce((highest, user) => {
            const id = Number(user.id);
            return Number.isSafeInteger(id) ? Math.max(highest, id) : highest;
        }, 0);
        const id = original?.id ?? (highestId < Number.MAX_SAFE_INTEGER ? highestId + 1 : crypto.randomUUID());
        const user = { id, name, lastName, username, role, status, connection: original?.connection ?? "offline" };
        const nextUsers = original ? users.map((row) => row.id === id ? user : row) : [...users, user];

        try {
            window.localStorage.setItem(usersStorageKey, JSON.stringify(nextUsers));
        } catch {
            setFormError("saveError");
            return;
        }

        setDirectory({ users: nextUsers, error: "" });
        setActionMessage(original ? "userUpdated" : "userAdded");
        userDialogRef.current.close();
    };

    const exportUsers = async (format) => {
        if (isExporting || filteredUsers.length === 0) return;

        const filters = selectedFilters.length === 0 || isAllChecked
            ? t("filters.1")
            : filterOptions.filter((option) => selectedFilters.includes(option.id)).map((option) => t(`filters.${option.id}`)).join(" + ");
        const filename = usersExportFilename(format, filters.toLowerCase(), search.trim() ? t("exportSearch", { search: search.trim() }) : "");

        setOpenToolbarMenu(null);
        exportButtonRef.current?.focus();
        setIsExporting(true);
        setActionMessage("");

        try {
            const file = await makeUsersExport(filteredUsers, format);
            const url = URL.createObjectURL(file);
            try {
                const link = document.createElement("a");
                link.href = url;
                link.download = filename;
                link.click();
            } finally {
                window.setTimeout(() => URL.revokeObjectURL(url), 0);
            }
        } catch {
            setActionMessage("exportError");
        } finally {
            setIsExporting(false);
        }
    };

    const totalUsersCounter = directory.users.length;

    const activeUsersCounter = directory.users.filter(
        (user) => user.status === "active"
    ).length;

    const inactiveUsersCounter = directory.users.filter(
        (user) => user.status === "inactive"
    ).length;

    const onlineUsersCounter = directory.users.filter(
        (user) => user.connection === "online"
    ).length;


    const usersOverview = [
        {name: "totalUsers", icon: Users, count: totalUsersCounter},
        {name: "activeUsers", icon: UserCheck, count: activeUsersCounter},
        {name: "inactiveUsers", icon: UserX2Icon, count: inactiveUsersCounter},
        {name: "onlineUsers", icon: ActivityIcon, count: onlineUsersCounter}
    ]

    return (
        <div className="flex w-full min-w-0 flex-col items-center space-y-4 p-2 transition-all duration-300 ease-in-out overflow-x-hidden">
            <div className="flex w-full max-w-[1560px] min-w-0 flex-col space-y-6">
                <div className="w-full space-y-4">
                    <h1>{t("overview")}</h1>
                    <div className="flex w-full flex-wrap items-stretch justify-center gap-4">
                        {usersOverview.map((item) => (
                            <div
                                key={item.name}
                                className="flex w-full min-w-0 flex-col items-start justify-center gap-2 rounded-md border border-gray-200 p-6 sm:w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.75rem)]"
                            >
                                <item.icon className="text-blue-900" size={18} />
                                <span className="text-2xl text-gray-600">
                                    {item.count}
                                </span>
                                <span className="text-md text-gray-500">
                                        {t(item.name)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 w-full ">
                    <div className="flex w-full flex-wrap items-stretch justify-start gap-4">
                        <button type="button" onClick={() => openUserDialog(null)} className="text-sm flex items-center text-white cursor-pointer py-2.5 px-4 bg-blue-900 hover:bg-blue-800 rounded-lg text-nowrap gap-2">
                            {t("addUser")}
                            <UserPlus size={16} />
                        </button>
                        <div ref={exportRef} className="relative">
                            <button ref={exportButtonRef} type="button" aria-expanded={isExportOpen} aria-controls="users-general-export-panel" aria-busy={isExporting} onClick={() => setOpenToolbarMenu(prev => prev === "export" ? null : "export")} disabled={filteredUsers.length === 0} className="text-sm flex items-center text-gray-500 cursor-pointer py-2.5 px-4 border border-gray-200 hover:bg-gray-200 rounded-lg text-nowrap gap-2">
                                {t("export")}
                                <FileOutputIcon size={16} />
                            </button>
                            <div id="users-general-export-panel" hidden={!isExportOpen} className="absolute top-12 start-0 z-10 p-2 bg-white w-max border border-gray-300 rounded-md drop-shadow-xl">
                                {userExportFormats.map((format) => (
                                    <button key={format} type="button" disabled={isExporting || filteredUsers.length === 0} onClick={() => exportUsers(format)} className="block w-full text-start text-sm text-gray-700 text-nowrap py-1 px-2 rounded-md hover:bg-gray-200 cursor-pointer">
                                        {t(`exportFormats.${format}`)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div ref={filterRef}  className="relative">
                            <button ref={filterButtonRef} type="button" aria-expanded={isFilterOptionOpend} aria-controls="users-general-filter-panel" onClick={() => setOpenToolbarMenu(prev => prev === "filter" ? null : "filter")} className="text-sm flex items-center text-gray-500 cursor-pointer py-2.5 px-4 border border-gray-200 hover:bg-gray-200 rounded-lg text-nowrap gap-2">
                                {t("filter")}
                                <FilterIcon size={16} />
                            </button>
                            <div id="users-general-filter-panel" inert={!isFilterOptionOpend} className={`absolute top-12 left-0 p-2 bg-white grid grid-cols-1 xl:grid-cols-2 gap-2 w-50 xl:w-sm transition-all duration-300 ease-in-out border border-gray-300 rounded-md drop-shadow-xl ${isFilterOptionOpend ? "opacity-100 transform translate-y-0.5" : "opacity-0 transform -translate-y-2 pointer-events-none"}`}>
                                {filterOptions.map((option) => (
                                    <div key={option.id} className="flex items-center gap-2 py-1">
                                        <input
                                            ref={option.id === 1 ? allFilterRef : undefined}
                                            type="checkbox"
                                            id={`filter-${option.id}`}
                                            checked={
                                                option.id === 1
                                                    ? isAllChecked
                                                    : selectedFilters.includes(option.id)
                                            }
                                            onChange={() => {
                                                if (option.id === 1) {
                                                    setSelectedFilters(isAllChecked ? [] : allFilterIds);
                                                    setCurrentPage(1);
                                                } else {
                                                    toggleFilter(option.id);
                                                }
                                            }}
                                            className="h-4 w-4 cursor-pointer accent-[#192852]"
                                        />

                                        <label
                                            htmlFor={`filter-${option.id}`}
                                            className="cursor-pointer select-none text-sm text-gray-700"
                                        >
                                            {t(`filters.${option.id}`)}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <input
                            ref={searchRef}
                            type="search"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            aria-label={t("searchLabel")}
                            placeholder={t("searchPlaceholder")}
                            className="outline-none border border-gray-200 rounded-md p-2  focus-within:ring-blue-800 focus-within:ring-2 w-3xl"
                        />
                    </div>
                    {directory.error && <p role="alert">{t(directory.error)}</p>}
                    {actionMessage && <p role={actionMessage === "exportError" ? "alert" : "status"}>{t(actionMessage)}</p>}
                    <div className="w-full min-w-0 overflow-x-auto overscroll-x-contain rounded-md">
                        <table className="w-full min-w-225 table-auto border-collapse whitespace-nowrap text-left text-sm">
                            <thead className="bg-[#f3f3f3] text-gray-600">
                                <tr>
                                    <th className="px-4 py-3 font-medium">
                                        {t("id")}
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        {t("user")}
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        {t("role")}
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        {t("statusColumn")}
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        {t("connectionColumn")}
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        {t("action")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {paginatedUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3">
                                            {user.id}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1">
                                                <AvatarBuilder name={user.name || (user.lastName ? "" : "?")} lastname={user.lastName}/>
                                                <div className="flex flex-col gap-0.5">
                                                    <div className="space-x-1">
                                                        <span>{user.name || (!user.lastName ? t("unknown") : "")}</span>
                                                        <span>{user.lastName}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{user.username}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            {getRoleLabel(user.role)}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={` text-xs p-1 rounded-full
                                                    ${user.status === "active"
                                                        ? "text-green-600 bg-green-200"
                                                        : "text-red-600 bg-red-200"
                                                    }
                                                `}
                                            >
                                                {t(`status.${user.status}`)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className={`h-2 w-2 rounded-full ${
                                                        user.connection === "online"
                                                            ? "bg-blue-600"
                                                            : "bg-gray-400"
                                                    }`}
                                                />
                                                <span
                                                    className={`text-sm ${
                                                        user.connection === "online"
                                                            ? "text-blue-600"
                                                            : "text-gray-500"
                                                    }`}
                                                >
                                                    {t(`connection.${user.connection}`)}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <button type="button" aria-label={t("editUserLabel", { user: user.username || user.id })} onClick={() => openUserDialog(user)}>
                                                <Settings size={20} className="cursor-pointer text-gray-700"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {paginatedUsers.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-12 text-center text-sm text-gray-500">
                                            {t(directory.users.length === 0 ? "emptyDirectory" : "noMatches")}
                                            {directory.users.length > 0 && (search || selectedFilters.length > 0) && (
                                                <>
                                                    <br />
                                                    <button type="button" onClick={() => {
                                                        setSearch("");
                                                        clearFilters();
                                                        searchRef.current?.focus();
                                                    }}>{t("resetSearchAndFilters")}</button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-wrap items-center justify-between w-full gap-4 border-t border-gray-200 py-4">
                        <div className="flex items-center gap-3">
                            <label htmlFor="users-general-rows-per-page" className="text-sm text-gray-500">
                                {t("rowsPerPage")}
                            </label>
                            <select
                                id="users-general-rows-per-page"
                                value={rowsPerPage}
                                onChange={(e) => {
                                    setRowsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="rounded-md border border-gray-200 px-3 py-2 text-sm outline-none"
                            >
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>

                            <span role="status" className="text-sm text-gray-500">
                                {filteredUsers.length ? t("showing", { start: startRow, end: endRow, count: filteredUsers.length }) : t("zeroResults")}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                disabled={validPage === 1}
                                onClick={() => setCurrentPage(validPage - 1)}
                                className="rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {t("previous")}
                            </button>

                            <span className="text-sm text-gray-600">
                                {filteredUsers.length > 0 && t("page", { current: validPage, total: totalPages })}
                            </span>

                            <button
                                type="button"
                                disabled={validPage === totalPages}
                                onClick={() => setCurrentPage(validPage + 1)}
                                className="rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {t("next")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <dialog ref={userDialogRef} aria-labelledby="users-general-dialog-title" onClose={() => setIsUserDialogOpen(false)}>
                {isUserDialogOpen && (
                    <form onSubmit={saveUser}>
                        <h2 id="users-general-dialog-title">{t(editingUser ? "editUser" : "addUser")}</h2>
                        <div><label>{t("firstName")} <input name="name" required defaultValue={editingUser?.name} /></label></div>
                        <div><label>{t("lastName")} <input name="lastName" defaultValue={editingUser?.lastName} /></label></div>
                        <div><label>{t("username")} <input name="username" required defaultValue={editingUser?.username} /></label></div>
                        <div>
                            <label>{t("role")} <select name="role" required defaultValue={roleByValue.has(normalize(editingUser?.role)) ? editingUser.role : ""}>
                                <option value="" disabled>{t("chooseRole")}</option>
                                {roleOptions.map((option) => <option key={option.id} value={option.value}>{t(`roles.${option.id}`)}</option>)}
                            </select></label>
                        </div>
                        <div>
                            <label>{t("statusColumn")} <select name="status" required defaultValue={editingUser?.status === "unknown" ? "" : editingUser?.status ?? "active"}>
                                <option value="" disabled>{t("chooseStatus")}</option>
                                {statusOptions.map((option) => <option key={option.id} value={option.value}>{t(`status.${option.value}`)}</option>)}
                            </select></label>
                        </div>
                        {formError && <p role="alert">{t(formError)}</p>}
                        <button type="button" onClick={() => userDialogRef.current.close()}>{t("cancel")}</button>{" "}
                        <button type="submit">{t("save")}</button>
                    </form>
                )}
            </dialog>
        </div>
    );
}
