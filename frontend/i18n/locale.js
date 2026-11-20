export const getLocaleFromPath = (pathname) => {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
};

export const removeLocalePrefix = (pathname) => {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3);
  return pathname;
};

export const localizedPath = (pathname, locale) => {
  const path = removeLocalePrefix(pathname);

  if (locale === "ar") {
    return path === "/" ? "/ar" : `/ar${path}`;
  }

  return path;
};
