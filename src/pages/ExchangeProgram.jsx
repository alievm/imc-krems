import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import FadeIn from "../components/FadeIn.jsx";
import {FaCalendarAlt, FaGlobe, FaHandsHelping, FaLanguage, FaUniversity, FaUser} from "react-icons/fa"; // Ensure you have this component for the fade-in effect

const ExchangeProgram = () => {
    return (
        <div className="mx-5">
            <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl profile-card-bg2 bg-cover bg-center">
                <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <h1 className="text-5xl font-semibold text-white">Exchange Program</h1>
                </div>
            </div>
            <Card className="mx-3 -mt-16 mb-6 lg:mx-4 shadow-lg">
                <div className="container mx-auto p-10">
                    <FadeIn>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">Program Overview</h2>
                            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                                Our exchange program enables students to spend a semester at one of our prestigious
                                partner universities around the world. This immersive experience allows students to:
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="flex items-center space-x-4">
                                <div className="bg-main p-3 rounded-md">
                                <FaGlobe className="text-4xl text-white"/>
                                </div>
                                <Typography className="text-lg text-gray-800">Gain international academic
                                    exposure</Typography>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-main p-3 rounded-md">
                                <FaUniversity className="text-4xl text-white"/>
                                </div>
                                <Typography className="text-lg text-gray-800">Experience different teaching methods and
                                    educational systems</Typography>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-main p-3 rounded-md">
                                <FaGlobe className="text-4xl text-white"/>
                                </div>
                                <Typography className="text-lg text-gray-800">Develop a global perspective on their
                                    field of study</Typography>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-main p-3 rounded-md">
                                <FaLanguage className="text-4xl text-white"/>
                                </div>
                                <Typography className="text-lg text-gray-800">Improve language skills</Typography>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="bg-main p-3 rounded-md">
                                <FaUser className="text-4xl text-white"/>
                                </div>
                                <Typography className="text-lg text-gray-800">Build a diverse, international network of
                                    peers and professionals</Typography>
                            </div>
                        </div>

                        <div className="container mx-auto p-10">
                            <FadeIn>
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Partner Universities</h2>
                                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                                        We have established partnerships with a range of top universities across the
                                        globe. Our partners are carefully selected to ensure that our students receive a
                                        high-quality education and a rich cultural experience. Some of our esteemed
                                        partner universities include:
                                    </p>
                                </div>
                                <ul className="list-none text-lg text-gray-800">
                                    <li className="p-4 border border-b-0">University of Lund (Sweden)</li>
                                    <li className="p-4 border border-b-0">University Malaya (Malaysia)</li>
                                    <li className="p-4 border border-b-0">Aristotle University of Thessaloniki (Greece)</li>
                                    <li className="p-4 border border-b-0">Hochschule Stralsund University of Applied Science (Germany)</li>
                                    <li className="p-4 border ">HSB Hochschule Bremen City University of Applied Science (Germany)</li>
                                </ul>
                            </FadeIn>
                        </div>

                        <div className="container mx-auto p-10">
                            <FadeIn>
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Academic and Cultural
                                        Enrichment</h2>
                                    <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                                        During their time abroad, students will not only engage in academic activities
                                        but also
                                        immerse themselves in the local culture. They will have the opportunity to
                                        participate
                                        in:
                                    </p>
                                </div>
                                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-main p-3 rounded-md">
                                        <FaCalendarAlt className="text-4xl text-white"/>
                                        </div>
                                        <Typography className="text-lg text-gray-800">Cultural excursions and
                                            events</Typography>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-main p-3 rounded-md">
                                        <FaLanguage className="text-4xl text-white"/>
                                        </div>
                                        <Typography className="text-lg text-gray-800">Language courses</Typography>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-main p-3 rounded-md">
                                        <FaUser className="text-4xl text-white"/>
                                        </div>
                                        <Typography className="text-lg text-gray-800">Local student organizations and
                                            clubs</Typography>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-main p-3 rounded-md">
                                        <FaHandsHelping className="text-4xl text-white"/>
                                        </div>
                                        <Typography className="text-lg text-gray-800">Community service and volunteer
                                            activities</Typography>
                                    </div>
                                </div>
                                <div className="text-center mt-8">
                                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                        These experiences help students to develop a deeper understanding of the host
                                        country and its people, fostering a sense of global citizenship.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </FadeIn>
                </div>
            </Card>
        </div>
    );
};

export default ExchangeProgram;
