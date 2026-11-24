import { dashSideBar, dashIcons } from "../../data/maindashboard";
import { localizedPath } from "../../../i18n/locale";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Logo from "../../ui/logo";

export default function SideBar({ sideBar }) {
    const { isSidebarOpen, toggleSidebar } = sideBar;

    const { i18n } = useTranslation();
    const locale = (i18n.resolvedLanguage || i18n.language || "ar").split("-")[0];

    return (
        <div className={`fixed hidden md:flex flex-col ${isSidebarOpen ? 'w-64' : 'w-14'} h-screen select-none bg-[#f3f3f3] platform-link-font-type-desc transition-[width] duration-150 text-black z-50  border-r border-[#e8e8e8] `}>
            <div className={`flex justify-between items-center w-full h-12 pt-4 mb-5 px-2`}>
                <div className={`overflow-hidden transition-[max-width,opacity] duration-150 ease-out ${isSidebarOpen ? 'max-w-30 opacity-100' : 'max-w-0 opacity-0'}`}>
                    <Logo loading="eager" className="w-25 h-auto" width={1448} height={1086}/>
                </div>
                <div 
                    onClick={() => toggleSidebar()} 
                    data-tooltip-id={!isSidebarOpen ? "sidebar-tooltip" : undefined}
                    data-tooltip-content={isSidebarOpen ? "Minimize" : "Maximize"}
                    className="hover:bg-[#ededed] rounded-md cursor-pointer shrink-0"
                >
                    <div className="w-10 h-9 flex items-center justify-center relative">
                        {isSidebarOpen ? (
                            <dashIcons.minimize size={16}/>
                        ) : (
                            <dashIcons.maximize size={16}/>
                        )}
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div 
                    className="relative w-full flex justify-between items-center gap-2 bg-white border border-[#e0e0e0]  hover:bg-gray-50  rounded-md p-1.5 cursor-pointer"
                    data-tooltip-id={!isSidebarOpen ? "sidebar-tooltip" : undefined}
                    data-tooltip-content={!isSidebarOpen ? "Search anything" : ""}
                >
                    <div className={`text-xs flex w-full items-center text-gray-600  ${isSidebarOpen ? 'gap-2' : 'gap-0'}`}>
                        <dashIcons.search size={18} className={`ml-0.5 cursor-pointer shrink-0`} />
                        <span className={`${isSidebarOpen ? 'max-w-30 opacity-100' : 'max-w-0 opacity-0'}`}>Search</span>
                    </div>
                    <span className={`bg-[#ededed] rounded-xl py-0.5 px-1 text-gray-400 text-[11px] whitespace-nowrap ${isSidebarOpen ? 'max-w-30 opacity-100' : 'max-w-0 opacity-0'}`}>Ctrl + /</span>
                </div>
            </div>
            <div className="relative flex flex-col justify-between items-start h-full min-h-0 w-full z-10">
                <div className="scroll-container w-full p-2">
                    {dashSideBar.map((item, index) => (
                        <div key={index} >
                            <div className={`${isSidebarOpen ? "mx-1" : "mx-0"} ${[1, 3, 6, 9].includes(item.id) ? 'relative h-px w-full bg-gray-300 my-5' : ''}`}>
                                {[1, 3, 6, 9].includes(item.id) ? 
                                    (
                                        <span className={`${isSidebarOpen ? "max-w-35 opacity-100 delay-75" : "max-w-0 opacity-0"} absolute left-0 -top-2 pr-1 text-gray-600 text-xs bg-[#f3f3f3]`}> 
                                            {item.title}
                                        </span>
                                    ) 
                                    : 
                                    (null)
                                }
                            </div>
                            <NavLink
                                key={item.link}
                                to={localizedPath(item.link, locale)}
                                end={item.link === "/dashboard"}
                                className={({ isActive }) => `flex items-center w-full rounded-md placeHolder-font-type text-sm transition-colors duration-200 ${isActive ? 'bg-[#e6e6e6] text-gray-600 cursor-default' : 'hover:bg-[#ededed] text-gray-800 cursor-pointer'}`}
                                data-tooltip-id={!isSidebarOpen ? "sidebar-tooltip" : undefined}
                                data-tooltip-content={!isSidebarOpen ? item.name : ""}
                            >
                                <div className="w-10 h-9 flex items-center justify-center shrink-0">
                                    <item.icon size={18} />
                                </div>
                                <span className={`whitespace-nowrap overflow-hidden transition-[max-width,opacity] duration-150 ease-out ${isSidebarOpen ? "max-w-30 opacity-100" : "max-w-0 opacity-0"}`}>
                                    {item.name}
                                </span>
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div 
                    className="group/profile relative w-full py-2 cursor-pointer hover:bg-[#ededed]"
                    data-tooltip-id={!isSidebarOpen ? "sidebar-tooltip" : undefined}
                    data-tooltip-content={!isSidebarOpen ? "Anas Odeh" : ""}
                >
                    <div className={` relative flex items-center justify-start px-2 ${isSidebarOpen ? "gap-2" : "gap-0"}`}>
                        <div className="shrink-0">
                            <div className={`flex items-center justify-center w-9 h-9 rounded-full bg-[#192852] text-white cursor-pointer group-hover/profile:bg-[#192852]/95 group-hover/profile:scale-105 transition-all duration-150 ease-in-out`}>
                                <span className="text-lg font-semibold">{"Anas".charAt(0).toUpperCase()}</span>
                            </div>
                        </div>
                        <div className={`flex flex-col whitespace-nowrap overflow-hidden transition-[max-width,opacity] duration-150 ease-out ${isSidebarOpen ? 'max-w-30 opacity-100 delay-75' : 'max-w-0 opacity-0'}`}>
                            <span>Anas Odeh</span>
                            <span className="text-xs">Team member</span>
                        </div>
                    </div>
                </div>
            </div>
            <Tooltip 
                id="sidebar-tooltip" 
                place="right" 
                style={{ 
                    backgroundColor: "#192852", 
                    color: "#ffffff", 
                    fontSize: "12px", 
                    padding: "0px", 
                    borderRadius: "2px",
                    zIndex: 9999 
                }}
            />
        </div>
    );
}