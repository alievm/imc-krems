import React from 'react';
import {Accordion, AccordionBody, AccordionHeader, Card, Typography} from "@material-tailwind/react";
import FadeIn from "../components/FadeIn.jsx";
import { FaGraduationCap, FaAward, FaMoneyCheckAlt } from 'react-icons/fa';
import {FaCalendarAlt, FaGlobe, FaHandsHelping, FaLanguage, FaUniversity, FaUser} from "react-icons/fa";
import {motion} from "framer-motion";
import {HashLink as Link} from "react-router-hash-link";
import PageIntro from "../components/PageIntro.jsx";
import {AcademicCapIcon, BanknotesIcon, ClockIcon, GlobeAltIcon} from "@heroicons/react/24/solid/index.js";
import SectionThird from "../components/SectionThird.jsx";
import imageMeeting from "../../public/2023.jpg";
import {useTranslation} from "react-i18next"; // Ensure you have this component for the fade-in effect

const Scholarship = () => {
    const {t} = useTranslation();
    return (
        <div className="mx-5">

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="relative py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-full w-full bg-white p-6 ">
                    <div className="lg:flex-nowrap relative items-center flex-wrap">
                        <img className="h-[50vh] w-full object-cover z-[10]"
                             src="/header-zugangsvoraussetzung.jpg"/>
                        <PageIntro
                                   title="Scholarships">
                           <div className="text-center">
                               At our double degree faculty, we believe in rewarding academic excellence and supporting
                               students in their pursuit of higher education. Our scholarship programs are designed to
                               recognize and reward outstanding academic performance, ensuring that financial barriers
                               do not hinder talented students from achieving their full potential.
                           </div>
                        </PageIntro>

                    </div>

                </div>
            </motion.div>

            <div className="container mx-auto p-10">
                <FadeIn>

                    <header className="relative w-full bg-cover bg-center h-96 rounded-2xl overflow-hidden"
                            style={{backgroundImage: 'url("/csm_teaser-events-am-imc-campus-krems_072f067ee3.jpg")'}}>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative p-8">
                                <FadeIn>
                                    <Typography variant="h1"
                                                className="text-4xl font-bold text-white mb-6 text-center">
                                        Scholarship Opportunities
                                    </Typography>
                                    <div className="max-w-3xl mx-auto text-center text-white text-lg">
                                        At IMC Krems, we offer three competitive scholarships that recognize
                                        and reward outstanding academic achievements. These scholarships are
                                        available from the second year of study.
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </header>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

                        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3">
                            <Card className="p-6 bg-gray-50 shadow-lg">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <FaGraduationCap className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Typography variant="h3" className="text-xl font-semibold text-center mb-4">
                                    100% Scholarship
                                </Typography>
                                <ul className="list-disc list-none text-gray-700">
                                    <li><strong>Coverage:</strong> Full tuition fee waiver</li>
                                    <li><strong>Eligibility:</strong> Top-performing student based on GPA</li>
                                    <li><strong>Requirements:</strong> Consistently high academic performance
                                        and
                                        exceptional GPA
                                    </li>
                                </ul>
                            </Card>

                            <Card className="p-6 bg-gray-50 shadow-lg">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <FaAward className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Typography variant="h3" className="text-xl font-semibold text-center mb-4">
                                    50% Scholarship
                                </Typography>
                                <ul className="list-disc list-none text-gray-700">
                                    <li><strong>Coverage:</strong> 50% tuition fee waiver</li>
                                    <li><strong>Eligibility:</strong> Student with the second highest GPA</li>
                                    <li><strong>Requirements:</strong> Strong academic performance and high GPA</li>
                                </ul>
                            </Card>

                            <Card className="p-6 bg-gray-50 shadow-lg">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <FaMoneyCheckAlt className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Typography variant="h3" className="text-xl font-semibold text-center mb-4">
                                    30% Scholarship
                                </Typography>
                                <ul className="list-disc list-none text-gray-700">
                                    <li><strong>Coverage:</strong> 30% tuition fee waiver</li>
                                    <li><strong>Eligibility:</strong> Student with the third highest GPA</li>
                                    <li><strong>Requirements:</strong> Good academic performance and competitive GPA
                                    </li>
                                </ul>
                            </Card>
                        </div>

                        <div className="mt-16">
                            <FadeIn>
                                <Typography variant="h2"
                                            className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                    Scholarship Competition
                                </Typography>
                                <div className="max-w-3xl mx-auto text-center text-gray-800 text-lg mb-6">
                                    Scholarships are awarded based on a competitive selection process. Students must
                                    maintain a high GPA and demonstrate excellence in their academic pursuits.
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
                                        <Typography variant="h2"
                                                    className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                            The selection criteria include:
                                        </Typography>
                                        <ul className="list-disc list-none text-gray-700">
                                            <li><strong>GPA:</strong> Scholarships are awarded based on the highest
                                                GPAs among the students.
                                            </li>
                                            <li><strong>Consistency:</strong> Students must show consistent academic
                                                performance throughout their first year.
                                            </li>
                                            <li><strong>Academic Rigor:</strong> Participation in challenging
                                                courses and academic initiatives is considered.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
                                        <Typography variant="h2"
                                                    className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                            Benefits of Scholarships
                                        </Typography>
                                        <ul className="list-disc list-none text-gray-700">
                                            <li><strong>Financial Support:</strong> Scholarships provide significant
                                                financial relief by covering a portion or all of the tuition fees.
                                            </li>
                                            <li><strong>Recognition:</strong> Scholarship recipients are recognized
                                                for their academic excellence, enhancing their academic and
                                                professional profiles.
                                            </li>
                                            <li><strong>Opportunities:</strong> Scholarships open doors to various
                                                opportunities, such as internships, research projects, and
                                                networking events.
                                            </li>
                                            <li><strong>Motivation:</strong> Scholarships motivate students to
                                                maintain high academic standards and strive for excellence.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Scholarship;
