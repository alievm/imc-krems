import React from 'react';
import { motion } from 'framer-motion';
import {FaGraduationCap, FaLanguage, FaMoneyBillAlt, FaRegMoneyBillAlt} from 'react-icons/fa';
import PageIntro from "../components/PageIntro.jsx";
import {Typography,   Accordion,
    AccordionHeader,
    AccordionBody,} from "@material-tailwind/react";
import {Image} from "antd";
import {IoIosTimer} from "react-icons/io";
import {GrLanguage} from "react-icons/gr";
import {AiOutlineSwap} from "react-icons/ai";
import {GiDuration} from "react-icons/gi";
import {TbSchoolBell} from "react-icons/tb";
import {HashLink as Link} from "react-router-hash-link";
import {AcademicCapIcon, BanknotesIcon, ClockIcon, GlobeAltIcon} from "@heroicons/react/24/solid/index.js";
import {CalendarDaysIcon} from "@heroicons/react/16/solid/index.js";


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


const TLM = () => {

    const [open, setOpen] = React.useState(1);
    const [openVideo, setOpenVideo] = React.useState(1)
    const [openStep, setOpenStep] = React.useState(1)

    const [expandedSectionId, setExpandedSectionId] = React.useState(1); // Состояние для открытого аккордеона

    const toggleSection = (id) => {
        setExpandedSectionId(expandedSectionId === id ? null : id); // Открывает или закрывает аккордеон при клике
    };

    const handleOpenStep = (index) => {
        setOpenStep(openStep === index ? 0 : index);
    };
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const handleOpenVideo = (value) => setOpenVideo(openVideo === value ? 0 : value);

    const courseData = {
        semester1: {
            title: "SEMESTER 1",
            courses: [
                // ACCOUNTING AND FINANCING
                { course: "Accounting I", sws: 2, ects: 4 },
                { course: "Accounting Exercises I", sws: 1, ects: null },
                // MARKETING
                { course: "Marketing I", sws: 2, ects: 3 },
                // MANAGEMENT
                { course: "Principles of Management", sws: 2, ects: 3 },
                { course: "Sustainability and Ethics in Leadership", sws: 1, ects: 1 },
                // FUNDAMENTALS OF TOURISM
                { course: "Understanding Tourism", sws: 2, ects: 3 },
                { course: "Tourism Geography", sws: 2, ects: 2 },
                // BUSINESS MATHEMATICS AND STATISTICS
                { course: "Business Mathematics - Theory", sws: 1, ects: 2 },
                { course: "Business Mathematics - Exercises", sws: 1, ects: 2 },
                // SCIENTIFIC METHODS AND TOOLS
                { course: "Tourism Research Exercises", sws: 1, ects: 1 },
                { course: "Principles of Business Data Analysis", sws: 2, ects: 3 },
                { course: "Foundations of Empirical Social Research", sws: 1, ects: 1 },
                // SOFT SKILLS
                { course: "Rhetoric and Presentation", sws: 1, ects: 1 }
            ]
        },
        semester2: {
            title: "SEMESTER 2",
            courses: [
                // ACCOUNTING AND FINANCING
                { course: "Accounting II", sws: 2, ects: 3 },
                { course: "Accounting Exercises II", sws: 1, ects: null },
                // MARKETING
                { course: "Marketing II", sws: 2, ects: 2 },
                // ECONOMICS
                { course: "Microeconomics", sws: 2, ects: 3 },
                // TOURISM SECTOR
                { course: "Hospitality Management", sws: 2, ects: 2 },
                { course: "Destination Management", sws: 2, ects: 2 },
                // FUNDAMENTALS OF TOURISM
                { course: "Event Management", sws: 2, ects: 3 },
                // BUSINESS MATHEMATICS AND STATISTICS
                { course: "Business Statistics - Theory", sws: 1, ects: 2 },
                { course: "Business Statistics - Exercises", sws: 1, ects: 2 },
                // SOFT SKILLS
                { course: "Group Dynamics", sws: 1, ects: 1 },
                // SCIENTIFIC METHODS AND TOOLS
                { course: "Qualitative Research Methods", sws: 2, ects: 4 }
            ]
        },
        semester3: {
            title: "SEMESTER 3",
            courses: [
                // ACCOUNTING AND FINANCING
                { course: "Managerial Accounting and Decision Making", sws: 2, ects: 3 },
                // MARKETING
                { course: "Multi Channel Distribution Systems", sws: 2, ects: 3 },
                { course: "Tourist Behaviour and Psychology", sws: 2, ects: 3 },
                // ECONOMICS
                { course: "Macroeconomics", sws: 3, ects: 3 },
                // TOURISM SECTOR
                { course: "Transportation", sws: 2, ects: 3 },
                { course: "Tourism Intermediaries", sws: 2, ects: 2 },
                // FUNDAMENTALS OF TOURISM
                { course: "Sustainability in Tourism", sws: 1, ects: 2 },
                { course: "Current Issues in Tourism", sws: 1, ects: 2 },
                // SOFT SKILLS
                { course: "Intercultural Competence", sws: 2, ects: 2 },
                // SCIENTIFIC METHODS AND TOOLS
                { course: "Quantitative Research Methods", sws: 2, ects: 3 },
                { course: "Computational Thinking", sws: 1, ects: 2 }
            ]
        },
        semester4: {
            title: "SEMESTER 4",
            courses: [
                // PRACTICAL TRAINING
                { course: "Practical Training Semester", sws: 0, ects: 28 },
                { course: "Practical Training Semester Coaching", sws: 1, ects: 2 }
            ]
        },
        semester5: {
            title: "SEMESTER 5",
            courses: [
                // LAW
                { course: "International and Tourism Law", sws: 2, ects: 3 },
                // ACCOUNTING AND FINANCING
                { course: "Finance and Investment", sws: 2, ects: 3 },
                // MARKETING
                { course: "Digital Tourism", sws: 2, ects: 3 },
                // MANAGEMENT
                { course: "Human Resource Management", sws: 2, ects: 2 },
                { course: "Project Management", sws: 1, ects: 2 },
                // ECONOMICS
                { course: "Economics in Tourism and Leisure", sws: 2, ects: 3 },
                // SPECIALISED TOURISM MANAGEMENT
                { course: "Hospitality Consulting", sws: 2, ects: 4 },
                { course: "Destination Consulting", sws: 2, ects: 4 },
                // FUNDAMENTALS OF TOURISM
                { course: "Culture, Heritage and Tourism", sws: 2, ects: 2 },
                // SOFT SKILLS
                { course: "Negotiation and Sales Skills Training", sws: 1, ects: 2 },
                // SCIENTIFIC METHODS AND TOOLS
                { course: "Bachelor Seminar I", sws: 1, ects: 3 }
            ]
        },
        semester6: {
            title: "SEMESTER 6",
            courses: [
                // ACCOUNTING AND FINANCING
                { course: "Controlling", sws: 2, ects: 3 },
                // MARKETING
                { course: "Digital Marketing", sws: 2, ects: 3 },
                // MANAGEMENT
                { course: "Entrepreneurship and Start-Ups", sws: 2, ects: 4 },
                // SPECIALISED TOURISM INDUSTRIES
                { course: "Congress, Events and Conference Management", sws: 2, ects: 3 },
                { course: "Global Wellness and Spa Management", sws: 2, ects: 3 },
                { course: "Adventure, Events and Sports Tourism", sws: 2, ects: 3 },
                // FUNDAMENTALS OF TOURISM
                { course: "Experience Design in Tourism", sws: 3, ects: 4 },
                // SCIENTIFIC METHODS AND TOOLS
                { course: "Bachelor Seminar II and Bachelor Paper", sws: 1, ects: 8 },
                { course: "Bachelor Exam", sws: 0, ects: 2 }
            ]
        }
    };



    const sections = [
        {
            id: 1,
            title: 'ADMISSION REQUIREMENTS',
            content: (
                <>
                    <p><strong>What are the admission requirements for bachelor programmes?</strong><br/>
                        To qualify for admission to a university of applied sciences bachelor degree programme, you must have an Austrian school-leaving certificate or an equivalent qualification.</p>
                    <p><strong>Do you have a school-leaving certificate issued outside Austria?</strong><br/>
                        We’ll check to make sure it’s equivalent to an Austrian certificate in accordance with section 4 of the University of Applied Sciences Studies Act (FHG) when you’ve sent us all the relevant documentation via our online application tool. If it is not an equivalent, you’ll receive information on the supplementary examinations you’ll need to pass. In a nutshell, you will have the option of completing a summer school and the necessary supplementary examinations at IMC Krems or look for an external provider. In that case, you might consider our cooperation partner, the University of Applied Sciences Upper Austria: It offers a one-year International Foundation Programme which provides you with all the necessary qualifications you need in order to start your studies in Krems.</p>
                    <p><strong>What proof of your language skills is required for our English-language bachelor degree programme?</strong><br/>
                        We’ll assess your English language proficiency at your interview, so there is no need to provide additional evidence of your English skills.</p>
                    <p><strong>Important</strong><br/>
                        Do you still need to complete your military or alternative service? If you’re a male Austrian citizen, we strongly recommend completing your compulsory national service before beginning your studies. This will allow you to finish your degree with no interruptions and start your career without delay afterwards.</p>
                </>
            )
        },
        {
            id: 2,
            title: 'ADMISSIONS PROCEDURE',
            content: (
                <>
                    <p><strong>Application interview</strong><br/>
                        We would like to get to know you as a person: As part of the online application you will have to write a statement of motivation and a short essay on a topic relevant to the degree programme. Predefined questions about your motivations as well as the requirements and topics for your essay can be found in the online application. You choose one of the suggested topics, conduct research to broaden your knowledge, deal with the issues and bring your own point of view to the essay. Your answers are to be entered in the fields provided.</p>
                    <p>Your statement of motivation and your essay form the basis for your application interview. Every applicant has an opportunity to introduce themselves in a face-to-face discussion, usually with the degree programme director. In addition to the personal introduction and your motivation to study, the applicant and the interviewer discuss the topic selected and the arguments used in the essay, as well as the topic’s relevance for the degree programme.</p>
                    <p>The application interview is held in the language of instruction of the degree programme and can take place either online via Microsoft Teams or in presence.</p>
                    <p>After the application interview, your statement of motivation, the essay and your performance throughout the interview are assessed on the basis of the content-related remarks, the manner in which they express themselves and the arguments used.</p>
                    <p><strong>Interview dates</strong><br/>
                        There is usually a selection of dates to choose from, with quotas allocated for each date. You can select a preferred date and time slot for your admission interview during the online application process. In order to still benefit from the full selection of dates, we recommend that you submit your application in good time.</p>
                    <p>Get an overview of the dates for your programme.<br/>
                        No dates available at the moment.</p>
                    <p>After you have successfully completed your online application, your application will be checked for completeness and correctness. As soon as this process is completed, we will inform you by e-mail and confirm the date for your admission interview. We will send you the Microsoft Teams Meeting Link in a separate e-mail a few days before the application interview date.</p>
                </>
            )
        },
        {
            id: 3,
            title: 'IMPORTANT DATES AND DEADLINES',
            content: (
                <>
                    <p><strong>Application for the next study year possible from</strong> 01/12/2024</p>
                    <p><strong>Application deadline for EU nationals / Extended application deadline</strong> 17/04/2024 / 28/06/2024</p>
                    <p><strong>Application deadline for non-EU nationals</strong> 15/04/2024</p>
                    <p>Please note that the IMC University of Applied Sciences Krems reserves the right to close the extended application period at any time without prior notice. We therefore recommend that you submit your application as soon as possible.</p>
                </>
            )
        },
        {
            id: 4,
            title: 'APPLY ONLINE',
            content: (
                <>
                    <p>You've decided for one of our degree programmes? First of all: congratulations and thank you for choosing us! We’ll be happy to guide you step-by-step through your online application.</p>
                </>
            )
        },
        {
            id: 5,
            title: 'STUDY-RELEVANT DATES',
            content: (
                <>
                    <p>You would like to plan ahead and would like to know when your degree programme starts? Here you will find the answer!</p>
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
                className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-full w-full bg-white p-6 rounded-lg shadow-xl">
                    <div className="lg:flex-nowrap relative items-center flex-wrap">
                        <img className="h-[50vh] w-full object-cover z-[10]"
                             src="/header-studium-tourism-and-leisure-management-vollzeit.jpg"/>
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
                                                <Link className="nav-link" to="/ibm#overview">Overview</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ibm#curriculum">Curriculum</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ibm#key-features">Key features</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ibm#career-options">Career
                                                    options</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ibm#videos">Videos</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ibm#information-events">Information
                                                    events</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link"
                                                      to="/ibm#application-and-admission"> Application and
                                                    admission</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/ibm#advisory-service"> Advisory
                                                    Service</Link>
                                            </li>
                                        </ul>
                                        <a
                                            className="gtm-subnav-btn-apply text-white btn border-radius-0 btn-warning waves-effect waves-light btn-lg"
                                            href="https://onboarding.fh-krems.ac.at/en"
                                            id="apply-online"
                                            target="_blank"
                                            title="Apply online now!"
                                        >
                                            Apply now
                                            <i
                                                aria-hidden="true"
                                                className="fa fa-angle-right ml-1"
                                            />
                                        </a>
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
                        <PageIntro eyebrow="International Join Faculty between TSUE & IMC UAS Krems "
                                   title="Tourism and Leisure Management bachelor degree programme">
                        </PageIntro>

                    </div>

                    <section id="overview" className="mb-8 text-center max-w-5xl mx-auto">
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">What are tourists’ top
                            needs? What might tourism products look like in the future? How do you market a tourist
                            destination? How do you stage an event and what challenges are involved?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            You’ll work on these and other business-related questions in our full-time bachelor
                            programme. And on top of this, you'll learn a foreign language in addition to English, our
                            language of instruction, allowing you to benefit from countless international connections
                            and relationships. In three years, you'll be ready for an international career!
                        </p>
                        <br/>
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
                                <div className="mt-6 text-md leading-5">Full-time</div>
                                <div className="mt-6 text-base leading-4">
                                    Organisational <br/>
                                    form
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
                                <div className="mt-6 text-md leading-5">English</div>
                                <div className="mt-6 text-base leading-5">
                                    Language
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
                                <div className="mt-6 text-md leading-5">2 semesters</div>
                                <div className="mt-6 text-base leading-5">
                                    Duration
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
                                <div className="mt-6 text-md leading-5">21 weeks</div>
                                <div className="mt-6 text-base leading-5">
                                    Internship
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
                                    Study fee
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8 max-w-5xl mx-auto">
                        <h2 className=" text-gray-800 mb-4 text-center h2-responsive">The degree programme</h2>
                        <div className="text-col-2">
                            {/* <h4>The degree programme</h4> */}
                            <p>
                                In an age of rapidly changing global markets, prospective managers are constantly facing
                                new challenges. The Tourism and Leisure Management bachelor degree programme provides
                                you with the tools to succeed locally and internationally in this environment.
                            </p> <br/>
                            <p>
                                The aim of this English-language bachelor programme is to equip you with in-depth
                                business administration expertise. The tourism and leisure industry is the centre of
                                attention throughout the programme.
                            </p>
                            <br/>
                            <p>
                                Tourism and Leisure Management was IMC Krems’ first degree programme. So we have
                                maintained close contacts with the tourism sector for more than 25 years. You profit
                                from this as well!
                            </p>
                            <br/>
                            <p>
                                The degree features an ideal blend of theoretical elements with practical insights and
                                discussions. It also stands out for its strong international focus. You study with
                                fellow students from all over the world, and have the opportunity to spend semester 3
                                abroad at one of our partner universities.
                            </p>
                            <p>
                                Learning and developing skills and abilities that will give you a clear
                                advantage in your day-to-day work play an important role throughout the
                                programme. The skills modules are closely aligned with the learning modules:
                                you will learn about the theory and practice behind a range of activities,
                                including negotiations and concluding contracts, conflict and receivables
                                management, getting your business in shape for audits and budgeting
                                processes, as well as receiving valuable inputs related to discussions on
                                objectives, performance assessment and employee management.
                                <br/>
                                Semester 4 has a particularly strong international flavour since you spend it abroad
                                working at an internship provider of your choice.
                            </p>
                            <div className="no-break">
                                <Typography variant="h4">Your previous knowledge counts!</Typography>
                                <p>
                                    Did you attend a hotel management or a tourism school? Or have you already gained
                                    some initial professional experience in tourism? In the bachelor programme Tourism
                                    and Leisure Management you get the opportunity to have individual courses credited
                                    after an unbureaucratic review.
                                </p>
                            </div>

                            <div className="no-break">
                                <Typography variant="h4">Tip</Typography>

                                <p>
                                    A particularly attractive option is the dual degree we offer in conjunction with the
                                    Haaga-Helia University of Applied Sciences, Finland or the KEDGE Business School -
                                    Campus Bordeaux, France. Besides obtaining a bachelor of arts at IMC Krems, you will
                                    also be accredited with a degree from our partner institution.
                                </p>
                            </div>
                            <p>
                                On top of that, you have the chance to spend a semester at one of our
                                international locations – Tashkent in Uzbekistan, Sanya in China or Hanoi in
                                Vietnam.
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
                            <h2 className=" text-gray-800 mb-4 text-center h2-responsive">Business administration</h2>
                        </PageIntro>
                    </div>

                    <section className="mb-8">
                        <div className="text-col-2">
                            <div className=" ">
                                {/*  */}
                                <p>
                                    Business administration focuses on how organisations and companies are
                                    managed.
                                </p> <br/>
                                <p>
                                    In other words, it examines business processes with the aim of providing
                                    insights into the planning, implementation and evaluation of
                                    responsibility, approaches and objectives in different parts of a
                                    business.
                                </p> <br/>
                                <p className="mb-16">
                                    Business administration topics include: accounting and finance, marketing,
                                    human resources and logistics.
                                </p> <br/>
                                <div className="no-break">
                                    <h4 className="text-2xl">
                                        Core topics of the Tourism and Leisure Management degree programme
                                    </h4> <br/>
                                    <p>
                                        Tourism is an umbrella term for travel. It’s not only one of the
                                        largest, but also one of the fastest growing industries worldwide.
                                        Furthermore, it’s considered to be one of the world’s most significant
                                        sectors for employment.
                                    </p>
                                </div>
                                <p>
                                    In addition to the travel industry, the hospitality and leisure industries
                                    are also elements of tourism.
                                </p>
                                <p>
                                    There are a number of specialised areas in the tourism and leisure
                                    industry as well. These are covered in our bachelor programme in the
                                    Specialised Tourism Studies module. To give you a few examples: event
                                    management, tourism with an emphasis on sport, culture and health, and
                                    sustainable travel.
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
                            <Image className="object-cover" width={300} height={200}
                                   src="/csm_tourism-and-leisure-management-vollzeit-leicht-erklaert-1_0ac7aca5fb.jpg"/>
                            <Image className="object-cover" width={300} height={200}
                                   src="/csm_tourism-and-leisure-management-vollzeit-leicht-erklaert-2_b7347c38e3.jpg"/>
                            <Image className="object-cover" width={300} height={200}
                                   src="/csm_tourism-and-leisure-management-vollzeit-leicht-erklaert-3_d4b24def9a.jpg"/>
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
                            <p className="text-2xl font-medium text-white dark:text-white">"One of the hallmarks of the
                                tourism industry is its internationality. Learn new languages, study with classmates
                                from different nations and take the opportunity to go on an exchange semester. You can
                                also do your internship in a company abroad. In short: have the time of your life!"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-white dark:text-white">Claudia Bauer-Krösbacher
                                </div>
                                <div className="pl-3 text-sm font-light text-gray-200 dark:text-gray-400">Programme
                                    director
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
                className="min-h-[40vh] relative  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-7xl bg-white p-6 rounded-lg shadow-xl">

                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">

                        <PageIntro>
                            <h2 className=" text-gray-800 mb-4 text-center h2-responsive">Curriculum</h2>
                            <section className="mb-8 max-w-5xl text-center">
                                <p className="text-gray-700 leading-relaxed">
                                    What can you expect from your studies? The curriculum provides an overview.
                                    Click on the individual courses for further information.
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
                                    <Typography variant="h6">{semester.title}</Typography>
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
                                            <span className="font-medium">{course.course}</span>
                                            <span
                                                className="text-gray-600">{`SWS: ${course.sws}, ECTS: ${course.ects}`}</span>
                                        </div>
                                    ))}
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </section>

                    <section id="features"
                             className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">

                        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-3xl">Key features</h2>

                            <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                                What makes our Tourism and Leisure Management degree programme so special? Here’s an
                                overview.
                            </p>

                        </div>

                        <div
                            className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

                            <div
                                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-200 p-2">
                                <div className="flex h-[280px] flex-col justify-between rounded-md p-6">
                                    <img className="w-36" src="/logo-dark.png"/>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">Studying and working the international way</h3>
                                        <p className="text-sm text-muted-foreground">Linguistically, you'll grow by
                                            leaps and bounds by perfecting your English skills – after all, the lectures
                                            are held in English and you’ll be studying with classmates from all over the
                                            world.</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-200 p-2">
                                <div className="flex h-[280px] flex-col justify-between rounded-md p-6">
                                    <img className="w-36" src="/logo-dark.png"/>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">Ideally equipped for the globalised world</h3>
                                        <p className="text-sm">Your training will be concluded with a sharp focus on an
                                            increasingly important set of soft skills. They’ll help you to become a
                                            confident and self-assured tourism professional. </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-200 p-2">
                                <div className="flex h-[280px] flex-col justify-between rounded-md p-6">
                                    <img className="w-36" src="/logo-dark.png"/>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">Discover your interests</h3>
                                        <p className="text-sm">One in ten jobs worldwide is directly linked to tourism –
                                            a good argument for pursuing a career in this sector. The Krems bachelor
                                            programme centres on the operational aspects of this fast-growing
                                            industry.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section className="mb-8">
                        <Accordion open={openVideo === 1} animate={CUSTOM_ANIMATION}
                                   icon={<Icon id={1} open={openVideo}/>}>
                            <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                             onClick={() => handleOpenVideo(1)}>
                                <Typography variant="h6"> FAQ WITH OUR STUDENTS: TOURISM AND LEISURE
                                    MANAGEMENT</Typography>
                            </AccordionHeader>
                            <AccordionBody className="px-3">
                                <div className="relative overflow-hidden w-full pb-[56.25%] h-0">
                                    <iframe className="absolute top-0 left-0 w-full h-full"
                                            src="https://www.youtube.com/embed/xmpDlocbxxM?si=VVlOEz9MeMxKxDXB"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={openVideo === 2} animate={CUSTOM_ANIMATION}
                                   icon={<Icon id={1} open={openVideo}/>}>
                            <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                             onClick={() => handleOpenVideo(2)}>
                                <Typography variant="h6">WHAT'S IT LIKE STUDYING TOURISM & LEISURE
                                    MANAGEMENT?</Typography>
                            </AccordionHeader>
                            <AccordionBody className="px-3">
                                <div className="relative overflow-hidden w-full pb-[56.25%] h-0">
                                    <iframe className="absolute top-0 left-0 w-full h-full"
                                            src="https://www.youtube.com/embed/PNUKC2V8B14?si=IF6rEe_sLqjfoMzR"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openVideo === 3} animate={CUSTOM_ANIMATION}
                                   icon={<Icon id={1} open={openVideo}/>}>
                            <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                             onClick={() => handleOpenVideo(3)}>
                                <Typography variant="h6">TIPS FOR YOUR APPLICATION</Typography>
                            </AccordionHeader>
                            <AccordionBody className="px-3">
                                <div className="relative overflow-hidden w-full pb-[56.25%] h-0">
                                    <iframe className="absolute top-0 left-0 w-full h-full"
                                            src="https://www.youtube.com/embed/wWn5t64NBcM?si=eb-GUgztxbqfbtJt"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </section>


                    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-3xl">Career paths</h2>

                        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                            After completing the Tourism and Leisure Management bachelor degree programme, you'll have
                            the world at your feet. Whether you decide to go abroad or work in Austria, you will be
                            qualified to assume entry-level positions in a wide-range of industries and departments.
                        </p>

                        <div className="flex flex-row gap-10 mt-10 flex-wrap lg:flex-nowrap">
                            <div className="col-lg-6">
                                <div className="mb-6 mt-0 text-left">
                                    <p>
                                        You have the choice of starting a career or enrolling for a full-time or
                                        part-time master degree.
                                    </p> <br/>
                                    <p>
                                        A wide range of options will be open to you – at IMC Krems, for
                                        instance, you can register for the&nbsp;
                                        <strong>master degree programmes</strong>:
                                    </p>

                                    <ul className="my-5 bg-gray-100 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
                                        <li className="border-b border-gray-200">
                <span
                    className="block p-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 ease-in-out font-semibold"
                >
                    Marketing with Major Tracks in Tourism & Hospitality Marketing, Fashion & Lifestyle Marketing and Retail & Shopper Marketing
                </span>
                                        </li>
                                        <li className="border-b border-gray-200">
                <span
                    className="block p-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 ease-in-out font-semibold"
                >
                    Umwelt- und Nachhaltigkeitsmanagement
                </span>
                                        </li>
                                        <li className="border-b border-gray-200">
                <span
                    className="block p-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 ease-in-out font-semibold"
                >
                    International Business and Economic Diplomacy
                </span>
                                        </li>
                                        <li className="border-b border-gray-200">
                <span
                    className="block p-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 ease-in-out font-semibold"
                >
                    Digital Business Innovation and Transformation
                </span>
                                        </li>
                                        <li className="border-b border-gray-200">
                <span
                    className="block p-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 ease-in-out font-semibold"
                >
                    Management
                </span>
                                        </li>
                                        <li>
                <span
                    className="block p-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 ease-in-out font-semibold"
                >
                    Management von Gesundheitsunternehmen
                </span>
                                        </li>
                                    </ul>

                                    <p>
                                        Alternatively, you can take a master degree in business at another
                                        Austrian or foreign university.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 auflistung-liste text-right">
                                <ul className="list-group">
                                    <li className="list-group-item card-header border-radius-0 bg-main text-white border-0 text-uppercase">
                                        <h4>Potential entry-level&nbsp;positions</h4>
                                    </li>
                                    <li className="list-group-item">Hotel industry, system catering, and catering</li>
                                    <li className="list-group-item">Travel agencies and tour operators</li>
                                    <li className="list-group-item">Tourism travel operators such as airlines and bus
                                        companies
                                    </li>
                                    <li className="list-group-item">Regional tourism planning and development
                                        organisations
                                    </li>
                                    <li className="list-group-item">Tourism information and communication technology
                                        companies
                                    </li>
                                    <li className="list-group-item">Sports organisations and sports event management
                                    </li>
                                    <li className="list-group-item">Casinos and theme parks</li>
                                    <li className="list-group-item">Event agencies</li>
                                    <li className="list-group-item">Conference centres</li>
                                    <li className="list-group-item">Arts and cultural institutions</li>
                                    <li className="list-group-item">Spa and wellness facilities</li>
                                    <li className="list-group-item">National park centres</li>
                                </ul>
                            </div>
                        </div>

                    </div>
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
                <div className="max-w-7xl bg-white p-6 rounded-lg shadow-xl">

                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">
                        <PageIntro>
                            <h2 className=" text-gray-800 mb-4 text-center h2-responsive">Application and admissions – the next steps</h2>
                            <section className="mb-8 max-w-5xl text-center">
                                <p className="text-gray-700 leading-relaxed">
                                    You've found a course that's a perfect fit? Great – you’ve already taken the most important
                                    step! We’ve put together an overview to guide you through the next steps.
                                </p>
                            </section>
                        </PageIntro>
                    </div>

                    <section className="my-8">
                        <section className="my-8">
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

                    </section>
                </div>
            </motion.div>
        </>
    )
        ;
};

export default TLM;
