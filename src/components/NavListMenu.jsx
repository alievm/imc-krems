import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {Button} from "antd";
import {
    NavListMenu,
    NavListMenu2,
    NavListMenu3,
    NavListMenu4,
    NavListMenu5,
    NavListMenu6,
} from "./navbarUtils/NavListMenus.jsx";
import {Link} from "react-router-dom";
import LanguageSelector from "./languageSelector.jsx";
import {useTranslation} from "react-i18next";
import logo from "../assets/logo12223.svg";



function NavList() {
    const {t} = useTranslation();
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <Link to="/">
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        {t("Home")}
                    </ListItem>
                </Link>

            </Typography>
            <NavListMenu />
            <NavListMenu2 />
            <NavListMenu3 />
            <NavListMenu4 />
            <NavListMenu5 />
            <NavListMenu6 />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                {/*<Link to="/contact">*/}
                {/*    <ListItem className="flex items-center gap-2 py-2 pr-4">*/}
                {/*        Contact Us*/}
                {/*    </ListItem>*/}
                {/*</Link>*/}

            </Typography>
        </List>
    );
}

export function NavbarWithMegaMenu() {
    const [openNav, setOpenNav] = React.useState(false);
    const {t} = useTranslation();
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto z-[9999] sticky top-0 max-w-screen-4xl rounded-none px-2 py-1">
            <div className="flex items-center justify-between p-2 text-blue-gray-900">
                <div className="flex items-center gap-2">
                    {/*<img src="/logo-oz.svg" width="60" height="60"/>*/}
                    {/*<h1><span className="line-1">Tashkent State</span> <br/>University of Economics</h1>*/}
                    <Link to="/">
                    <img src={logo} className="w-56"  />
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <NavList/>
                </div>
                <div className="hidden gap-2 lg:flex lg:items-center">
                   <LanguageSelector/>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfUHK0HqlDRRqYHXcf8WGdyTwPVXGnHb4IzKfjn6pM8kSnrVA/viewform?usp=sharing&ouid=104952933179531110614">
                    <Button type="primary" size="sm">
                        {t("applyNow")}
                    </Button>
                    </Link>
                </div>
               <div className="flex lg:hidden items-center gap-1">
               <LanguageSelector/>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
               </div>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className=" lg:hidden">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfslvtJO2i1Tfo2xFpebn_rQtX8GPVSpHGYKbAXj9a4s-YZ2Q/viewform">
                    <Button type="primary" size="sm" block>
                        {t("applyNow")}
                    </Button>
                    </Link>
                </div>
                {/*<div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">*/}
                {/*    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>*/}
                {/*        Log In*/}
                {/*    </Button>*/}
                {/*    <Button variant="gradient" size="sm" fullWidth>*/}
                {/*        Sign In*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </Collapse>
        </Navbar>
    );
}