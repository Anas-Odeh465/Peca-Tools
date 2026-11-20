import { BellIcon, ChevronDown, HelpCircleIcon, BotMessageSquare, FolderPlus, ListTodo, CloudUpload, UserPlus, Plus } from "lucide-react";
import { getLocaleFromPath, localizedPath } from "../../../i18n/locale";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";

export default function DashboardNavBar({ pageName = "", notifications = [], onMarkAllRead, includedNavegationLine = true, paddingYLevel = 4}) {

    const [openPopup, setOpenPopup] = useState(null);

    const actionsRef = useRef(null);

    const { pathname } = useLocation();
    const locale = getLocaleFromPath(pathname);

    const isNotificationsOpen = openPopup === "notifications";
    const isQuickActionsOpen = openPopup === "quickActions";

    const unreadCount = notifications.filter((item) => !item.read).length;

    const quickActions = [
        { id: "create-project", name: "Create Project", icon: FolderPlus, path: "/dashboard/projects" },
        { id: "create-task", name: "Create Task", icon: ListTodo, path: "/dashboard/tasks" },
        { id: "upload-files", name: "Upload Files", icon: CloudUpload, path: "/dashboard/storage" },
        { id: "add-user", name: "Add User", icon: UserPlus, path: "/dashboard/users" },
    ];

    const togglePopup = (name) => {
        setOpenPopup((prev) => prev === name ? null : name);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (actionsRef.current && !actionsRef.current.contains(event.target)) {
                setOpenPopup(null);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpenPopup(null);
            }
        };

        document.addEventListener("pointerdown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <header className={`relative flex w-full items-center justify-between gap-4 ${includedNavegationLine ? "border-b border-[#e8e8e8]" : ''} bg-white px-4 py-${paddingYLevel} sm:px-6 z-40`}>

            <h1 className="truncate text-xl font-medium text-gray-900">{pageName}</h1>

            <div ref={actionsRef} className="flex shrink-0 items-center justify-center gap-2">

                <div className="relative">
                    <button
                        type="button"
                        aria-label="Notifications"
                        aria-expanded={isNotificationsOpen}
                        aria-controls="notifications-popup"
                        onClick={() => togglePopup("notifications")}
                        data-tooltip-id={!isNotificationsOpen ? "dashboardNavBar-tooltip" : undefined}
                        data-tooltip-content="Notifications"
                        className={`relative flex cursor-pointer items-center justify-center rounded-md p-2 transition-colors duration-200 ${isNotificationsOpen ? "bg-[#192852]/10 text-[#192852]" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                        <BellIcon size={18} />
                        {unreadCount > 0 && <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />}
                    </button>

                    <div
                        id="notifications-popup"
                        aria-hidden={!isNotificationsOpen}
                        className={`absolute inset-e-0 top-full z-50 mt-3 lg:w-80 w-60 max-w-[calc(100vw-2rem)] origin-top rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-200 ease-out${isNotificationsOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"}`}
                    >
                        <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-4">
                            <h3 className="text-sm font-semibold text-[#192852]">Notifications</h3>
                            {unreadCount > 0 && onMarkAllRead && <button type="button" onClick={onMarkAllRead} className="cursor-pointer text-xs font-medium text-gray-500 transition-colors hover:text-[#192852]">Mark all as read</button>}
                        </div>

                        {notifications.length > 0 ? (
                            <div className="max-h-80 overflow-y-auto">
                                {notifications.map((notification) => (
                                    <div key={notification.id} className={`border-b border-gray-100 px-4 py-3 last:border-b-0 ${notification.read ? "bg-white" : "bg-blue-50/40"}`}>
                                        <div className="flex items-start gap-3">
                                            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${notification.read ? "bg-gray-300" : "bg-blue-600"}`} />
                                            <div className="flex min-w-0 flex-col gap-1">
                                                <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                                                {notification.description && <p className="text-xs leading-5 text-gray-500">{notification.description}</p>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-3 px-5 py-10 text-center">
                                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50">
                                    <BotMessageSquare size={28} className="text-gray-300" />
                                </span>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-gray-700">All caught up!</p>
                                    <p className="text-xs text-gray-400">You don't have any notifications yet.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        aria-expanded={isQuickActionsOpen}
                        aria-controls="quick-actions-popup"
                        onClick={() => togglePopup("quickActions")}
                        className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-md px-2.5 py-2 text-sm transition-colors duration-200 ${isQuickActionsOpen ? "bg-[#192852]/10 text-[#192852]" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                        <Plus size={17} />
                        <span className="hidden sm:inline">Quick Actions</span>
                        <ChevronDown size={15} className={`transition-transform duration-200 ${isQuickActionsOpen ? "rotate-180" : "rotate-0"}`} />
                    </button>

                    <div
                        id="quick-actions-popup"
                        aria-hidden={!isQuickActionsOpen}
                        className={`absolute inset-e-0 top-full z-50 mt-3 w-56 origin-top rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl transition-all duration-200 ease-out ${isQuickActionsOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0 pointer-events-none"}`}
                    >
                        <div className="border-b border-gray-100 px-3 py-2">
                            <h3 className="text-xs font-semibold text-gray-500">Make a quick actions</h3>
                        </div>

                        <div className="flex flex-col gap-1 pt-1">
                            {quickActions.map((action) => (
                                <Link
                                    key={action.id}
                                    to={localizedPath(action.path, locale)}
                                    state={{ quickAction: action.id }}
                                    onClick={() => setOpenPopup(null)}
                                    className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-[#192852]/5 hover:text-[#192852]"
                                >
                                    <action.icon size={17} className="text-gray-400 transition-colors group-hover:text-[#192852]" />
                                    <span>{action.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Link
                    to={localizedPath("/help", locale)}
                    onClick={() => setOpenPopup(null)}
                    aria-label="Help"
                    data-tooltip-id="dashboardNavBar-tooltip"
                    data-tooltip-content="Help"
                    className="flex cursor-pointer items-center justify-center rounded-md p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-[#192852]"
                >
                    <HelpCircleIcon size={18} />
                </Link>

            </div>

            <Tooltip
                id="dashboardNavBar-tooltip"
                place="bottom"
                delayShow={350}
                style={{ 
                    backgroundColor: "#192852", 
                    color: "#ffffff", 
                    fontSize: "12px", 
                    padding: "0px", 
                    borderRadius: "2px",
                    zIndex: 9999 
                }}
            />
        </header>
    );
}