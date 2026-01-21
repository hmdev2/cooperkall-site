import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { useState } from "react";
import { Services } from "../pages/Services";

type pages = 'home' | 'about' | 'services' | 'blog' | 'contacts';

export const AppRoutes = () => {
    const [activePage, setActivePage] = useState<pages>('home');

    return (
        <Routes>
            <Route 
                element={
                    <DefaultLayout 
                        activePage={activePage}
                        setActivePage={setActivePage}
                    />
                }
            >
                <Route 
                    path="/" 
                    element={
                        <Home 
                            setActivePage={setActivePage}
                        />
                    } 
                />
                <Route path="/about" element={<About />} />
                <Route 
                    path="/services" 
                    element={
                        <Services 
                            setActivePage={setActivePage}
                        />
                    } 
                />
            </Route>
        </Routes>
    );
};