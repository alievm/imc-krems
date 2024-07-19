import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { getVacancies } from "../service/vacancyService.jsx";
import { Alert, Button, Pagination, Spin } from "antd";

const StudentCareer = () => {

    const { t } = useTranslation();
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
            // Filter vacancies to include only those with "type": "student-career"
            const filteredVacancies = data.data.filter(vacancy => vacancy.type === "student-career");
            setVacancyData(filteredVacancies); // Set the filtered vacancy data
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
            <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
                <header className="py-16 sm:text-center">
                    <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
                        Students careers centre
                    </h1>
                    <p className="text-lg text-slate-700 dark:text-slate-400">
                        All the latest IMC Krems vacancies and offers for students.
                    </p>
                </header>
                <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
                    <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-gray-300 dark:bg-slate-800 sm:block" />
                    <div className="space-y-16">

                        {vacancyData.length > 0 ? (
                            vacancyData.map((vacancy) => (
                                <article id={vacancy.id} className="relative group">
                                    <div
                                        className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"/>
                                    <svg
                                        viewBox="0 0 9 9"
                                        className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                                    >
                                        <circle
                                            cx="4.5"
                                            cy="4.5"
                                            r="4.5"
                                            stroke="currentColor"
                                            className="fill-white dark:fill-slate-900"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                    <div className="relative">
                                        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                                            {vacancy.title}
                                        </h3>
                                        <div
                                            className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                                            <p>
                                                {vacancy.description}
                                            </p>
                                        </div>
                                        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                            <dt className="sr-only">Date</dt>
                                            <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                                <time >{formatDate(vacancy.created_at)}</time>
                                            </dd>
                                        </dl>
                                    </div>
                                </article>
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
            </main>

        </div>
    );
};

export default StudentCareer;
