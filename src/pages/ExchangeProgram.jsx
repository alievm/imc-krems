import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import FadeIn from "../components/FadeIn.jsx";
import {FaCalendarAlt, FaGlobe, FaHandsHelping, FaLanguage, FaUniversity, FaUser} from "react-icons/fa";
import {useTranslation} from "react-i18next"; // Ensure you have this component for the fade-in effect

const ExchangeProgram = () => {
    const {t} = useTranslation();
    return (
        <div className="mx-5">
            <div className="relative mt-8 h-72 w-full overflow-hidden  profile-card-bg2 bg-cover bg-center">
                <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <h1 className="text-5xl font-semibold text-white">{t('exchangeProgram')}</h1>
                </div>
            </div>
            <div className="container mx-auto p-10">
                <FadeIn>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('programOverview')}</h2>
                        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                            {t('exchangeProgramIntro')}
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="flex items-center space-x-4">
                            <div className="bg-main p-3 rounded-md">
                                <FaGlobe className="text-4xl text-white"/>
                            </div>
                            <Typography className="text-lg text-gray-800">{t('gainInternationalAcademicExposure')}</Typography>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-main p-3 rounded-md">
                                <FaUniversity className="text-4xl text-white"/>
                            </div>
                            <Typography className="text-lg text-gray-800">{t('experienceDifferentTeachingMethods')}</Typography>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-main p-3 rounded-md">
                                <FaGlobe className="text-4xl text-white"/>
                            </div>
                            <Typography className="text-lg text-gray-800">{t('developGlobalPerspective2')}</Typography>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-main p-3 rounded-md">
                                <FaLanguage className="text-4xl text-white"/>
                            </div>
                            <Typography className="text-lg text-gray-800">{t('improveLanguageSkills')}</Typography>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-main p-3 rounded-md">
                                <FaUser className="text-4xl text-white"/>
                            </div>
                            <Typography className="text-lg text-gray-800">{t('buildDiverseNetwork')}</Typography>
                        </div>
                    </div>

                    <div className="container mx-auto p-10">
                        <FadeIn>
                            <div className="text-center">
                                <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('partnerUniversities')}</h2>
                                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                                    {t('partnerUniversitiesIntro')}
                                </p>
                            </div>
                            <ul className="list-none text-lg text-gray-800">
                                <li className="p-4 border border-b-0">{t('universityOfLund')}</li>
                                <li className="p-4 border border-b-0">{t('universityMalaya')}</li>
                                <li className="p-4 border border-b-0">{t('aristotleUniversity')}</li>
                                <li className="p-4 border border-b-0">{t('hochschuleStralsund')}
                                </li>
                                <li className="p-4 border ">{t('hsbBremen')}
                                </li>
                            </ul>
                        </FadeIn>
                    </div>

                    <div className="container mx-auto p-10">
                        <FadeIn>
                            <div className="text-center">
                                <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('academicAndCulturalEnrichment')}</h2>
                                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                                    {t('academicAndCulturalEnrichmentIntro')}
                                </p>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-main p-3 rounded-md">
                                        <FaCalendarAlt className="text-4xl text-white"/>
                                    </div>
                                    <Typography className="text-lg text-gray-800">{t('culturalExcursionsAndEvents')}</Typography>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-main p-3 rounded-md">
                                        <FaLanguage className="text-4xl text-white"/>
                                    </div>
                                    <Typography className="text-lg text-gray-800">{t('languageCourses')}</Typography>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-main p-3 rounded-md">
                                        <FaUser className="text-4xl text-white"/>
                                    </div>
                                    <Typography className="text-lg text-gray-800">{t('localStudentOrganizations')}</Typography>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-main p-3 rounded-md">
                                        <FaHandsHelping className="text-4xl text-white"/>
                                    </div>
                                    <Typography className="text-lg text-gray-800">{t('communityService')}</Typography>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    {t('deeperUnderstanding')}
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default ExchangeProgram;
