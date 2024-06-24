import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    NavListMenu,
    NavListMenu2,
    NavListMenu3,
    NavListMenu4,
    NavListMenu5,
    NavListMenu6,
} from "./navbarUtils/NavListMenus.jsx";
import {Link} from "react-router-dom";




function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <Link to="/">
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        Home
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
                <Link to="/contact">
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        Contact Us
                    </ListItem>
                </Link>

            </Typography>
        </List>
    );
}

export function NavbarWithMegaMenu() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto z-[9999] sticky top-0 max-w-screen-4xl rounded-none px-4 py-1">
            <div className="flex items-center justify-around text-blue-gray-900">
               <img src="/logo-dark.png" width="150" height="150" />
                <div className="hidden lg:block">
                    <NavList />
                </div>
                {/*<div className="hidden gap-2 lg:flex">*/}
                {/*    <Button variant="text" size="sm" color="blue-gray">*/}
                {/*        Log In*/}
                {/*    </Button>*/}
                {/*    <Button variant="gradient" size="sm">*/}
                {/*        Sign In*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}