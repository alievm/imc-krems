import React, { useState, useEffect } from "react";
import PageIntro from "../../components/PageIntro.jsx";
import {getNews} from "../../service/newsService.js";
import {getVacancies} from "../../service/vacancyService.jsx";
import {Alert, Button, Pagination, Spin} from "antd";
import {motion} from "framer-motion";
import {HashLink as Link} from "react-router-hash-link";
import {IoIosTimer} from "react-icons/io";
import {GrLanguage} from "react-icons/gr";
import {TbSchoolBell} from "react-icons/tb";
import {AiOutlineSwap} from "react-icons/ai";
import {FaRegMoneyBillAlt} from "react-icons/fa";
import {Typography} from "@material-tailwind/react";
import {useTranslation} from "react-i18next";

const Careers = () => {
    const {t} = useTranslation();
    const [vacancyData, setVacancyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [totalPages, setTotalPages] = useState(1); // State for total pages
    const [pageSize, setPageSize] = useState(10); // State for items per page

    const fetchVacancies = async (page = 1) => {
        try {
            setLoading(true);
            const data = await getVacancies(page, pageSize);
            setVacancyData(data.data); // Set the vacancy data
            setTotalPages(data.last_page); // Set the total pages based on the API response
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVacancies(currentPage); // Fetch vacancies for the current page
    }, [currentPage]);

    if (loading) return <Spin size="large" className="flex justify-center mt-10" />;
    if (error) return <Alert message="Error" description={error} type="error" showIcon className="mt-10" />;

    // Функция форматирования даты
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const date = new Date(dateString).toLocaleDateString('en-GB', options);
        // Заменяем символы '/' на '-'
        return date.replace(/\//g, '-');
    };

    return (
        <div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className=" relative px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div className="max-w-full w-full bg-white p-6">

                    <div className="lg:flex-nowrap relative items-center flex-wrap">
                        <img className="h-[50vh] w-full object-cover z-[10]"
                             src="/header-career-center (1).jpg"/>
                        <PageIntro
                                   title={t('imcKremsVacancies')}>
                        </PageIntro>

                    </div>


                </div>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-y-auto gap-x-20">
                <div>
                    <div className="p-4 max-w-xl mx-auto dark:bg-gray-800">
                        <h2
                            className="header-title dark:text-gray-100 mb-8 text-3xl font-bold lg:text-4xl"
                        >
                            {t('hiringProcess')}
                        </h2>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#798591]">
                                        <svg
                                            className="h-6 w-6 text-gray-800 dark:text-slate-200"
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 5l0 14"/>
                                            <path d="M18 13l-6 6"/>
                                            <path d="M6 13l6 6"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300 dark:bg-slate-500"/>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
                                    1
                                </p>
                                <p className="text-gray-600 dark:text-slate-400">
                                    {t('requiredDocuments')}: <br/>
                                    • {t('coverLetter')} <br/>
                                    • {t('cv')}<br/>
                                    • {t('recommendationLetters')} <br/>
                                    • {t('teachingPortfolio')} <br/>
                                    •  {t('sampleSyllabi')}<br/>
                                    • {t('researchStatement')} <br/>
                                    • {t('teachingPhilosophy')} <br/>

                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#798591]">
                                        <svg
                                            className="h-6 w-6 text-gray-800 dark:text-slate-200"
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 5l0 14"/>
                                            <path d="M18 13l-6 6"/>
                                            <path d="M6 13l6 6"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300 dark:bg-slate-500"/>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
                                    2
                                </p>
                                <p className="text-gray-600 dark:text-slate-400">
                                    • {t('committeeShortlist')} <br/>
                                    • {t('firstRoundInterviews')} <br/>
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#798591]">
                                        <svg
                                            className="h-6 w-6 text-gray-800 dark:text-slate-200"
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 5l0 14"/>
                                            <path d="M18 13l-6 6"/>
                                            <path d="M6 13l6 6"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300 dark:bg-slate-500"/>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
                                    3
                                </p>
                                <p className="text-gray-600 dark:text-slate-400">
                                    • {t('campusInterviews')} <br/>
                                    • {t('demoLesson')} <br/>
                                    • {t('qaSession')} <br/>
                                    • {t('campusTour')} <br/>

                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#798591]">
                                        <svg
                                            className="h-6 w-6 text-gray-800 dark:text-slate-200"
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 5l0 14"/>
                                            <path d="M18 13l-6 6"/>
                                            <path d="M6 13l6 6"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300 dark:bg-slate-500"/>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
                                    4
                                </p>
                                <p className="text-gray-600 dark:text-slate-400">
                                    • {t('makingOffer')} <br/>
                                    • {t('signingContract')}<br/>

                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#798591] bg-main">
                                        <svg
                                            className="h-6 w-6 text-white dark:text-slate-200"
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M5 12l5 5l10 -10"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container pl-0 mx-auto mb-10">
                        <div className="max-w-full lg:max-w-screen-lg mx-auto overflow-hidden px-10">
                            {vacancyData.length > 0 ? (
                                vacancyData.map((vacancy) => (
                                    <div key={vacancy.id}
                                         className="mb-6 p-6 border border-gray-200 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
                                        <div className="flex items-center mb-4">
                                            <img src="/logo-dark.png" alt="Company Logo" className="h-16 w-auto mr-4 "/>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-1 text-main">{vacancy.title}</h3>
                                                <p className="text-gray-500 dark:text-slate-400">{formatDate(vacancy.created_at)}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-slate-400 mb-4">{vacancy.description}</p>
                                        <div className="flex justify-between items-center">
                                            {vacancy.salary && (
                                                <span className="text-green-500 font-semibold">
                                                    Salary: {vacancy.salary}
                                                </span>
                                            )}
                                            <Button type="primary" className="px-4 py-2 ">
                                                Apply Now
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600 dark:text-slate-400">No vacancies available.</p>
                            )}

                            <Pagination
                                current={currentPage}
                                total={totalPages * pageSize}
                                pageSize={pageSize}
                                onChange={(page) => setCurrentPage(page)}
                                showSizeChanger={false}
                                className="flex justify-center mt-6 border-[#798591]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
