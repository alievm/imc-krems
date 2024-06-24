import React from 'react';
import {Outlet} from "react-router-dom";
import {NavbarWithMegaMenu} from "./components/NavListMenu.jsx";
import {PiFacebookLogo, PiFacebookLogoFill, PiInstagramLogoFill} from "react-icons/pi";
import {FaFacebook} from "react-icons/fa";
import {GrLinkedin} from "react-icons/gr";
import {HiMegaphone} from "react-icons/hi2";
import Footer from "./components/footer/Footer.jsx";

const Layout = () => {
    return (
        <div className="relative bg-transparent">
            <NavbarWithMegaMenu/>
            <div>
                <Outlet/>
            </div>

                <Footer />

        </div>
    );
};

export default Layout;
