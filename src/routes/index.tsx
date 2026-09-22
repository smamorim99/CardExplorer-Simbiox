import { Route, Routes } from "react-router";
import { CardSearch } from "../pages/CardSearch.tsx";
import { CardDetails } from "../pages/CardDetails/index.tsx";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CardSearch />} />
            <Route path="/search" element={<CardSearch />} />
            <Route path="/detail/:name" element={<CardDetails />} />
        </Routes>
    );
}