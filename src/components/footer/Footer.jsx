import React from 'react';
import SocialMedia from "../SocialMedia.jsx";

const Footer = () => {
    return (
        <footer className="w-full  bg-white">
            <div className="mx-auto max-w-7xl container max-w-full px-6 lg:px-8">
                <div
                    className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-2 gap-4 lg:gap-8 py-14 max-w-xl mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-full">
                    <div className="col-span-full mb-10 lg:col-span-1 lg:mb-0">
                        <a href="https://pagedone.io/" className="flex justify-center lg:justify-start">
                            <img
                                loading="lazy"
                                src="/logo122.svg"
                                className="max-w-full  w-72"
                            />
                        </a>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Pioneering,
                            open-minded, appreciative. That's what we stand for as a university</p>
                        <SocialMedia/>
                    </div>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A0d66005c330fcfecfa8bd43d6741d26e68713377b7bd52e263224a977fb94dee&amp;source=constructor"
                       className="w-full" height="284" frameBorder="0"></iframe>
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500 ">©<a href="">imc</a>2024, All rights reserved.</span>
                        <ul className="flex items-center justify-center  gap-9 mt-4 lg:mt-0">
                            <li><a href="javascript:;" className="text-sm text-gray-500">Terms</a></li>
                            <li><a href="javascript:;" className="text-sm text-gray-500">Privacy</a></li>
                            <li><a href="javascript:;" className="text-sm text-gray-500">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
