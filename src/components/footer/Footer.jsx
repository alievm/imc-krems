import React from 'react';
import SocialMedia from "../SocialMedia.jsx";

const Footer = () => {
    return (
        <footer className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <a href="https://pagedone.io/" className="flex justify-center lg:justify-start">
                           <img className="h-20" src="/logo-dark.png" />
                        </a>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Pioneering, open-minded, appreciative. That's what we stand for as a university</p>
                       <SocialMedia/>
                    </div>
                    <div className="lg:mx-auto text-center sm:text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;"
                                                    className="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li className="mb-6"><a href="javascript:;"
                                                    className=" text-gray-600 hover:text-gray-900">About</a></li>
                            <li className="mb-6"><a href="javascript:;"
                                                    className=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Features</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-center sm:text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Figma
                                UI System</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Icons
                                Assets</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Responsive
                                Blocks</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Components
                                Library</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-center sm:text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;"
                                                    className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Quick
                                Start</a></li>
                            <li className="mb-6"><a href="javascript:;"
                                                    className=" text-gray-600 hover:text-gray-900">Documentation</a>
                            </li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">User Guide</a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-center sm:text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;"
                                                    className="text-gray-600 hover:text-gray-900">News</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Tips
                                & Tricks</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">New
                                Updates</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Events</a></li>
                        </ul>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500 ">©<a href="">imc</a>2024, All rights reserved.</span>
                        <ul className="flex items-center gap-9 mt-4 lg:mt-0">
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
