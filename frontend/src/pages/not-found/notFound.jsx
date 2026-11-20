import RobotPecaLogo from '../../assets/images/illustrations/PECA Robot Repair Mascot.png';
import { getLocaleFromPath, localizedPath } from "../../../i18n/locale";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound({ dashboard = false }) {

  const { t } = useTranslation("translation", {
    keyPrefix: "NotFound",
  });

  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);

  const primaryPath = dashboard ? "/dashboard" : "/login";
  const primaryText = dashboard ? t("backToDashboard") : t("backToLogin");

  return (
      <main className={`relative flex w-full flex-1 items-center justify-center overflow-hidden bg-white px-5 py-12 select-none ${dashboard ? "min-h-[70dvh]" : "min-h-dvh"}`}>
          <section className="flex w-full max-w-lg flex-col items-center text-center">
              <img src={RobotPecaLogo} alt="Peca Robot" onDragStart={(e) => e.preventDefault()} loading="eager" width={1024} height={1024} className="mb-5 h-auto w-40 sm:w-48 md:w-56" />
              <h1 className="text-7xl font-bold tracking-tight text-[#192852] sm:text-8xl">404</h1>
              <h2 className="mt-4 text-2xl font-semibold text-[#192852] sm:text-3xl">{t("title")}</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 sm:text-base">{t("description")}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link to={localizedPath(primaryPath, locale)} className="rounded-lg bg-[#192852] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#192852]/90">{primaryText}</Link>
                  {!dashboard && <Link to={localizedPath("/", locale)} className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-[#192852] transition-colors hover:bg-gray-50">{t("backToHome")}</Link>}
              </div>
          </section>
      </main>
  );
}