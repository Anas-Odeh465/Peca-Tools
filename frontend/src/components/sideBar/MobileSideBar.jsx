import { dashSideBar, dashIcons } from "../../data/maindashboard";
import { useState, useRef, useEffect } from "react";
import AvatarBuilder from "../../ui/AvatarBuilder";
import { XIcon, MenuIcon } from "lucide-react";
import {NavLink} from "react-router-dom";

export default function MobileSideBar(){

    const [isMenuOpend, setIsMenuOpend] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpend(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return(
        <div className="relative md:hidden">
            <div onClick={() => setIsMenuOpend(prev => !prev)} className={`hover:bg-[#f3f3f3] text-gray-700  bg-white ${isMenuOpend ? "bg-white drop-shadow-md" : ""} p-1 rounded-lg cursor-pointer`}>
                {isMenuOpend ? <XIcon /> : <MenuIcon />}
            </div>
            <div className="relative" ref={menuRef}>
                <div className={`absolute -right-5 top-0 sm:w-80 w-60 h-fit mx-12 transition-all duration-300 ease-in-out ${isMenuOpend ? "opacity-100" : "opacity-0 pointer-events-none "} bg-white drop-shadow-2xl rounded-lg`}>
                    <div className="flex flex-col justify-center items-center">
                        {dashSideBar.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.link}
                                end={item.link === "/dashboard"}
                                className={({isActive}) => ` flex items-center  w-full placeHolder-font-type text-sm p-1 ${item.name === "Home" ? "rounded-tl-lg rounded-tr-lg" : ""} ${isActive ? 'bg-[#e6e6e6] cursor-default' : 'hover:bg-[#ededed] cursor-pointer'}`}
                            >
                                <div className="w-10 h-9 flex items-center justify-center shrink-0">
                                    <item.icon size={18}/>
                                </div>
                                <span className="ml-2">{item.name}</span>
                            </NavLink>
                        ))}
                        <div className="bg-gray-300 h-px w-full"/>
                        <div className="flex justify-start items-center gap-2 p-2 w-full hover:bg-gray-50 cursor-pointer rounded-bl-lg rounded-br-lg">
                            <AvatarBuilder name="Anas" />
                            <span className="text-sm ">Anas Odeh</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}