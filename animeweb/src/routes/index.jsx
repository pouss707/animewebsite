import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    );
}
export default AppRoutes;

