import React from 'react';
import { motion } from 'framer-motion';
import {
    FaAward,
    FaCalendarAlt,
    FaGraduationCap,
    FaHandsHelping,
    FaLanguage,
    FaMoneyBillAlt, FaMoneyCheckAlt,
    FaRegMoneyBillAlt,
    FaUser
} from 'react-icons/fa';
import PageIntro from "../components/PageIntro.jsx";
import {
    Typography, Accordion,
    AccordionHeader,
    AccordionBody, Card,
} from "@material-tailwind/react";
import {Image} from "antd";
import {IoIosTimer} from "react-icons/io";
import {GrLanguage} from "react-icons/gr";
import {AiOutlineSwap} from "react-icons/ai";
import {GiDuration} from "react-icons/gi";
import {TbSchoolBell} from "react-icons/tb";
import {HashLink as Link} from "react-router-hash-link";
import SectionSecond from "../components/SectionSecond.jsx";
import imageMeeting from "/public/2023.jpg";
import FadeIn from "../components/FadeIn.jsx";
import {
    ArrowPathIcon, BookmarkIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LifebuoyIcon,
    LockClosedIcon
} from '@heroicons/react/24/outline'
import SectionThird from "../components/SectionThird.jsx";
import {AcademicCapIcon, BanknotesIcon, ClockIcon, GlobeAltIcon} from "@heroicons/react/24/solid";

const features = [
    {
        name: 'Experienced Faculty',
        description:
            'Our faculty members are dedicated professionals with extensive experience in preparing students for higher education.',
        icon: BookmarkIcon,
    },
    {
        name: 'Academic Support',
        description:
            'Students have access to a range of academic support services, including tutoring, study skills workshops, and mentoring.',
        icon: LifebuoyIcon,
    },
    {
        name: 'Cultural Integration',
        description:
            'The program includes activities and events designed to help students adapt to university life and integrate into the campus community',
        icon: ArrowPathIcon,
    },
]
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


