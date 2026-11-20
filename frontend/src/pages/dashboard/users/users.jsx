import DashboardNavBar from "../../../components/navigation/dashboardPagesNavBar";
import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Users(){

    const path = useLocation();
    const currnetPath = path.pathname;

    const navigations = [
        {id: 1, name: 'General', link: 'general'},
        {id: 1, name: 'Members', link: 'members'},
    ];

    return(
        <div className="relative w-full h-full mx-0">
            <DashboardNavBar pageName="Users" includedNavegationLine={false} paddingYLevel = {2} />
            <div className="flex justify-start items-center gap-3 px-6 py-2  border-b border-[#e8e8e8]">
                {navigations.map((item) => (
                    <NavLink 
                        to={item.link} 
                        key={item.id} 
                        className={({isActive}) => `relative text-sm hover:text-gray-800 transition-all duration-300 ease-in-out ${isActive ? "text-black  font-normal" : "text-gray-500 font-light"}`}
                    >
                        {item.name}
                        {currnetPath.includes(item.name) ? <span className="absolute top-10 left-0 h-px w-12 bg-black">currnetPath</span> : null}
                    </NavLink>
                ))}
            </div>
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
}

// {[currnetPath.slice('/', 2)].includes(item.name) ? <span className="absolute top-10 left-0 h-px w-12 bg-black"></span> : null}