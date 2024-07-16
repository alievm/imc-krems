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
    Card, CardBody,
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
import {useTranslation} from "react-i18next";

export function NavListMenu() {
    const {t} = useTranslation();
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
                            {t(title)}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {t(description)}
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
        title: "International Business Management",
        link: "/ibm"
    },
    {
        title: "Tourism and Leisure Management bachelor degree programme",
        link: "/tlm"
    },

];


export function NavListMenu2() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);
    const {t} = useTranslation();

    const [openSub, setOpenSub] = React.useState(false);

    const toggleOpenSub = () => setOpenSub((cur) => !cur);
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
                            {t("Programs")}
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
                                                        className="flex gap-3 items-center capitalize  text-sm font-bold leading-tight"
                                                    >
                                                         {t("Bachelor programs")}
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
                                                    <img src="/university1.svg"/>
                                                    <Typography className="mt-1 text-center" variant="h5">
                                                        {t("Programs Menu")}
                                                    </Typography>
                                                </Card>
                                                <ul className="col-span-4 outline-none outline-0 flex w-full flex-col gap-1">
                                                    {menuItems.map(({ title, description, link }) => (
                                                        <Link to={link} key={title}>
                                                            <MenuItem>
                                                                <Typography variant="h6" color="blue-gray" className="mb-1  leading-tight">
                                                                    {t(title)}
                                                                </Typography>
                                                                <Typography
                                                                    variant="small"
                                                                    color="gray"
                                                                    className="font-normal  leading-tight"
                                                                >
                                                                    {t(description)}
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
                        <Link to="/foundation">
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
                                        {t("Foundation")} {/* Название пункта */}
                                    </Typography>
                                    <Typography
                                        variant="paragraph"
                                        className="text-xs !font-medium text-blue-gray-500"
                                    >
                                        {t("Learn about our foundational principles and support.")} {/* Описание пункта */}
                                    </Typography>
                                </div>
                            </MenuItem>
                        </Link>
                    </ul>
                </MenuList>
            </Menu>
            {/* Мобильное меню */}
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    {/* Перечислите пункты для мобильного меню */}
                    <button className="w-full" onClick={toggleOpenSub}>
                        <MenuItem className="flex items-center gap-3 rounded-lg ">
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
                                    {t("Bachelor programs")}
                                </Typography>
                                {/* Описание пункта */}
                                <Typography
                                    variant="paragraph"
                                    className="text-xs !font-medium text-blue-gray-500"
                                >
                                    {t("Discover our collaborative international faculty.")}
                                </Typography>
                            </div>
                        </MenuItem>
                    </button>
                    <Collapse open={openSub}>
                        {menuItems.map(({ title, description, link }) => (
                            <Link to={link} key={title}>
                                <MenuItem className="flex items-center gap-3 rounded-lg">
                                    {/* Menu item content */}
                                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                                        <SquaresPlusIcon
                                            strokeWidth={2}
                                            className="h-6 text-gray-900 w-6"
                                        />
                                    </div>
                                    <div>
                                        {/* Menu item title */}
                                        <Typography variant="h6" color="blue-gray" className="mb-1 text-sm leading-tight">
                                            {t(title)}
                                        </Typography>
                                        {/* Menu item description */}
                                        <Typography variant="small" color="gray" className="font-normal leading-tight">
                                            {t(description)}
                                        </Typography>
                                    </div>
                                </MenuItem>
                            </Link>
                        ))}
                    </Collapse>

                    {/* Другие пункты мобильного меню */}
                    <Link to="/foundation">
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
                                    {t("Foundation")}
                                </Typography>
                                {/* Описание пункта */}
                                <Typography
                                    variant="paragraph"
                                    className="text-xs !font-medium text-blue-gray-500"
                                >
                                    {t("Learn about our foundational principles and support.")}
                                </Typography>
                            </div>
                        </MenuItem>
                    </Link>
                </Collapse>
            </div>
        </React.Fragment>
    );
}

export default NavListMenu2;

export function NavListMenu3() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const {t} = useTranslation();

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
                            {t(title)}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {t(description)}
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
                            {t("Students")}
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
    const {t} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems4.map(
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
                            {t(title)}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {t(description)}
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
                            {t("Admission")}
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
    const {t} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems5.map(
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
                            {t(title)}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {t(description)}
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
                            {t("Alumni")}
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
    const {t} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems6.map(
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
                            {t(title)}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {t(description)}
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
                            {t("News")}
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