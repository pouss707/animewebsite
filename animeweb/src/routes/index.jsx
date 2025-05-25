import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AnimeLanding from "../components/AnimeLanding";
import SearchResults from "../components/SearchAnime";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<AnimeLanding />} />
            <Route path="/search" element={<SearchResults />} />
        </Routes>
    );
}
export default AppRoutes;

