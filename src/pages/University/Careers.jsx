import React from 'react';
import PageIntro from "../../components/PageIntro.jsx";

const Careers = () => {
    return (
        <div>
            <PageIntro eyebrow="CAREERS" title="Vacancies">
            </PageIntro>
            <div className="grid grid-cols-1 lg:grid-cols-2 overflow-y-auto gap-x-20">
                <div>
                    <div className="p-4 max-w-xl mx-auto dark:bg-gray-800">
                        <h2
                            className="header-title dark:text-gray-100 mb-8 text-3xl font-bold lg:text-4xl"
                        >
                            Hiring process consists of 4 stages:
                        </h2>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-600">
                                        <svg
                                            className="h-6 w-6 text-orange-600 dark:text-slate-200"
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
                                    Required Application Documents: <br/>
                                    • Cover letter <br/>
                                    • CV<br/>
                                    • Recommendation letter(s) <br/>
                                    • Teaching portfolio <br/>
                                    • Sample Syllabi <br/>
                                    • Research Statement <br/>
                                    • Statement of Teaching Philosophy <br/>

                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-600">
                                        <svg
                                            className="h-6 w-6 text-orange-600 dark:text-slate-200"
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
                                    • Committee creates a shortlist of candidates <br/>
                                    • First round of interviews for shortlist of candidates <br/>
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-600">
                                        <svg
                                            className="h-6 w-6 text-orange-600 dark:text-slate-200"
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
                                    • Campus interviews: <br/>
                                    • Demo lesson to faculty and students <br/>
                                    • Followed by Q&A <br/>
                                    • Campus tour <br/>

                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-600">
                                        <svg
                                            className="h-6 w-6 text-orange-600 dark:text-slate-200"
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
                                    • Making an offer <br/>
                                    • Signing employment contract<br/>

                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-600 bg-orange-600">
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
                        <div className="max-w-full lg:max-w-screen-lg mx-auto overflow-hidden">
                            PLACE FOR VACANCUES (DEV...)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
