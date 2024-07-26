import React, {useEffect, useState} from 'react';
import { Card, Typography } from "@material-tailwind/react";
import FadeIn from "../components/FadeIn.jsx";
import {FaCalendarAlt, FaGlobe, FaHandsHelping, FaLanguage, FaUniversity, FaUser} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {getExchange, getNews} from "../service/newsService.js";
import {Link} from "react-router-dom"; // Ensure you have this component for the fade-in effect

const ExchangeProgram = () => {
    const { t } = useTranslation();
    const [newsData, setNewsData] = useState([]);
    const [eventsData, setEventsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("news");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getExchange();
                setNewsData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    console.log(newsData)

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
                            <Typography
                                className="text-lg text-gray-800">{t('gainInternationalAcademicExposure')}</Typography>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-main p-3 rounded-md">
                                <FaUniversity className="text-4xl text-white"/>
                            </div>
                            <Typography
                                className="text-lg text-gray-800">{t('experienceDifferentTeachingMethods')}</Typography>
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
                                    <Typography
                                        className="text-lg text-gray-800">{t('culturalExcursionsAndEvents')}</Typography>
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
                                    <Typography
                                        className="text-lg text-gray-800">{t('localStudentOrganizations')}</Typography>
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

            <div>
                {error && <p>Error: {error}</p>}
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-6">
                        {activeTab === "news" && newsData.map((news) => (
                            <div key={news.id} className="relative rounded overflow-hidden shadow-lg my-4 mx-4">
                                <Link to={`/news/${news.id}`}>
                                    <img className="w-full object-cover h-[300px]" src={news.path} alt={news.title}/>
                                    <div
                                        className="absolute bottom-0 left-0 right-0 portrait-bg bg-opacity-50 px-6 py-2">
                                        <div
                                            className="font-bold text-sm portrait-top-text max-h-15 h-full overflow-hidden hover:underline"
                                            style={{color: "white"}}>{news.title}</div>
                                        <div className="portrait-bot-text" style={{color: "white"}}>
                                            {new Date(news.created_at).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExchangeProgram;
