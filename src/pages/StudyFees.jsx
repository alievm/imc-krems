import React from 'react';
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import clsx from "clsx";
import FadeIn from "../components/FadeIn.jsx";
import { useTranslation } from "react-i18next";

const StudyFees = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className=" mx-5">
                <div
                    className="relative mt-8 h-72 w-full overflow-hidden profile-card-bg bg-cover bg-center">
                    <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <FadeIn>
                            <h1 className="text-5xl font-semibold text-white">{t('studyFees.title')}</h1>
                        </FadeIn>
                    </div>
                </div>
                <div className="p-10">
                    <div className="relative  mx-auto">
                        <div
                            className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                            <div className="flex-1 px-6 py-8 lg:p-12 bg-main">
                                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{t('studyFees.foundationProgram.title')}</h3>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="flex-1 border-t-2 border-gray-200"></div>
                                    </div>
                                    <ul role="list"
                                        className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-white"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-white">{t('studyFees.foundationProgram.duration')}</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-white"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-white">{t('studyFees.foundationProgram.language')}</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-white"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-white">{t('studyFees.foundationProgram.durationDetails')}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-white">
                                <div
                                    className="mt-4 flex items-center justify-center text-5xl font-extrabold text-black">
                                    <span>{t('studyFees.foundationProgram.fee')}</span><span
                                    className="ml-3 text-xl font-medium text-black/50">UZS</span>
                                </div>
                                <div className="mt-6">
                                    <div className="rounded-md shadow">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfslvtJO2i1Tfo2xFpebn_rQtX8GPVSpHGYKbAXj9a4s-YZ2Q/viewform"
                                           className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main">{t('applyNow')}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-10  mx-auto">
                        <div
                            className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                            <div className="flex-1 px-6 py-8 lg:p-12 bg-main">
                                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{t('studyFees.imcPrograms.title')}</h3>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="flex-1 border-t-2 border-gray-200"></div>
                                    </div>
                                    <ul role="list"
                                        className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-white"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-white">{t('studyFees.imcPrograms.duration')}</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-white"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-white">{t('studyFees.imcPrograms.language')}</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-white"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                     aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-white">{t('studyFees.imcPrograms.semesters')}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-white">
                                <div
                                    className="mt-4 flex items-center justify-center text-5xl font-extrabold text-black">
                                    <span>{t('studyFees.imcPrograms.fee')}</span><span
                                    className="ml-3 text-xl font-medium text-black/50">$ / per year</span>
                                </div>
                                <div className="mt-6">
                                    <div className="rounded-md shadow">
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfslvtJO2i1Tfo2xFpebn_rQtX8GPVSpHGYKbAXj9a4s-YZ2Q/viewform"
                                           className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main">{t('applyNow')}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyFees;
