import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                 {/* <Route path="/" element={<Home />} /> */}
            </Route>
        </Routes>
    );
};