const Foundation = () => {

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
            title: 'Academic Advising',
            content: 'Personalized guidance to help students select courses and plan their academic pathway.'
        },
        {
            id: 2,
            title: 'Counseling Services',
            content: 'Professional counseling to support students\' mental health and well-being.'
        },
        {
            id: 3,
            title: 'Career Services',
            content: 'Resources and workshops to help students explore career options and develop employability skills.'
        },
        {
            id: 4,
            title: 'Accommodation Assistance',
            content: 'Support in finding suitable housing options close to campus.'
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
                             src="/header-zertifizierungen.jpg"/>
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
                                   title="Foundation Programme">
                        </PageIntro>

                    </div>

                    <section id="overview" className="mb-8 text-center max-w-5xl mx-auto">
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">At our double degree
                            faculty, we understand that students come from diverse educational backgrounds and may
                            require additional preparation before embarking on their chosen degree programs. Our
                            Foundation Program is designed to bridge this gap, providing students with the essential
                            skills and knowledge needed to succeed in higher education.</h2>
                        <br/>
                    </section>

                    <section className="mb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
                                    <div className="justify-center items-center flex w-10 h-10 bg-white  rounded-md">
                                        <BanknotesIcon className="w-6 h-6 link-text"/>
                                    </div>
                                </div>
                                <div className="mt-6 text-md leading-5">16 800 000 som</div>
                                <div className="mt-6 text-base leading-5">
                                    Study fee
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8 max-w-5xl mx-auto">
                        <h2 className=" text-gray-800 mb-4 text-center h2-responsive">Program Overview</h2>
                        <SectionThird title="Program Overview" image={{src: imageMeeting, shape: 1}}>
                            <div className="space-y-6 text-lg text-neutral-600">
                                <p>
                                    The Foundation Program at our double degree faculty is a comprehensive, one-year preparatory course aimed at equipping students with the academic and personal skills necessary for university-level study. This program is ideal for students who:
                                </p>
                                <p>
                                    <strong className="text-gray-800">1) Need to meet the entry requirements for their desired degree program</strong> <br/>
                                    <strong className="text-gray-800">2) Wish to improve their English language proficiency</strong> <br/>
                                    <strong className="text-gray-800">3) Seek to build a strong academic foundation in their field of interest</strong> <br/>
                                </p>
                            </div>
                        </SectionThird>

                    </section>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="min-h-[40vh] relative  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
                    >
                        <div
                            className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                        <div className="max-w-7xl bg-white p-6 ">

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
                                <Accordion open={open === 1} animate={CUSTOM_ANIMATION}
                                           icon={<Icon id={1} open={open}/>}>
                                    <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                                     onClick={() => handleOpen(1)}>
                                        <Typography variant="h5"> Semester 1</Typography>
                                    </AccordionHeader>
                                    <AccordionBody className="px-3">
                                        <ul className="">
                                            <li className="mb-2 text-lg">Business English 1 (Intensive English
                                                1)
                                            </li>
                                            <li className="mb-2 text-lg">Mathematics</li>
                                            <li className="mb-2 text-lg">Introduction To Economics</li>
                                            <li className="mb-2 text-lg">Introduction to Management</li>
                                            <li className="mb-2 text-lg">ICT</li>
                                            <li className="mb-2 text-lg">Social Studies 1</li>
                                        </ul>

                                    </AccordionBody>
                                </Accordion>
                                <Accordion open={open === 2} animate={CUSTOM_ANIMATION}
                                           icon={<Icon id={1} open={open}/>}>
                                    <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                                     onClick={() => handleOpen(2)}>
                                        <Typography variant="h5"> Semester 2</Typography>
                                    </AccordionHeader>
                                    <AccordionBody className="px-3">
                                        <ul className="">
                                            <li className="mb-2 text-lg">Business English 2 (Intensive English
                                                2)
                                            </li>
                                            <li className="mb-2 text-lg">Statistics</li>
                                            <li className="mb-2 text-lg">Introduction To Finance and
                                                Accounting
                                            </li>
                                            <li className="mb-2 text-lg">German 1</li>
                                            <li className="mb-2 text-lg">Social Studies 2</li>
                                            <li className="mb-2 text-lg">Academic Writing</li>
                                        </ul>
                                    </AccordionBody>
                                </Accordion>
                            </section>
                        </div>
                    </motion.div>

                    <div className="container mx-auto p-10">
                        <FadeIn>

                            <div className="bg-white py-10 mb-10 sm:py-5">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <div className="text-center">
                                        <h2 className=" text-gray-800 mb-4 text-center h2-responsive">Key Features</h2>
                                        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                                            Tailored Curriculum: Our curriculum is carefully crafted to address the
                                            specific
                                            needs of students, offering courses in English language, mathematics,
                                            science, and
                                            other relevant subjects.
                                        </p>
                                    </div>
                                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                                        <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                                            {features.map((feature) => (
                                                <div key={feature.name} className="relative pl-16">
                                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                                        <div
                                                            className="absolute left-0 top-0 mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-main">
                                                            <feature.icon aria-hidden="true"
                                                                          className="h-7 w-7 text-white"/>
                                                        </div>
                                                        {feature.name}
                                                    </dt>
                                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>


                                </div>
                            </div>

                            <header
                                className="relative max-w-7xl mx-auto w-full bg-cover bg-center h-screen lg:h-96 rounded-2xl overflow-hidden"
                                style={{backgroundImage: 'url("/csm_teaser-events-am-imc-campus-krems_072f067ee3.jpg")'}}>
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative p-8">
                                        <FadeIn>
                                            <Typography variant="h1"
                                                        className="text-4xl font-bold text-white mb-6 text-center">
                                                Pathway to Degree Programs
                                            </Typography>
                                            <div className="max-w-3xl mx-auto text-center text-white text-xl">
                                                Upon successful completion of the Foundation Program, students are
                                                guaranteed admission to their chosen degree program at IMC Krems,
                                                provided they meet the specific entry requirements. This seamless
                                                transition ensures that students are well-prepared and confident as they
                                                embark on their undergraduate studies.
                                            </div>
                                        </FadeIn>
                                    </div>
                                </div>
                            </header>


                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                                <PageIntro>
                                    <h2 className=" text-gray-800 mb-4 text-center h2-responsive">Program Structure</h2>
                                    <section className="mb-8 max-w-5xl text-center">
                                        <p className="text-gray-700 leading-relaxed">
                                            The Foundation Program is structured to provide a balanced mix of core and
                                            elective courses, allowing students to tailor their studies to their
                                            academic goals. Key components of the program include:
                                        </p>
                                    </section>
                                </PageIntro>
                                <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3">
                                    <Card className="p-6 bg-gray-50 shadow-lg">
                                        <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                            <FaGraduationCap className="text-4xl text-white  mx-auto"/>
                                        </div>
                                        <Typography variant="h3" className="text-xl font-semibold text-center mb-4">
                                            Core Courses
                                        </Typography>
                                        These courses focus on essential academic skills, including English language
                                        proficiency, critical thinking, and academic writing.
                                    </Card>

                                    <Card className="p-6 bg-gray-50 shadow-lg">
                                        <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                            <FaAward className="text-4xl text-white  mx-auto"/>
                                        </div>
                                        <Typography variant="h3" className="text-xl font-semibold text-center mb-4">
                                            Project Work
                                        </Typography>
                                        Students engage in project-based learning, developing research and
                                        problem-solving skills.
                                    </Card>

                                    <Card className="p-6 bg-gray-50 shadow-lg">
                                        <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                            <FaMoneyCheckAlt className="text-4xl text-white  mx-auto"/>
                                        </div>
                                        <Typography variant="h3" className="text-xl font-semibold text-center mb-4">
                                            Assessments
                                        </Typography>
                                        Regular assessments ensure that students are progressing and meeting the
                                        required academic standards
                                    </Card>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </motion.div>


            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="min-h-screen relative px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-7xl bg-white p-6 rounded-lg shadow-xl">

                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">
                        <PageIntro>
                            <h2 className=" text-gray-800 mb-4 text-center h2-responsive">Student Support Services</h2>
                            <section className="mb-8 max-w-5xl text-center">
                                <p className="text-gray-700 leading-relaxed">
                                    We are committed to supporting our students throughout their academic journey. The
                                    Foundation Program includes access to a range of support services, such as:
                                </p>
                            </section>
                        </PageIntro>
                    </div>
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

export default Foundation;
