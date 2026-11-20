import ForgotPassword from "../pages/forgot-password/forgotPassword";
import UsersGeneral from "../pages/dashboard/users/usersGeneral";
import UsersMembers from "../pages/dashboard/users/usersMembers";
import DashboardLayout from "../pages/dashboard/dashboard";
import AiAssistant from "../pages/dashboard/aiAssistant";
import Analytics from "../pages/dashboard/analytics";
import Inventory from "../pages/dashboard/inventory";
import NotFound from "../pages/not-found/notFound";
import Projects from "../pages/dashboard/projects";
import Settings from "../pages/dashboard/settings";
import Invoices from "../pages/dashboard/invoices";
import Users from "../pages/dashboard/users/users";
import Storage from "../pages/dashboard/storage";
import Billing from "../pages/dashboard/billing";
import Server from "../pages/dashboard/server";
import Tasks from "../pages/dashboard/tasks";
import Teams from "../pages/dashboard/teams";
import { Navigate } from "react-router-dom";
import Home from "../pages/dashboard/Home";
import Login from "../pages/login/login";
import Main from "../pages/main/main";
import Help from "../pages/help/help";

export const pages = [
    { path: "/", element: <Main /> },
    { path: "/login", element: <Login /> },
    { path: "/help", element: <Help /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "analytics", element: <Analytics /> },
            { path: "tasks", element: <Tasks /> },
            { path: "projects", element: <Projects /> },
            { 
                path: "users", 
                element: <Users />,
                children: [
                    { index: true, element: <Navigate to="general" replace /> },
                    { path: 'general', element: <UsersGeneral  /> },
                    { path: 'members', element: <UsersMembers  /> },
                    { path: "*", element: <NotFound dashboard /> }
                ]
            },
            { path: "teams", element: <Teams /> },
            { path: "inventory", element: <Inventory /> },
            { path: "invoices", element: <Invoices /> },
            { path: "billing", element: <Billing /> },
            { path: "server", element: <Server /> },
            { path: "storage", element: <Storage /> },
            { path: "ai-assistant", element: <AiAssistant /> },
            { path: "settings", element: <Settings /> },
            { path: "*", element: <NotFound dashboard /> }
        ]
    },
    { path: "*", element: <NotFound /> },
];