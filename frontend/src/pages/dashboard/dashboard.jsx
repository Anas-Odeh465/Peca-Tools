import SideBar from "../../components/sideBar/sideBar";
import { useSideBar } from "../../hooks/useSideBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {

    const sideBar = useSideBar();

    return (
        <div className="flex md:flex-row flex-row-reverse min-h-screen bg-white">
            <div className={`${sideBar.isSidebarOpen ? 'w-64' : 'w-14'} hidden md:block transition-[width] duration-150 ease-out overflow-hidden bg-[#f3f3f3]`}>
                <SideBar sideBar={sideBar} />
            </div>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}