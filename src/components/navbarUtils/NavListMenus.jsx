import React from "react";
import {
    navListMenuItems,
    navListMenuItems2,
    navListMenuItems3,
    navListMenuItems4,
    navListMenuItems5, navListMenuItems6
} from "./menuItems.js";
import {
    Button,
    Card,
    Collapse,
    ListItem,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography
} from "@material-tailwind/react";
import {ChevronDownIcon} from "@heroicons/react/24/outline/index.js";
import {CursorArrowRaysIcon, SquaresPlusIcon, UserGroupIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

export function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description, url  }, key) => (
            <a href={url} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );


    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            University
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}
const menuItems = [
    {
        title: "1.1 International Business Management",
        link: "/ibm"
    },
    {
        title: "1.2 Tourism and Leisure Management bachelor degree programme",
        link: "/tlm"
    },

];


export function NavListMenu2() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <React.Fragment>
            {/* Главное меню */}
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Programs {/* Название основного пункта меню */}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                {/* Список подменю */}
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
                        {/* Пункты меню */}
                        <a href="#">
                            <MenuItem className="flex items-center gap-3 rounded-lg">
                                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                    {" "}
                                    <SquaresPlusIcon
                                        strokeWidth={2}
                                        className="h-6 text-gray-900 w-6"
                                    />
                                </div>
                                <div>
                                        <Menu open={openMenu} handler={setOpenMenu} allowHover>
                                            <MenuHandler>
                                                <Button
                                                    variant="text"
                                                    className="text-left hover:bg-transparent"
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        color="blue-gray"
                                                        className="flex items-center text-sm font-bold"
                                                    >
                                                    International joint faculty between TSUE and IMC Krems {/* Название пункта */}{" "}
                                                    <ChevronDownIcon
                                                        strokeWidth={2.5}
                                                        className={`h-3.5 w-3.5 transition-transform ${
                                                            openMenu ? "rotate-180" : ""
                                                        }`}
                                                    />
                                                    </Typography>
                                                </Button>
                                            </MenuHandler>
                                            <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                                                <Card
                                                    shadow={false}
                                                    className="col-span-3 bg-[#798591] outline-none outline-0 text-white flex h-full w-full items-center justify-center rounded-lg p-4"
                                                >
                                                    <Typography className="mt-5 text-center" variant="h5">
                                                        Programs Menu
                                                    </Typography>
                                                </Card>
                                                <ul className="col-span-4 outline-none outline-0 flex w-full flex-col gap-1">
                                                    {menuItems.map(({ title, description, link }) => (
                                                        <Link to={link} key={title}>
                                                            <MenuItem>
                                                                <Typography variant="h6" color="blue-gray" className="mb-1">
                                                                    {title}
                                                                </Typography>
                                                                <Typography
                                                                    variant="small"
                                                                    color="gray"
                                                                    className="font-normal"
                                                                >
                                                                    {description}
                                                                </Typography>
                                                            </MenuItem>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            </MenuList>
                                        </Menu>
                                </div>
                            </MenuItem>
                        </a>
                        {/* Другие пункты меню */}
                        <a href="#">
                            <MenuItem className="flex items-center gap-3 rounded-lg">
                                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                    {" "}
                                    <UserGroupIcon
                                        strokeWidth={2}
                                        className="h-6 text-gray-900 w-6"
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="flex items-center text-sm font-bold"
                                    >
                                        Foundation {/* Название пункта */}
                                    </Typography>
                                    <Typography
                                        variant="paragraph"
                                        className="text-xs !font-medium text-blue-gray-500"
                                    >
                                        Learn about our foundational principles and support. {/* Описание пункта */}
                                    </Typography>
                                </div>
                            </MenuItem>
                        </a>
                    </ul>
                </MenuList>
            </Menu>
            {/* Мобильное меню */}
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    {/* Перечислите пункты для мобильного меню */}
                    <a href="#">
                        <MenuItem className="flex items-center gap-3 rounded-lg">
                            {/* Иконка и название пункта */}
                            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                {" "}
                                <SquaresPlusIcon
                                    strokeWidth={2}
                                    className="h-6 text-gray-900 w-6"
                                />
                            </div>
                            <div>
                                {/* Заголовок пункта */}
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="flex items-center text-sm font-bold"
                                >
                                    International joint faculty between TSUE and IMC Krems
                                </Typography>
                                {/* Описание пункта */}
                                <Typography
                                    variant="paragraph"
                                    className="text-xs !font-medium text-blue-gray-500"
                                >
                                    Discover our collaborative international faculty.
                                </Typography>
                            </div>
                        </MenuItem>
                    </a>
                    {/* Другие пункты мобильного меню */}
                    <a href="#">
                        <MenuItem className="flex items-center gap-3 rounded-lg">
                            {/* Иконка и название пункта */}
                            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                {" "}
                                <UserGroupIcon
                                    strokeWidth={2}
                                    className="h-6 text-gray-900 w-6"
                                />
                            </div>
                            <div>
                                {/* Заголовок пункта */}
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="flex items-center text-sm font-bold"
                                >
                                    Foundation
                                </Typography>
                                {/* Описание пункта */}
                                <Typography
                                    variant="paragraph"
                                    className="text-xs !font-medium text-blue-gray-500"
                                >
                                    Learn about our foundational principles and support.
                                </Typography>
                            </div>
                        </MenuItem>
                    </a>
                </Collapse>
            </div>
        </React.Fragment>
    );
}

export default NavListMenu2;

export function NavListMenu3() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems3.map(
        ({ icon, title, description, url }, key) => (
            <Link to={url} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </Link>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Students
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}


export function NavListMenu4() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems4.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Admission
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

export function NavListMenu5() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems5.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Alumni
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}


export function NavListMenu6() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems6.map(
        ({ icon, title, description }, key) => (
            <a href="#" key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            News
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}