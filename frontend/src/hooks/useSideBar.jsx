import { useState } from "react";

export function useSideBar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return { isSidebarOpen, toggleSidebar };
}