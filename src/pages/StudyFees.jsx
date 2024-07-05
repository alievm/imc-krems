import React from 'react';
import {Avatar, Card, CardBody, Typography} from "@material-tailwind/react";
import clsx from "clsx";
import FadeIn from "../components/FadeIn.jsx";
import {motion} from "framer-motion";
import PageIntro from "../components/PageIntro.jsx";
import {Image} from "antd";
import Section from "../components/Section.jsx";
import imageWhiteboard from "../../public/2023.jpg";
import { FaGlobe, FaHandsHelping, FaUsers, FaBriefcase } from 'react-icons/fa';

const StudyFees = () => {
    return (
        <div>
            <div className=" mx-5">
                <div
                    className="relative mt-8 h-72 w-full overflow-hidden rounded-xl profile-card-bg bg-cover bg-center">
                    <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <FadeIn>
                            <h1 className="text-5xl font-semibold text-white">Study Fees</h1>
                        </FadeIn>
                    </div>
                </div>
                <Card className="mx-3 -mt-16 mb-6 lg:mx-4 ">
                    <div className="p-10">
                        <div className="relative  mx-auto">
                            <div
                                className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                                <div className="flex-1 px-6 py-8 lg:p-12 bg-main">
                                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Foundation Program:</h3>
                                    <div className="mt-8">
                                        <div className="flex items-center">
                                            <div className="flex-1 border-t-2 border-gray-200"></div>
                                        </div>
                                        <ul role="list"
                                            className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                            <li className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                              clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-white">Full-time</p>
                                            </li>
                                            <li className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                              clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-white">English</p>
                                            </li>
                                            <li className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                              clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-white">2 Semesters</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-gray-700">
                                    <div
                                        className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                                        <span>$2300</span><span
                                        className="ml-3 text-xl font-medium text-gray-50">USD</span>
                                    </div>
                                    <div className="mt-6">
                                        <div className="rounded-md shadow">
                                            <a href="#"
                                               className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main">Apply
                                                now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-10  mx-auto">
                            <div
                                className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                                <div className="flex-1 px-6 py-8 lg:p-12 bg-main">
                                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">IMC Programs:</h3>
                                    <div className="mt-8">
                                        <div className="flex items-center">
                                            <div className="flex-1 border-t-2 border-gray-200"></div>
                                        </div>
                                        <ul role="list"
                                            className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                            <li className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                              clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-white">Full-time</p>
                                            </li>
                                            <li className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                              clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-white">22 weeks</p>
                                            </li>
                                            <li className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                              clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-white">English</p>
                                            </li>
                                            <li className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                         fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                              clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-white">2 Semesters</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-gray-700">
                                    <div
                                        className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                                        <span>$2300</span><span
                                        className="ml-3 text-xl font-medium text-gray-50">USD</span>
                                    </div>
                                    <div className="mt-6">
                                        <div className="rounded-md shadow">
                                            <a href="#"
                                               className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main">
                                                Apply
                                                now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default StudyFees;
