import { Route, Routes } from "react-router";
import { CardSearch } from "../pages/CardSearch.tsx";
import { CardList } from "../pages/CardList/index.tsx";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/search" element={<CardSearch />} />
            <Route path="/list" element={<CardList />} />

        </Routes>
    );
}