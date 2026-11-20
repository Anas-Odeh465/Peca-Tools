import { 
    Maximize2Icon, Minimize2Icon, BookCheck, Wallet2Icon, KeyRound, MoreHorizontal, LogsIcon, HomeIcon, Settings, UserCircle, 
    AudioLines, ImageIcon, Workflow, BotIcon, VideoIcon, Table, Edit, Plus, FileArchive, Projector, Download, Building2, Check,
    Search, ArrowUpNarrowWideIcon, PlugZap, Globe, Link, AudioWaveformIcon, Toolbox, Box, Container, Wrench, Activity, BarChart2,
    MessageCircle, Layers, RefreshCw, Loader, Loader2, CopyCheck, Copy, Factory, Database, LogOut, HelpCircle, Terminal, MonitorIcon,
    SunIcon, MoonIcon, BookOpenText, ChevronRight, ChevronLeft, ChevronDown, CheckCheckIcon, FileText, BookMarked, LucideCreditCard,
    PinIcon, PinOffIcon, Share, Trash, Edit2, Coins, Minimize, Monitor, Dna, FlaskConical, AtomIcon, Radical, Code2, Brain, Boxes, 
    LayoutDashboard, GlobeIcon, FileSearch, Plug, Sparkles, ChartArea, WorkflowIcon, ListCheck, UsersIcon, WarehouseIcon, ListTodo, 
    UserGroup, DollarSignIcon, Bot, ReceiptText, ServerCog, Server, ServerCrash
} from "lucide-react";

export const DASHBOARD_BASE_LINK = "/dashboard";

export const dashSideBar = [
    { id: 1,  title: "Overview",             name: "Home",         link: `${DASHBOARD_BASE_LINK}`,              icon: HomeIcon       },
    { id: 2,  title: "Overview",             name: "Analytics",    link: `${DASHBOARD_BASE_LINK}/analytics`,    icon: ChartArea      },
    { id: 3,  title: "Operations",           name: "Tasks",        link: `${DASHBOARD_BASE_LINK}/tasks`,        icon: ListTodo       },
    { id: 4,  title: "Operations",           name: "Projects",     link: `${DASHBOARD_BASE_LINK}/projects`,     icon: Workflow       },
    { id: 5,  title: "Operations",           name: "Teams",        link: `${DASHBOARD_BASE_LINK}/teams`,        icon: UserGroup      },
    { id: 6,  title: "Finance & Resources",  name: "Inventory",    link: `${DASHBOARD_BASE_LINK}/inventory`,    icon: WarehouseIcon  },
    { id: 7,  title: "Finance & Resources",  name: "Invoices",     link: `${DASHBOARD_BASE_LINK}/invoices`,     icon: ReceiptText    },
    { id: 8,  title: "Finance & Resources",  name: "Billing",      link: `${DASHBOARD_BASE_LINK}/billing`,      icon: DollarSignIcon },
    { id: 9,  title: "System",               name: "Users",        link: `${DASHBOARD_BASE_LINK}/users`,        icon: UsersIcon      },
    { id: 10, title: "System",               name: "Server",       link: `${DASHBOARD_BASE_LINK}/server`,       icon: Server         },
    { id: 11, title: "System",               name: "Storage",      link: `${DASHBOARD_BASE_LINK}/storage`,      icon: Database       },
    { id: 12, title: "System",               name: "Ai Assistant", link: `${DASHBOARD_BASE_LINK}/ai-assistant`, icon: Bot            },
    { id: 13, title: "System",               name: "Settings",     link: `${DASHBOARD_BASE_LINK}/settings`,     icon: Settings       },
];

// add list for navlinks like teams routes

export const dashIcons = {
    userProfile: UserCircle,
    maximize: Maximize2Icon,
    minimize: Minimize2Icon,
    search: Search,
    chat: MessageCircle,
    token: Coins,
    project: Workflow,
    study: BookOpenText,
    darkMode: MoonIcon,
    lightMode: SunIcon,
    logout: LogOut,
};

export const mainDashboardData = [
    {analytics: "Analytics", icon: "analytics", link: "/dashboard/analytics"},
    {analytics: "Tasks", icon: "tasks", link: "/dashboard/tasks"},
    {analytics: "Users", icon: "users", link: "/dashboard/users"},
    {analytics: "Projects", icon: "projects", link: "/dashboard/projects"},
    {analytics: "Reports", icon: "reports", link: "/dashboard/reports"},
    {analytics: "Settings", icon: "settings", link: "/dashboard/settings"},
    {analytics: "Finance", icon: "finance", link: "/dashboard/finance"},
    {inventory: "Inventory", icon: "inventory", link: "/dashboard/inventory"},
    {teams: "Teams", icon: "teams", link: "/dashboard/teams"},
];

/*

<div className="flex justify-between items-center w-full mb-20">
    <h1 className="text-4xl nav-link-font-type">Home</h1>
    <div className="relative hidden md:block py-0.5 bg-[#f3f3f3] dark:bg-[#131313] rounded-full w-36">
        <div className="relative flex z-50 gap-4.5 justify-center items-center text-gray-600 dark:text-gray-200">
            <span className={`rounded-full p-2 ${mode === "system" ? "" : "hover:bg-[#ebebeb] dark:hover:bg-[#282828] cursor-pointer"}`} onClick={() => setMode("system")}><Monitor size={18}/></span>
            <span className={`rounded-full p-2 ${mode === "light" ? "" : "hover:bg-[#ebebeb] dark:hover:bg-[#282828] cursor-pointer"}`} onClick={() => setMode("light")}><SunIcon size={18}/></span>
            <span className={`rounded-full p-2 ${mode === "dark" ? "" : "hover:bg-[#ebebeb] dark:hover:bg-[#282828] cursor-pointer"}`} onClick={() => setMode("dark")}><MoonIcon size={18}/></span>
        </div>
        <span className={`absolute inset-0 ${mode === "system" ? "left-1" : mode === "light" ? "left-14" : "left-27"} top-0.75 drop-shadow-md dark:bg-[#303030] bg-white rounded-full w-8 h-8 transition-all duration-150 ease-in-out`}/>
    </div>
</div>

*/