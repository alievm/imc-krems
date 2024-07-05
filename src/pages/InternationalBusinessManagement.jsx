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

    const [open, setOpen] = React.useState(1);
    const [openVideo, setOpenVideo] = React.useState(1)
    const [openStep, setOpenStep] = React.useState(1)
    const [expandedSectionId, setExpandedSectionId] = React.useState(1); // Состояние для открытого аккордеона

    const toggleSection = (id) => {
        setExpandedSectionId(expandedSectionId === id ? null : id); // Открывает или закрывает аккордеон при клике
    };


    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const handleOpenVideo = (value) => setOpenVideo(openVideo === value ? 0 : value);


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
                <div className="max-w-7xl bg-white p-6 rounded-lg shadow-xl">
                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">

                        <div
                            className="absolute z-[0] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

                        <PageIntro eyebrow="International Join Faculty between TSUE & IMC UAS Krems "
                                   title="International Business Management bachelor degree programme">
                        </PageIntro>
                        <img className="h-80 w-96 object-cover z-[10]"
                             src="/header-studium-export-oriented-management.jpg"/>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">(formerly Export-oriented
                            Management)</h2>
                        <p className="text-gray-700 leading-relaxed">
                            International business in a nutshell: Do you enjoy communication? Do you like to travel? Are
                            you open to other cultures? Are you interested in international business relations? Then
                            this degree programme is the perfect choice for you.
                        </p>
                        <br/>
                        <p className="text-gray-700 leading-relaxed">
                            We give you the skills and detailed knowledge of international business administration and
                            economics that allow you to deal successfully with partners all over the world. It goes
                            without saying that the programme is entirely taught in English, and on top of that you also
                            study an additional foreign language.
                        </p>
                    </section>

                    <section className="mb-8">
                        <div className="grid grid-cols-5 gap-6">
                            <div
                                className="flex flex-col justify-center items-center pb-8 text-center text-black bg-white shadow-md h-full max-h-[220px] ">
                                <div
                                    className="flex justify-center  px-9 py-5 w-full text-lg leading-5  bg-main text-slate-500">
                                    <div className="justify-center items-center flex w-10 h-10 bg-white rounded-full">
                                        <IoIosTimer size="25" />
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
                                    <div className="justify-center items-center flex w-10 h-10 bg-white rounded-full">
                                        <GrLanguage size="25" />
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
                                    <div className="justify-center items-center flex w-10 h-10 bg-white rounded-full">
                                        <TbSchoolBell size="25" />
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
                                    <div className="justify-center items-center flex w-10 h-10 bg-white rounded-full">
                                        <AiOutlineSwap size="25" />
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
                                    <div className="justify-center items-center flex w-10 h-10 bg-white rounded-full">
                                        <FaRegMoneyBillAlt size="25" />
                                    </div>
                                </div>
                                <div className="mt-6 text-md leading-5">2300$</div>
                                <div className="mt-6 text-base leading-5">
                                    Study fee
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">The degree programme</h2>
                        <div className="text-col-2">
                            {/* <h4>The degree programme</h4> */}
                            <p>
                                Nowadays, many companies operate in an international environment – their
                                suppliers, business contacts, consultants and clients are increasingly
                                located abroad, as are their competitors, who also have an international
                                focus, offering new ideas and business models from other countries that are
                                changing markets constantly.
                            </p>
                            <p>
                                This means more and more Austrian companies are looking for opportunities
                                abroad. The export sector, often referred to as the engine of economic
                                growth, has expanded from 10,000 companies to over 60,000 in the last 20
                                years. This brings significant opportunities, but also some challenges.
                            </p>
                            <div className="no-break">
                                <Typography variant="h4">Ideally equipped for tomorrow’s job market</Typography>
                                <p>
                                    The International Business Management bachelor degree programme has been
                                    designed specifically with these requirements in mind. You will examine
                                    ways in which you can head up and develop businesses with a view to
                                    building a successful future and learn how to effectively manage national
                                    and international projects and partnerships. Although the courses focus on
                                    international business activities, it goes without saying that the skills
                                    you develop can also be applied in the domestic market. We give our
                                    students the tools they need to handle complex situations so that they can
                                    skilfully address all kinds of challenges using the problem-solving
                                    approaches and strategies at their disposal.
                                </p>
                            </div>
                            <p>
                                Learning and developing skills and abilities that will give you a clear
                                advantage in your day-to-day work play an important role throughout the
                                programme. The skills modules are closely aligned with the learning modules:
                                you will learn about the theory and practice behind a range of activities,
                                including negotiations and concluding contracts, conflict and receivables
                                management, getting your business in shape for audits and budgeting
                                processes, as well as receiving valuable inputs related to discussions on
                                objectives, performance assessment and employee management.
                            </p>
                            <div className="no-break">
                                <Typography variant="h4">International focus from day one</Typography>
                                <p>
                                    International and intercultural learning is also very important to us.
                                    Here, the emphasis is on personal experience. This starts with the
                                    international atmosphere at home – you will work with fellow students from
                                    all over the world and regularly discuss international topics and best
                                    practice during the courses.
                                </p>
                            </div>
                            <p>
                                In addition, you will have the opportunity to spend the third semester
                                abroad at one of our 170+ partner universities without having to put your
                                studies on hold. The fourth semester also has an international element: an
                                internship at a company of your choice abroad.
                            </p>
                            <div className="no-break">
                                <Typography variant="h4">Tip</Typography>

                                <p>
                                    The dual degree we offer in conjunction either with the&nbsp;{" "}
                                    <a
                                        href="https://www.metropolia.fi/en"
                                        title="Zur Website der Metropolia University of Applied Sciences"
                                        target="_blank"
                                    >
                                        Metropolia University of Applied Sciences, Finland
                                    </a>
                                    &nbsp;or the{" "}
                                    <a
                                        href="https://student.kedge.edu/"
                                        title="To the Website of KEDGE Business School"
                                        target="_blank"
                                    >
                                        KEDGE Business School - Campus Bordeaux, France
                                    </a>
                                    &nbsp;is a particularly attractive option. Besides obtaining a Bachelor of
                                    Arts from IMC Krems, you will also be awarded a degree from our partner
                                    institution.
                                </p>
                            </div>
                            <p>
                                On top of that, you have the chance to spend a semester at one of our
                                international locations – Tashkent in Uzbekistan, Sanya in China or Hanoi in
                                Vietnam.
                            </p>
                            <p>
                                <a
                                    href="https://www.fh-krems.ac.at/en/university/media-portal/news/?tx_news_pi1%5BoverwriteDemand%5D%5Bfilter%5D%5Btype%5D=tag&tx_news_pi1%5BoverwriteDemand%5D%5Bfilter%5D%5Bmethod%5D=add&tx_news_pi1%5BoverwriteDemand%5D%5Bfilter%5D%5Bid%5D=53&tx_news_pi1%5BoverwriteDemand%5D%5Bfilter%5D%5Blist%5D%5Btags%5D%5B0%5D=45&cHash=761b62b0a7ecea35cddfdea7b9d31377"
                                    title="Student stories: Export-oriented Management"
                                    target="_blank"
                                    className="btn border-radius-0 btn-outline-primary fontcolor-grey waves-effect btn-sm no-boxshadow m-0 btn-rte"
                                >
                                    Student stories
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
                <div className="max-w-7xl bg-white p-6 rounded-lg shadow-xl">

                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">

                        <div
                            className="absolute z-[0] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

                        <PageIntro title="Business administration">
                        </PageIntro>
                    </div>

                    <section className="mb-8">
                        <div className="text-col-2">
                            <div className=" ">
                                {/*  */}
                                <p>
                                    Business administration focuses on how organisations and companies are
                                    managed. In other words, it examines business processes with the aim of
                                    providing insights into the planning, implementation and evaluation of
                                    responsibilities, approaches and objectives in different parts of a
                                    business.
                                </p>
                                <p>
                                    Business administration covers topics including accounting and finance,
                                    marketing, human resources and logistics.
                                </p>
                                <div className="no-break">
                                    <h4>Core elements of the programme</h4>
                                    <p>
                                        In the International Business Management bachelor degree programme, we
                                        provide you with a broad range of business administration skills and
                                        know-how, with a focus on international activities.
                                    </p>
                                </div>
                                <p>
                                    This is the ideal preparation for capitalising on the opportunities and
                                    addressing the challenges of increasingly dynamic markets by implementing
                                    established and new business models, and adopting contemporary approaches.
                                </p>
                                <p>
                                    What are the most important steps for successful international expansion?
                                    First of all, you have to ensure that you understand your counterparts,
                                    and take into account any potential cross-cultural differences. Then it’s
                                    all about building a relationship so that you can successfully conclude
                                    contracts and agreements and manage risks systematically. Finally, you
                                    need to actually run the business and solve problems.
                                </p>
                                <p>
                                    Statistics underline the importance of exports in our globalised world:
                                    the number of exporters has increased from 12,500 in 2000 to over 60,000
                                    today. Meanwhile, exports account for 60% of Austria’s gross domestic
                                    product. What’s more, many companies export more than 90% of their goods
                                    and services and could not exist if they operated solely on the Austrian
                                    market.
                                </p>
                                <p>
                                    On the flip side, we also benefit from imports, such as bananas and
                                    coffee, but also in terms of energy, computers and software.
                                </p>
                                <p>
                                    Many international organisations (such as the United Nations, OPEC and the
                                    OSCE) are based in Austria, while numerous international companies also
                                    have their European or southeast European headquarters in this country.
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
                            <Image className="object-cover" width={300} height={200} src="/1.jpg"/>
                            <Image className="object-cover" width={300} height={200} src="/2.jpg"/>
                            <Image className="object-cover" width={300} height={200} src="/3.jpg"/>
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
                            <p className="text-2xl font-medium text-white dark:text-white">"On this programme you will
                                have the opportunity to discover where your interests lie. You will gain a comprehensive
                                overview of a range of industries and departments, putting you in a position to identify
                                a company’s internal and external relationships. Foreign trade, marketing and sales,
                                human resources, project business, or how about logistics? You decide on the focus of
                                your degree with your choice of internship, electives and the topic of your bachelor
                                paper."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-white dark:text-white">Christopher Schwand</div>
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

                        <div
                            className="absolute z-[0] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

                        <PageIntro title="Curriculum">
                            <section className="mb-8">
                                <p className="text-gray-700 leading-relaxed">
                                    What can you expect from your studies? The curriculum provides an overview.
                                    Click on the individual courses for further information.
                                </p>
                            </section>
                        </PageIntro>
                    </div>

                    <section className="mb-8">
                        <Accordion open={open === 1} animate={CUSTOM_ANIMATION} icon={<Icon id={1} open={open}/>}>
                            <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                             onClick={() => handleOpen(1)}>
                                <Typography variant="h5"> Semester 1</Typography>
                            </AccordionHeader>
                            <AccordionBody className="px-3">
                                <ul className="">
                                    <li className="mb-2 text-lg">Business English 1 (Intensive English 1)</li>
                                    <li className="mb-2 text-lg">Mathematics</li>
                                    <li className="mb-2 text-lg">Introduction To Economics</li>
                                    <li className="mb-2 text-lg">Introduction to Management</li>
                                    <li className="mb-2 text-lg">ICT</li>
                                    <li className="mb-2 text-lg">Social Studies 1</li>
                                </ul>

                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2} animate={CUSTOM_ANIMATION} icon={<Icon id={1} open={open}/>}>
                            <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                             onClick={() => handleOpen(2)}>
                                <Typography variant="h5"> Semester 2</Typography>
                            </AccordionHeader>
                            <AccordionBody className="px-3">
                                <ul className="">
                                    <li className="mb-2 text-lg">Business English 2 (Intensive English 2)</li>
                                    <li className="mb-2 text-lg">Statistics</li>
                                    <li className="mb-2 text-lg">Introduction To Finance and Accounting</li>
                                    <li className="mb-2 text-lg">German 1</li>
                                    <li className="mb-2 text-lg">Social Studies 2</li>
                                    <li className="mb-2 text-lg">Academic Writing</li>
                                </ul>
                            </AccordionBody>
                        </Accordion>
                    </section>

                    <section id="features"
                             className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">

                        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-3xl">Key features</h2>

                            <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                                What makes our International Business Management programme so special? Here’s an
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
                                        <h3 className="font-bold">Ideal preparation for the international stage</h3>
                                        <p className="text-sm text-muted-foreground">You will receive a fundamental
                                            education in business administration and acquire a detailed understanding of
                                            economics and law.</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-200 p-2">
                                <div className="flex h-[280px] flex-col justify-between rounded-md p-6">
                                    <img className="w-36" src="/logo-dark.png"/>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">Explore the world</h3>
                                        <p className="text-sm">On this programme you have the chance to spend one or two
                                            semesters at one of our 170+ partner universities.</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-200 p-2">
                                <div className="flex h-[280px] flex-col justify-between rounded-md p-6">
                                    <img className="w-36" src="/logo-dark.png"/>
                                    <div className="space-y-2">
                                        <h3 className="font-bold">Practical training</h3>
                                        <p className="text-sm text-muted-foreground">The Practical Training Semester
                                            (PTS) is a core element of the curriculum, and gives you the chance to apply
                                            the knowledge you’ve acquired in a business environment.</p>
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
                                <Typography variant="h6"> FAQ WITH OUR STUDENTS: INTERNATIONAL BUSINESS
                                    MANAGEMENT</Typography>
                            </AccordionHeader>
                            <AccordionBody className="px-3">
                                <div className="relative overflow-hidden w-full pb-[56.25%] h-0">
                                    <iframe className="absolute top-0 left-0 w-full h-full"
                                            src="https://www.youtube.com/embed/cdKroiL96Ys?si=Ov6iklr9ql_zL9Wf"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                    </iframe>
                                </div>
                            </AccordionBody>
                        </Accordion>

                        <Accordion open={openVideo === 2} animate={CUSTOM_ANIMATION}
                                   icon={<Icon id={1} open={openVideo}/>}>
                            <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                             onClick={() => handleOpenVideo(2)}>
                                <Typography variant="h6"> TIPS FOR YOUR APPLICATION INTERVIEW: INTERNATIONAL BUSINESS
                                    MANAGEMENT</Typography>
                            </AccordionHeader>
                            <AccordionBody className="px-3">
                                <div className="relative overflow-hidden w-full pb-[56.25%] h-0">
                                    <iframe className="absolute top-0 left-0 w-full h-full"
                                            src="https://www.youtube.com/embed/R_GO5vpKd4w?si=N-j2qlnj1eVyHxoL"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                                    </iframe>
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </section>


                    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

                        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-3xl">Career paths</h2>

                        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                            Our International Business Management bachelor degree programme opens the door to a whole
                            world of opportunities. Whether you decide to go abroad or work in Austria, you will be
                            qualified to assume entry-level positions in a wide-range of industries and departments.
                        </p>

                        <div className="flex flex-row gap-10 mt-10 flex-wrap lg:flex-nowrap">
                            <div className="col-lg-6">
                                <div className="mb-6 mt-0 text-left">
                                    <p>
                                        You have the choice of starting a career or enrolling for a full-time or
                                        part-time master degree.
                                    </p>
                                    <p>
                                        A wide range of options will be open to you – at IMC Krems, for
                                        instance, you can register for the&nbsp;
                                        <strong>master degree programmes</strong>:
                                    </p>

                                    <ul
                                        className="my-5"
                                        style={{
                                            listStyleType: 'none',
                                            padding: '0',
                                            fontFamily: 'Arial, sans-serif',
                                            backgroundColor: '#fafafa',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            overflow: 'hidden'
                                        }}>
                                        <li style={{borderBottom: '1px solid #ddd', padding: '10px'}}>
                                            <a
                                                href="https://www.fh-krems.ac.at/en/study/master/part-time/international-business-and-economic-diplomacy/"
                                                title="Master degree programme International Business and Economic Diplomacy"
                                                style={{textDecoration: 'none', color: '#555', fontWeight: 'bold'}}
                                            >
                                                International Business and Economic Diplomacy
                                            </a>
                                        </li>
                                        <li style={{borderBottom: '1px solid #ddd', padding: '10px'}}>
                                            <a
                                                href="https://www.fh-krems.ac.at/en/study/master/part-time/digital-business-innovation-and-transformation/"
                                                title="Master degree programme Digital Business Innovation and Transformation"
                                                style={{textDecoration: 'none', color: '#555', fontWeight: 'bold'}}
                                            >
                                                Digital Business Innovation and Transformation
                                            </a>
                                        </li>
                                        <li style={{borderBottom: '1px solid #ddd', padding: '10px'}}>
                                            <a
                                                href="https://www.fh-krems.ac.at/en/study/master/full-time/marketing/"
                                                style={{textDecoration: 'none', color: '#555', fontWeight: 'bold'}}
                                            >
                                                Marketing
                                            </a> <br/>
                                            with Major Tracks in Tourism & Hospitality Marketing, Fashion & Lifestyle
                                            Marketing and Retail & Shopper Marketing
                                        </li>
                                        <li style={{borderBottom: '1px solid #ddd', padding: '10px'}}>
                                            <a
                                                href="https://www.fh-krems.ac.at/en/study/master/part-time/management/"
                                                title="To the master degree programme Management"
                                                target="_blank"
                                                style={{textDecoration: 'none', color: '#555', fontWeight: 'bold'}}
                                            >
                                                Management
                                            </a>
                                        </li>
                                        <li style={{borderBottom: '1px solid #ddd', padding: '10px'}}>
                                            <a
                                                href="https://www.fh-krems.ac.at/en/study/master/part-time/environmental-and-sustainability-management/"
                                                title="Master degree programme Umwelt- und Nachhaltigkeitsmanagement"
                                                style={{textDecoration: 'none', color: '#555', fontWeight: 'bold'}}
                                            >
                                                Umwelt- und Nachhaltigkeitsmanagement
                                            </a>
                                        </li>
                                        <li style={{padding: '10px'}}>
                                            <a
                                                href="https://www.fh-krems.ac.at/en/study/master/part-time/management-of-health-institutions/"
                                                title="Master degree programme Management von Gesundheitsunternehmen"
                                                target="_blank"
                                                style={{textDecoration: 'none', color: '#555', fontWeight: 'bold'}}
                                            >
                                                Management von Gesundheitsunternehmen
                                            </a>
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
                                    <li className="list-group-item  card-header border-radius-0 bg-main text-white border-0 text-uppercase">
                                        <h4>Potential entry-level&nbsp;positions</h4>
                                    </li>
                                    <li className="list-group-item">Marketing and sales</li>
                                    <li className="list-group-item">Foreign trade</li>
                                    <li className="list-group-item">Human resource management (HRM)</li>
                                    <li className="list-group-item">Product and project management</li>
                                    <li className="list-group-item">
                                        Purchasing and supply chain management
                                    </li>
                                    <li className="list-group-item">Controlling</li>
                                    <li className="list-group-item">Consulting</li>
                                    <li className="list-group-item">Finance and risk management</li>
                                    <li className="list-group-item">Public administration</li>
                                    <li className="list-group-item">
                                        International organisations/diplomatic service
                                    </li>
                                    <li className="list-group-item">Company foundation and start-ups</li>
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

                        <div
                            className="absolute z-[0] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

                        <PageIntro title="Application and admissions – the next steps">
                            You've found a course that's a perfect fit? Great – you’ve already taken the most important step! We’ve put together an overview to guide you through the next steps.
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

export default InternationalBusinessManagement;
