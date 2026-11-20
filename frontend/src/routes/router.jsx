import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PecaLoader from "../components/loader/peacLoader";
import LocaleSync from "../components/LocaleSync";
import { pages } from "./pages";
import { Suspense } from "react";

function renderRoute(route, isChild = false) {

    if (route.index) {
        return (
            <Route
                key="index"
                index
                element={route.element}
            />
        );
    }

    const path = isChild
        ? route.path.replace(/^\/+/, "")
        : route.path === "*"
            ? "*"
            : route.path === "/"
                ? "/ar?"
                : `/ar?${route.path}`;

    return (
        <Route
            key={path}
            path={path}
            element={route.element}
        >
            {route.children?.map((child) => renderRoute(child, true))}
        </Route>
    );
}

export default function AppRouter() {

    return (
        <Router>
            <LocaleSync />

            <Suspense fallback={<PecaLoader />}>
                <Routes>
                    {pages.map((route) => renderRoute(route))}
                </Routes>
            </Suspense>
        </Router>
    );
}


/* 

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PecaLoader from '../components/loader/peacLoader';
import LocaleSync from '../components/LocaleSync';
import { Suspense } from 'react';
import { pages } from './pages';

export default function AppRouter(){
    return (
        <Router>
            <LocaleSync />
            <Suspense fallback={<PecaLoader />}>
                <Routes>
                    {pages.map((route) => (
                        <Route path={route.path === "*" ? "*" : route.path === "/" ? "/ar?" : `/ar?${route.path}`} element={route.element}>
                            {route?.children?.map((child, index) => 
                               child.index ?
                               (
                                    <Route key={`index-${index}`} index element={child.element} />
                                ) : (
                                    <Route key={child.path} path={child.path} element={child.element} />
                                )
                            )}
                        </Route>
                    ))}
                </Routes>
            </Suspense>
        </Router>
    );
}

*/