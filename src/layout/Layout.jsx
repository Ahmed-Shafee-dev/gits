import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import CustomCountainer from "../customContainer/CustomCountainer";

export default function Layout() {
    return (
        <>
            <Navbar />
            <CustomCountainer>
                <Outlet />
            </CustomCountainer>
            <Footer />
        </>
    );
}
