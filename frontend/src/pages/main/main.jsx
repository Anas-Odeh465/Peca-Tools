import { getLocaleFromPath, localizedPath } from "../../../i18n/locale";
import { LogInIcon, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../ui/logo";

export default function Main() {

  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen select-none">
      <Logo loading="eager" className="w-150 h-auto object-cover" width={1448} height={1086} />
      <div className="flex flex-row justify-center items-center gap-4 mb-6">
        <Link to={localizedPath("/help", locale)} className="px-8 py-3 text-[#192852] flex justify-center items-center gap-2 text-lg border border-gray-300 rounded-md bg-white hover:bg-gray-100 cursor-pointer">
          <HelpCircle size={20}/>
          Help
        </Link>
        <Link to={localizedPath("/login", locale)} className="px-8 py-3 flex justify-center items-center gap-2 text-lg bg-[#192852] text-white rounded-md hover:bg-[#192852]/90 cursor-pointer">
          <LogInIcon size={20}/>
          Login
        </Link>
      </div>
    </div>
  );
}