import React from 'react';
import { motion } from 'framer-motion';
import PageIntro from "../components/PageIntro.jsx";
import {Typography,   Accordion,
    AccordionHeader,
    AccordionBody,} from "@material-tailwind/react";
import {Image} from "antd";
import { HashLink as Link } from 'react-router-hash-link';
import {AcademicCapIcon, BanknotesIcon, ClockIcon, GlobeAltIcon} from "@heroicons/react/24/solid/index.js";
import {CalendarDaysIcon} from "@heroicons/react/16/solid/index.js";
import {useTranslation} from "react-i18next";
import header from "../assets/header-studium-export-oriented-management.jpg"
import img from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}


const InternationalBusinessManagement = () => {
    const {t} = useTranslation();
    const [open, setOpen] = React.useState(1);
    const [openVideo, setOpenVideo] = React.useState(1)
    const [openStep, setOpenStep] = React.useState()
    const [expandedSectionId, setExpandedSectionId] = React.useState(1); // Состояние для открытого аккордеона

    const toggleSection = (id) => {
        setExpandedSectionId(expandedSectionId === id ? null : id); // Открывает или закрывает аккордеон при клике
    };


    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const handleOpenStep = (index) => {
        setOpenStep((prevIndex) => (prevIndex === index ? null : index));
    };
    const handleOpenVideo = (value) => setOpenVideo(openVideo === value ? 0 : value);


    const courseData = {
        semester1: {
            title: "SEMESTER 1",
            courses: [
                { course: "Principles of Management", sws: 2, ects: 3 },
                { course: "Sustainability and Ethics in Leadership", sws: 1, ects: 1 },
                { course: "Entrepreneurship", sws: 1, ects: 2 },
                { course: "International Marketing and Sales", sws: 2, ects: 3 },
                { course: "Doing Business Abroad: Exporting and Importing", sws: 2, ects: 3 },
                { course: "Accounting I", sws: 2, ects: 4 },
                { course: "Training Intercultural Competence and Self Reflection", sws: 2, ects: 2 },
                { course: "Rhetoric and Presentation", sws: 1, ects: 1 },
                { course: "Foundations of Empirical Social Research", sws: 1, ects: 1 },
                { course: "Qualitative Research Methods", sws: 2, ects: 2 },
                { course: "Business Mathematics - Theory", sws: 1, ects: 2 },
                { course: "Business Mathematics - Exercises", sws: 1, ects: 2 },
                { course: "French I (Level A1)", sws: 3, ects: 4 },
                { course: "French I (Level B1)", sws: 3, ects: 4 },
                { course: "Spanish I (Level A1)", sws: 3, ects: 4 },
                { course: "Spanish I (Level B1)", sws: 3, ects: 4 },
                { course: "Italian I (Level A1)", sws: 3, ects: 4 },
                { course: "German I (Level B1)", sws: 3, ects: 4 },
                { course: "Chinese I (Level A1)", sws: 3, ects: 4 },
                { course: "German I (Level A1)", sws: 3, ects: 4 }
            ]
        },
        semester2: {
            title: "SEMESTER 2",
            courses: [
                { course: "Human Resource Management and Career Development", sws: 2, ects: 3 },
                { course: "Group Dynamics", sws: 1, ects: 1 },
                { course: "Procurement, Production and Logistics", sws: 2, ects: 3 },
                { course: "Doing Business Abroad: FDI", sws: 2, ects: 3 },
                { course: "Accounting II", sws: 2, ects: 3 },
                { course: "Microeconomics", sws: 2, ects: 3 },
                { course: "Quantitative Research Methods", sws: 2, ects: 3 },
                { course: "Principles of Business Data Analysis", sws: 2, ects: 3 },
                { course: "Business Statistics - Theory", sws: 1, ects: 2 },
                { course: "Business Statistics - Exercises", sws: 1, ects: 2 },
                { course: "French II (Level A2)", sws: 3, ects: 4 },
                { course: "French II (Level B1)", sws: 3, ects: 4 },
                { course: "Spanish II (Level A2)", sws: 3, ects: 4 },
                { course: "Spanish II (Level B1)", sws: 3, ects: 4 },
                { course: "Italian II (Level A2)", sws: 3, ects: 4 },
                { course: "German II (Level A2)", sws: 3, ects: 4 },
                { course: "German II (Level B1)", sws: 3, ects: 4 },
                { course: "Chinese II (Level A1/A2)", sws: 3, ects: 4 }
            ]
        },
        semester3: {
            title: "SEMESTER 3",
            courses: [
                { course: "Organisational Theory and Development", sws: 2, ects: 3 },
                { course: "Processes, Audits and Reports in Purpose Driven Organisations", sws: 1.5, ects: 2 },
                { course: "International Project Management and Project Communication", sws: 2, ects: 3 },
                { course: "International Marketing Research and Market Entry", sws: 2, ects: 3 },
                { course: "Managerial Accounting/Controlling and Decision Making", sws: 2, ects: 3 },
                { course: "Finance and Investment", sws: 1.5, ects: 3 },
                { course: "Crowd Funding and Alternative Finance", sws: 2, ects: 3 },
                { course: "Macroeconomics", sws: 3, ects: 3 },
                { course: "Principles of Law", sws: 2, ects: 2 },
                { course: "Establishing Contracts and Negotiation", sws: 1.5, ects: 3 },
                { course: "French III (Level A2/A2+)", sws: 2, ects: 2 },
                { course: "French III (Level B1/B2)", sws: 2, ects: 2 },
                { course: "Spanish III (Level A2/A2+)", sws: 2, ects: 2 },
                { course: "Spanish III (Level B1/B2)", sws: 2, ects: 2 },
                { course: "Italian III (Level A2/A2+)", sws: 2, ects: 2 },
                { course: "German III (Level A2/A2+)", sws: 2, ects: 2 },
                { course: "German III (Level B1/B2)", sws: 2, ects: 2 },
                { course: "Chinese III (Level A2)", sws: 2, ects: 2 }
            ]
        },
        semester4: {
            title: "SEMESTER 4",
            courses: [
                { course: "Practical Training (20 weeks à 32 hours per week)", sws: 0, ects: 26 },
                { course: "Practical Training Coaching Seminar", sws: 1, ects: 2 },
                { course: "Artificial Intelligence Applications in Business", sws: 2, ects: 2 }
            ]
        },
        semester5: {
            title: "SEMESTER 5",
            courses: [
                { course: "Entrepreneurship and Starting a Company", sws: 2, ects: 3 },
                { course: "Budgeting and Financial Management", sws: 2, ects: 3 },
                { course: "Key Account and Performance Management", sws: 2, ects: 2 },
                { course: "Foreign Trade Techniques: Export Risk Management", sws: 2, ects: 3 },
                { course: "Supply Chain Management and Simulation", sws: 3, ects: 3 },
                { course: "Tender and Contracting", sws: 2, ects: 3 },
                { course: "International Relations and Geopolitical Affairs", sws: 2, ects: 2 },
                { course: "International Business Law", sws: 1.5, ects: 2 },
                { course: "Bachelor Seminar I", sws: 1, ects: 3 },
                { course: "French IV (Level A2/B1)", sws: 2, ects: 3 },
                { course: "French IV (Level B2)", sws: 2, ects: 3 },
                { course: "Spanish IV (Level A2/B1)", sws: 2, ects: 3 },
                { course: "Spanish IV (Level B2)", sws: 2, ects: 3 },
                { course: "Italian IV (Level A2/B1)", sws: 2, ects: 3 },
                { course: "German IV (Level A2/B1)", sws: 2, ects: 3 },
                { course: "German IV (Level B2)", sws: 2, ects: 3 },
                { course: "Chinese IV (Level A2+)", sws: 2, ects: 3 },
                { course: "Elective: Future Markets", sws: 1, ects: 3 },
                { course: "Elective: Digitalisation of Business", sws: 1, ects: 3 },
                { course: "Elective: Export Market Metrics", sws: 1, ects: 3 },
                { course: "Elective: Sourcing and Customs Planning", sws: 1, ects: 3 },
                { course: "Elective: Artificial Intelligence Applications and Visualisation of Data", sws: 1, ects: 3 }
            ]
        },
        semester6: {
            title: "SEMESTER 6",
            courses: [
                { course: "International Financial Management", sws: 2, ects: 3 },
                { course: "Elective Case Seminar A: Export of Commodities and Goods", sws: 3, ects: 5 },
                { course: "Elective Case Seminar B: Export of Services", sws: 3, ects: 5 },
                { course: "Elective Case Seminar C: FDI and Engineering Projects abroad", sws: 3, ects: 5 },
                { course: "International Economics", sws: 2, ects: 3 },
                { course: "International Strategies for Sustainable Development", sws: 2, ects: 3 },
                { course: "Community Management and Social Learning", sws: 1, ects: 3 },
                { course: "Bachelor Seminar II and Bachelor Paper", sws: 1, ects: 8 },
                { course: "Bachelor Exam", sws: 0, ects: 2 },
                { course: "French V (Level B1)", sws: 2, ects: 3 },
                { course: "French V (Level C1)", sws: 2, ects: 3 },
                { course: "Spanish V (Level B1)", sws: 2, ects: 3 },
                { course: "Spanish V (Level C1)", sws: 2, ects: 3 },
                { course: "Italian V (Level B1)", sws: 2, ects: 3 },
                { course: "German V (Level B1)", sws: 2, ects: 3 },
                { course: "German V (Level C1)", sws: 2, ects: 3 },
                { course: "Chinese V (Level A2/B1)", sws: 2, ects: 3 }
            ]
        }
    };

    const sections = [
        {
            id: 1,
            title: <>{t('ADMISSION REQUIREMENTS')}</>,
            content: (
                <>
                    <p><strong>{t("What are the admission requirements for bachelor programmes?")}</strong><br/>
                        {t("To qualify for admission to a university of applied sciences bachelor degree programme, you must have an Austrian school-leaving certificate or an equivalent qualification.")}</p>
                    <p><strong>{t("Do you have a school-leaving certificate issued outside Austria?")}</strong><br/>
                        {t("We’ll check to make sure it’s equivalent to an Austrian certificate in accordance with section 4 of the University of Applied Sciences Studies Act (FHG) when you’ve sent us all the relevant documentation via our online application tool. If it is not an equivalent, you’ll receive information on the supplementary examinations you’ll need to pass. In a nutshell, you will have the option of completing a summer school and the necessary supplementary examinations at IMC Krems or look for an external provider. In that case, you might consider our cooperation partner, the University of Applied Sciences Upper Austria: It offers a one-year International Foundation Programme which provides you with all the necessary qualifications you need in order to start your studies in Krems.")}</p>
                    <p><strong>{t("What proof of your language skills is required for our English-language bachelor degree programme?")}</strong><br/>
                        {t("We’ll assess your English language proficiency at your interview, so there is no need to provide additional evidence of your English skills.")}</p>
                    <p><strong>{t("Important")}</strong><br/>
                        {t("Do you still need to complete your military or alternative service? If you’re a male Austrian citizen, we strongly recommend completing your compulsory national service before beginning your studies. This will allow you to finish your degree with no interruptions and start your career without delay afterwards.")}</p>
                </>
            )
        },
        {
            id: 2,
            title: <>{t('ADMISSIONS PROCEDURE')}</>,
            content: (
                <>
                    <p><strong>{t("Application interview")}</strong><br/>
                        {t("We would like to get to know you as a person: As part of the online application you will have to write a statement of motivation and a short essay on a topic relevant to the degree programme. Predefined questions about your motivations as well as the requirements and topics for your essay can be found in the online application. You choose one of the suggested topics, conduct research to broaden your knowledge, deal with the issues and bring your own point of view to the essay. Your answers are to be entered in the fields provided.")}</p>
                    <p>{t("Your statement of motivation and your essay form the basis for your application interview. Every applicant has an opportunity to introduce themselves in a face-to-face discussion, usually with the degree programme director. In addition to the personal introduction and your motivation to study, the applicant and the interviewer discuss the topic selected and the arguments used in the essay, as well as the topic’s relevance for the degree programme.")}</p>
                    <p>{t("The application interview is held in the language of instruction of the degree programme and can take place either online via Microsoft Teams or in presence.")}</p>
                    <p>{t("After the application interview, your statement of motivation, the essay and your performance throughout the interview are assessed on the basis of the content-related remarks, the manner in which they express themselves and the arguments used.")}</p>
                    <p><strong>{t("Interview dates")}</strong><br/>
                        {t("There is usually a selection of dates to choose from, with quotas allocated for each date. You can select a preferred date and time slot for your admission interview during the online application process. In order to still benefit from the full selection of dates, we recommend that you submit your application in good time.")}</p>
                    <p>{t("Get an overview of the dates for your programme.")}<br/>
                        {t("No dates available at the moment.")}</p>
                    <p>{t("After you have successfully completed your online application, your application will be checked for completeness and correctness. As soon as this process is completed, we will inform you by e-mail and confirm the date for your admission interview. We will send you the Microsoft Teams Meeting Link in a separate e-mail a few days before the application interview date.")}</p>
                </>
            )
        },
        {
            id: 3,
            title: <>{t('IMPORTANT DATES AND DEADLINES')}</>,
            content: (
                <>
                    <p><strong>{t("Application for the next study year possible from 01/12/2024")}</strong></p>
                    <p><strong>{t("Application deadline for EU nationals / Extended application deadline 17/04/2024 / 28/06/2024")}</strong></p>
                    <p><strong>{t("Application deadline for non-EU nationals 15/04/2024")}</strong></p>
                    <p>{t("Please note that the IMC University of Applied Sciences Krems reserves the right to close the extended application period at any time without prior notice. We therefore recommend that you submit your application as soon as possible.")}</p>
                </>
            )
        },
        {
            id: 4,
            title: <>{t('APPLY ONLINE')}</>,
            content: (
                <>
                    <p>{t("You've decided for one of our degree programmes? First of all: congratulations and thank you for choosing us! We’ll be happy to guide you step-by-step through your online application.")}</p>
                </>
            )
        },
        {
            id: 5,
            title: <>{t('STUDY-RELEVANT DATES')}</>,
            content: (
                <>
                    <p>{t("You would like to plan ahead and would like to know when your degree programme starts? Here you will find the answer!")}</p>
                </>
            )
        }
    ];


    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="min-h-screen relative px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-full w-full bg-white p-6 rounded-lg shadow-xl">
                    <div className="lg:flex-nowrap relative items-center flex-wrap">
                        <img className="h-[50vh] w-full object-cover z-[10]  mb-10"
                             src={header}/>
                        <div
                            className="z-front text-center"
                            id="section-nav"
                            tabIndex="0"
                        >
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-sm-12 m-0 p-0">
        <span
            className="icon-wrapper menu-open"
            style={{}}
            tabIndex="0"
        >
          <i className="icon fas fa-list"/>
        </span>
                                        <span
                                            className="icon-wrapper menu-close"
                                            style={{
                                                display: 'none'
                                            }}
                                            tabIndex="0"
                                        >
          <i className="icon fas fa-times"/>
        </span>
                                        <ul
                                            className="nav lg:flex  text-sm container mx-auto  items-center justify-around hidden smooth-scroll"
                                            id="anchor-menu"
                                        >
                                            <li className="nav-item">
                                                <Link   className="nav-link" to="/ibm#overview">{t("Overview")}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link   className="nav-link" to="/ibm#curriculum">{t("Curriculum")}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link   className="nav-link" to="/ibm#key-features">{t("Key features")}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link   className="nav-link" to="/ibm#career-options">{t("Career options")}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link   className="nav-link" to="/ibm#videos">{("Videos")}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link   className="nav-link" to="/ibm#information-events">{t("Information events")}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link   className="nav-link" to="/ibm#application-and-admission">{t("Application and admission")}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link   className="nav-link" to="/ibm#advisory-service"> {t("Advisory Service")}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="reading-progress-container">
                                        <div
                                            className="reading-progress-bar"
                                            id="reading-progress-bar"
                                            style={{
                                                width: '2.52389%'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PageIntro  eyebrow={t("International Join Faculty between TSUE & IMC UAS Krems")}
                                   title={t("International Business Management bachelor degree programme")}>
                        </PageIntro>

                    </div>

                    <section id="overview" className="mb-8 text-center max-w-5xl mx-auto">
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">{t("formerly Export-oriented Management")}</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t("International business in a nutshell: Do you enjoy communication? Do you like to travel? Are you open to other cultures? Are you interested in international business relations? Then this degree programme is the perfect choice for you.")}
                        </p>
                        <br/>
                        <p className="text-gray-700 leading-relaxed">
                            {t("We give you the skills and detailed knowledge of international business administration and economics that allow you to deal successfully with partners all over the world.")}
                            {t("It goes without saying that the programme is entirely taught in English, and on top of that you also study an additional foreign language.")}
                        </p>
                    </section>

                    <section className="mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                            <div
                                className="flex flex-col justify-center items-center pb-8 text-center text-black bg-white shadow-md h-full max-h-[220px] ">
                                <div
                                    className="flex justify-center  px-9 py-5 w-full text-lg leading-5  bg-main text-slate-500">
                                    <div className="justify-center items-center flex w-10 h-10 bg-white  rounded-md">
                                        <ClockIcon className="w-6 h-6 link-text"/>
                                    </div>
                                </div>
                                <div className="mt-6 text-md leading-5">{t("Full - time")}</div>
                                <div className="mt-6 text-base leading-4">
                                    {t("Organisational form")}
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center items-center pb-8 text-center text-black bg-white shadow-md h-full max-h-[220px] ">
                                <div
                                    className="flex justify-center  px-9 py-5 w-full text-lg leading-5  bg-main text-slate-500">
                                    <div className="justify-center items-center flex w-10 h-10 bg-white r rounded-md">
                                        <GlobeAltIcon className="w-6 h-6 link-text"/>
                                    </div>
                                </div>
                                <div className="mt-6 text-md leading-5">{t("English")}</div>
                                <div className="mt-6 text-base leading-5">
                                    {t("Language")}
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center items-center pb-8 text-center text-black bg-white shadow-md h-full max-h-[220px] ">
                                <div
                                    className="flex justify-center  px-9 py-5 w-full text-lg leading-5  bg-main text-slate-500">
                                    <div className="justify-center items-center flex w-10 h-10 bg-white rounded-md">
                                        <AcademicCapIcon className="w-6 h-6 link-text"/>
                                    </div>
                                </div>
                                <div className="mt-6 text-md leading-5">{t("6 semesters")}</div>
                                <div className="mt-6 text-base leading-5">
                                    {t("Duration")}
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center items-center pb-8 text-center text-black bg-white shadow-md h-full max-h-[220px] ">
                                <div
                                    className="flex justify-center  px-9 py-5 w-full text-lg leading-5  bg-main text-slate-500">
                                    <div className="justify-center items-center flex w-10 h-10 bg-white rounded-md">
                                        <CalendarDaysIcon className="w-6 h-6 link-text"/>
                                    </div>
                                </div>
                                <div className="mt-6 text-md leading-5">{t("21 weeks")}</div>
                                <div className="mt-6 text-base leading-5">
                                    {t("Internship")}
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-center items-center pb-8 text-center text-black bg-white shadow-md h-full max-h-[220px] ">
                                <div
                                    className="flex justify-center  px-9 py-5 w-full text-lg leading-5  bg-main text-slate-500">
                                    <div className="justify-center items-center flex w-10 h-10 bg-white  rounded-md">
                                        <BanknotesIcon className="w-6 h-6 link-text"/>
                                    </div>
                                </div>
                                <div className="mt-6 text-md leading-5">2300$</div>
                                <div className="mt-6 text-base leading-5">
                                    {t("Study fee")}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8 max-w-5xl mx-auto">
                        <h2 className=" text-gray-800 mb-4 text-center h2-responsive">{t("The degree programme")}</h2>
                        <div className="text-col-2">
                            {/* <h4>The degree programme</h4> */}
                            <p>
                                {t("Nowadays, many companies operate in an international environment – their suppliers, business contacts, consultants and clients are increasingly located abroad, as are their competitors, who also have an international focus, offering new ideas and business models from other countries that are changing markets constantly.")}
                            </p>
                            <p>
                                {t("This means more and more Austrian companies are looking for opportunities abroad. The export sector, often referred to as the engine of economic growth, has expanded from 10,000 companies to over 60,000 in the last 20 years. This brings significant opportunities, but also some challenges.")}
                            </p>
                            <div className="no-break">
                                <Typography variant="h4">{t("Ideally equipped for tomorrow’s job market")}</Typography>
                                <p>
                                    {t("The International Business Management bachelor degree programme has been designed specifically with these requirements in mind. You will examine ways in which you can head up and develop businesses with a view to building a successful future and learn how to effectively manage national and international projects and partnerships. Although the courses focus on international business activities, it goes without saying that the skills you develop can also be applied in the domestic market. We give our students the tools they need to handle complex situations so that they can skilfully address all kinds of challenges using the problem-solving approaches and strategies at their disposal.")}
                                </p>
                            </div>
                            <p>
                                {t("Learning and developing skills and abilities that will give you a clear advantage in your day-to-day work play an important role throughout the programme. The skills modules are closely aligned with the learning modules: you will learn about the theory and practice behind a range of activities, including negotiations and concluding contracts, conflict and receivables management, getting your business in shape for audits and budgeting processes, as well as receiving valuable inputs related to discussions on objectives, performance assessment and employee management.")}
                            </p>
                            <div className="no-break">
                                <Typography variant="h4">{t("International focus from day one")}</Typography>
                                <p>
                                    {t("International and intercultural learning is also very important to us. Here, the emphasis is on personal experience. This starts with the international atmosphere at home – you will work with fellow students from all over the world and regularly discuss international topics and best practice during the courses.")}
                                </p>
                            </div>
                            <p>
                                {t("In addition, you will have the opportunity to spend the third semester abroad at one of our 170+ partner universities without having to put your studies on hold. The fourth semester also has an international element: an internship at a company of your choice abroad.")}
                            </p>
                            <div className="no-break">
                                <Typography variant="h4">{t("Tip")}</Typography>

                                <p>
                                    {t("The dual degree we offer in conjunction either with the Metropolia University of Applied Sciences, Finland or the KEDGE Business School - Campus Bordeaux, France is a particularly attractive option. Besides obtaining a Bachelor of Arts from IMC Krems, you will also be awarded a degree from our partner institution.")}
                                </p>
                            </div>
                            <p>
                                {t("On top of that, you have the chance to spend a semester at one of our international locations – Tashkent in Uzbekistan, Sanya in China or Hanoi in Vietnam.")}
                            </p>
                            <p>
                                <a
                                    href="https://www.fh-krems.ac.at/en/university/media-portal/news/?tx_news_pi1%5BoverwriteDemand%5D%5Bfilter%5D%5Btype%5D=tag&tx_news_pi1%5BoverwriteDemand%5D%5Bfilter%5D%5Bmethod%5D=add&tx_news_pi1%5BoverwriteDemand%5D%5Bfilter%5D%5Bid%5D=53&tx_news_pi1%5BoverwriteDemand%5D%5Bfilter%5D%5Blist%5D%5Btags%5D%5B0%5D=45&cHash=761b62b0a7ecea35cddfdea7b9d31377"
                                    title="Student stories: Export-oriented Management"
                                    target="_blank"
                                    className="btn border-radius-0 btn-outline-primary fontcolor-grey waves-effect btn-sm no-boxshadow m-0 btn-rte"
                                >
                                    {t("Student stories")}
                                    <i className="fa fa-angle-right ml-1"/>
                                </a>
                            </p>
                        </div>

                    </section>

                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="min-h-screen relative  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-5xl bg-white p-6 rounded-lg shadow-xl">

                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">

                        <PageIntro>
                            <h2 className=" text-gray-800 mb-4 text-center h2-responsive">{t("Business administration")}</h2>
                        </PageIntro>
                    </div>

                    <section className="mb-8">
                        <div className="text-col-2">
                            <div className=" ">
                                {/*  */}
                                <p>
                                    {t("Business administration focuses on how organisations and companies are managed. In other words, it examines business processes with the aim of providing insights into the planning, implementation and evaluation of responsibilities, approaches and objectives in different parts of a business.")}
                                </p>
                                <p>
                                    {t("Business administration covers topics including accounting and finance, marketing, human resources and logistics.")}
                                </p>
                                <div className="no-break">
                                    <Typography variant="h4">{t("Core elements of the programme")}</Typography>
                                    <p>
                                        {t("In the International Business Management bachelor degree programme, we provide you with a broad range of business administration skills and know-how, with a focus on international activities.")}
                                    </p>
                                </div>
                                <p>
                                    {t("This is the ideal preparation for capitalising on the opportunities and addressing the challenges of increasingly dynamic markets by implementing established and new business models, and adopting contemporary approaches.")}
                                </p>
                                <p>
                                    {t("What are the most important steps for successful international expansion? First of all, you have to ensure that you understand your counterparts, and take into account any potential cross-cultural differences. Then it’s all about building a relationship so that you can successfully conclude contracts and agreements and manage risks systematically. Finally, you need to actually run the business and solve problems.")}
                                </p>
                                <p>
                                    {t("Statistics underline the importance of exports in our globalised world: the number of exporters has increased from 12,500 in 2000 to over 60,000 today. Meanwhile, exports account for 60% of Austria’s gross domestic product. What’s more, many companies export more than 90% of their goods and services and could not exist if they operated solely on the Austrian market.")}
                                </p>
                                <p>
                                    {t("On the flip side, we also benefit from imports, such as bananas and coffee, but also in terms of energy, computers and software.")}
                                </p>
                                <p>
                                    {t("Many international organisations (such as the United Nations, OPEC and the OSCE) are based in Austria, while numerous international companies also have their European or southeast European headquarters in this country.")}
                                </p>
                            </div>
                        </div>

                    </section>

                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        <div className="flex justify-center w-full gap-3 flex-wrap">
                            <Image className="object-cover" width={300} height={200} src={img}/>
                            <Image className="object-cover" width={300} height={200} src={img2}/>
                            <Image className="object-cover" width={300} height={200} src={img3}/>
                        </div>

                    </Image.PreviewGroup>
                </div>
            </motion.div>

            <section className="bg-main dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-lg mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-white dark:text-gray-600" viewBox="0 0 24 27"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"/>
                        </svg>
                        <blockquote>
                            <p className="text-2xl font-medium text-white dark:text-white">{t("On this programme you will have the opportunity to discover where your interests lie. You will gain a comprehensive overview of a range of industries and departments, putting you in a position to identify a company’s internal and external relationships. Foreign trade, marketing and sales, human resources, project business, or how about logistics? You decide on the focus of your degree with your choice of internship, electives and the topic of your bachelor paper.")}</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-white dark:text-white">{t("Christopher Schwand")}</div>
                                <div className="pl-3 text-sm font-light text-gray-200 dark:text-gray-400">{t("Programme director")}
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="min-h-[40vh] max-w-7xl mx-auto relative  py-12 px-4 sm:px-6 lg:px-8 "
            >
                <PageIntro>
                    <h2 className=" text-gray-800 mb-4 text-center h2-responsive">{t("A formula for success: theoretical knowledge + practical experience")}</h2>
                    <section className="mb-8 max-w-5xl mx-auto text-center">
                        <p className="text-gray-700 w-full leading-relaxed">
                            {t("The programme is built on three pillars.")}
                        </p>
                    </section>
                </PageIntro>
                <li className="w-full list-none mb-5 p-4 bg-white text-gray-800 text-sm leading-7 font-roboto">
                    <div className="lg:flex block flex-wrap lg:flex-wrap shadow-md">
                        <div
                            className="lg:w-1/6 w-full flex justify-center items-center bg-main transition-all duration-500 ease-in-out p-5">
                            <div
                                className="flex justify-center items-center w-16 h-16 bg-white text-4xl link-text rounded-full">
                                <span className="relative ">1</span>
                            </div>
                        </div>
                        <div className="w-5/6 p-5">
                            <h4 className="font-roboto_slab text-2xl font-normal text-black">
                                <span className="sr-only">1. </span>
                                {t("The basics")}
                            </h4>
                            <p className="text-base font-light mt-0 mb-4">
                                {t("Semesters 1-2")}
                            </p>
                            <p className="mt-0 mb-4">
                                {t("At the beginning of your studies, you will gain an overview of business administration and economics and how to act sustainably in business. You will deal with subjects such as marketing, human resources management, accounting, logistics and law. Always with the opportunities and challenges in mind that come with internationalisation and international trade. Thus, we will start with a virtual journey around the world, with a wide variety of products and business sectors already in the first semester.")}
                            </p>
                            <p className="mt-0 mb-4">
                                {t("Another important focus is developing an awareness of cultural differences. During the degree, you will acquire techniques for working as part of diverse teams. You can also select an additional foreign language, with a choice of Chinese, German, French, Italian or Spanish.")}
                            </p>
                        </div>
                    </div>
                </li>
                <li className="w-full list-none mb-5 p-4 bg-white text-gray-800 text-sm leading-7 font-roboto">
                    <div className="lg:flex block flex-wrap lg:flex-wrap shadow-md">
                        <div
                            className="lg:w-1/6 w-full flex justify-center items-center bg-main transition-all duration-500 ease-in-out p-5">
                            <div
                                className="flex justify-center items-center w-16 h-16 bg-white text-4xl link-text rounded-full">
                                <span className="relative ">2</span>
                            </div>
                        </div>
                        <div className="w-5/6 p-5">
                            <h4 className="font-roboto_slab text-2xl font-normal text-black">
                                <span className="sr-only">1. </span>
                                {t("Gathering experience abroad")}
                            </h4>
                            <p className="text-base font-light mt-0 mb-4">
                                {t("Semesters 3-4")}
                            </p>
                            <p className="mt-0 mb-4">
                                {t("Advanced language skills and a good awareness of how practices can vary from culture to culture are important ingredients for a successful international career.")}
                            </p>
                            <p className="mt-0 mb-4">
                                {t("Over the course of the programme, you will learn or improve your skills in your chosen foreign language – on top of your regular lectures, which are taught in English. You will spend semester 4 abroad, when you gain practical insights into the working methods of successful companies and how they function. You will also have the option of doing a semester abroad at one of our 170+ partner universities in semester 3. Our international spirit runs right through the programme!")}
                            </p>
                        </div>
                    </div>
                </li>
                <li className="w-full list-none mb-5 p-4 bg-white text-gray-800 text-sm leading-7 font-roboto">
                    <div className="lg:flex block flex-wrap lg:flex-wrap shadow-md">
                        <div
                            className="lg:w-1/6 w-full flex justify-center items-center bg-main transition-all duration-500 ease-in-out p-5">
                            <div
                                className="flex justify-center items-center w-16 h-16 bg-white text-4xl link-text rounded-full">
                                <span className="relative ">3</span>
                            </div>
                        </div>
                        <div className="w-5/6 p-5">
                            <h4 className="font-roboto_slab text-2xl font-normal text-black">
                                <span className="sr-only">1. </span>
                                {t("Advanced courses")}
                            </h4>
                            <p className="text-base font-light mt-0 mb-4">
                                {t("Semesters 5-6")}
                            </p>
                            <p className="mt-0 mb-4">
                                {t("The electives in semesters 5 and 6 are a major reason why graduates of this programme can look forward to such excellent career prospects. From entrepreneurship and digitalisation to trade, project management and foreign markets – you have the opportunity to tailor your degree to your personal interests through your choice of elective.")}
                            </p>
                            <p className="mt-0 mb-4">
                                {t("In the electives, you will look at the instruments and tools you have studied during the programme from an interdisciplinary perspective and apply them in projects and realistic case studies.")}
                            </p>
                            <p className="mt-0 mb-4">
                                {t("You will also choose one of three specialisations, which each deal with a different export scenario – export of raw materials and goods, export of services, or megaprojects. In courses which build on what you’ve already learned, you will study advanced aspects of business administration and law and improve your computer and software skills. You will also develop your soft skills, working on areas such as negotiation techniques.")}
                            </p>
                        </div>
                    </div>
                </li>
            </motion.div>
            <motion.div
                id="curriculum"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="min-h-[40vh] relative  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-7xl bg-white p-6 rounded-lg shadow-xl">

                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">

                        <PageIntro>
                            <h2 className=" text-gray-800 mb-4 text-center h2-responsive">{t("Curriculum")}</h2>
                            <section className="mb-8 max-w-5xl text-center">
                                <p className="text-gray-700 leading-relaxed">
                                    {t("What can you expect from your studies? The curriculum provides an overview. Click on the individual courses for further information.")}
                                </p>
                            </section>
                        </PageIntro>
                    </div>

                    <section className="mb-8">
                        {Object.entries(courseData).map(([semesterKey, semester], index) => (
                            <Accordion
                                key={semesterKey}
                                open={openStep === index}
                                animate={CUSTOM_ANIMATION}
                                icon={<Icon open={openStep === index}/>}
                            >
                                <AccordionHeader
                                    className="bg-main text-white hover:text-white px-3"
                                    onClick={() => handleOpenStep(index)}
                                >
                                    <Typography variant="h6">{t(semester.title)}</Typography>
                                </AccordionHeader>
                                <AccordionBody className="px-3">
                                    <div className="flex justify-between p-2 border-b border-gray-300">
                                        <span className="font-medium">Course</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-600">SWS</span>
                                            <span className="text-gray-600">ECTS</span>
                                        </div>
                                    </div>

                                    {semester.courses.map((course, courseIndex) => (
                                        <div key={courseIndex}
                                             className="flex justify-between p-2 border-b border-gray-300">
                                            <span className="font-medium">{t(course.course)}</span>
                                            <span
                                                className="text-gray-600">{`SWS: ${course.sws}, ECTS: ${course.ects}`}</span>
                                        </div>
                                    ))}
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </section>

                </div>
            </motion.div>


            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="min-h-screen relative  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="w-full bg-white p-6 rounded-lg shadow-xl">

                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">
                        <PageIntro>
                            <h2 className=" text-gray-800 mb-4 text-center h2-responsive">{t("Application and admissions – the next steps")}</h2>
                            <section className="mb-8 max-w-5xl mx-auto text-center">
                                <p className="text-gray-700 leading-relaxed">
                                    {t("You've found a course that's a perfect fit? Great – you’ve already taken the most important step! We’ve put together an overview to guide you through the next steps.")}
                                </p>
                            </section>
                        </PageIntro>
                    </div>

                    <section className="my-8 max-w-5xl mx-auto">
                        {sections.map((section) => (
                            <Accordion
                                key={section.id}
                                open={expandedSectionId === section.id} // Используется expandedSectionId для открытия аккордеона
                                animate={CUSTOM_ANIMATION} // Настройте анимацию, если требуется
                                icon={<Icon id={section.id}
                                            open={expandedSectionId}/>} // Проверьте, как вы используете иконку
                            >
                                <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                                 onClick={() => toggleSection(section.id)}>
                                    <Typography variant="h6">{section.title}</Typography>
                                </AccordionHeader>
                                <AccordionBody className="px-3 text-md">
                                    {section.content}
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </section>
                </div>
            </motion.div>
        </>
    )
        ;
};

export default InternationalBusinessManagement;
