import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                 <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};