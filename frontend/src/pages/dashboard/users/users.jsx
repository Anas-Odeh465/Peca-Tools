import DashboardNavBar from "../../../components/navigation/dashboardPagesNavBar";
import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Users(){

    const path = useLocation();
    const currnetPath = path.pathname;

    const navigations = [
        {id: 1, name: 'General', link: 'general'},
        {id: 2, name: 'Limits', link: 'limits'},
        {id: 3, name: 'Members', link: 'members'},
        {id: 4, name: 'Roles', link: 'roles'},
    ];

    return(
        <div className="relative w-full min-h-full mx-0">
            <div className="sticky top-0 z-40 bg-white">
                <DashboardNavBar pageName="Users" includedNavegationLine={false} paddingYLevel = {2} />
                <div className="flex justify-start items-center gap-4 px-6 py-2  border-b border-[#e8e8e8]">
                    {navigations.map((item) => (
                        <NavLink 
                            to={item.link} 
                            key={item.id} 
                            className={({isActive}) => `relative text-sm hover:text-gray-800 transition-all duration-300 ease-in-out ${isActive ? "text-black  font-normal" : "text-gray-500 font-light"}`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-2 left-0 h-0.5 w-full bg-[#192852] origin-center transition-transform duration-300 ease-in-out motion-reduce:transition-none ${ currnetPath.endsWith(`/${item.link}`) ? "scale-x-100" : "scale-x-0"}`}/>                  
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
}

// {[currnetPath.slice('/', 2)].includes(item.name) ? <span className="absolute top-10 left-0 h-px w-12 bg-black"></span> : null}