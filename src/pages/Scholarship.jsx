import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import FadeIn from "../components/FadeIn.jsx";
import { FaGraduationCap, FaAward, FaMoneyCheckAlt } from 'react-icons/fa';
import {FaCalendarAlt, FaGlobe, FaHandsHelping, FaLanguage, FaUniversity, FaUser} from "react-icons/fa"; // Ensure you have this component for the fade-in effect

const Scholarship = () => {
    return (
        <div className="mx-5">
            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl profile-card-bg3 bg-cover bg-center">
                <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <h1 className="text-5xl font-semibold text-white">Scholarships</h1>
                </div>
            </div>
            <Card className="mx-3 -mt-16 mb-6 lg:mx-4 shadow-lg">
                <div className="container mx-auto p-10">
                    <FadeIn>
                        <div className="text-center">
                            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                                At our double degree faculty, we believe in rewarding academic excellence and supporting
                                students in their pursuit of higher education. Our scholarship programs are designed to
                                recognize and reward outstanding academic performance, ensuring that financial barriers
                                do not hinder talented students from achieving their full potential.
                            </p>
                        </div>


                        <header className="relative bg-cover bg-center h-96 rounded-2xl overflow-hidden"
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
                                    <ul className="list-disc list-inside text-gray-700">
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
                                    <ul className="list-disc list-inside text-gray-700">
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
                                    <ul className="list-disc list-inside text-gray-700">
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
                                            <ul className="list-disc list-inside text-gray-700">
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
                                            <ul className="list-disc list-inside text-gray-700">
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
            </Card>
        </div>
    );
};

export default Scholarship;
