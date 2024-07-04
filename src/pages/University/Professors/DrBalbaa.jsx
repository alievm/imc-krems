import React from 'react';
import { FaEnvelope, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';

const DrBalbaa = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Dr. Muhammad Eid Balbaa</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Associate Professor, World Economy</h2>
                    <p className="text-gray-600 mt-2">49 Islom Karimov, Tashkent</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Muhammad Eid Balbaa, Ph.D., is an Egyptian economist and Associate Professor in the World
                        Economy Department at Tashkent State University of Economics. Born on November 9th, 1984, he
                        holds a Ph.D. in Economics and Public Finance, specializing in corporate governance as an
                        anti-corruption tool. With a Master's degree in International & Public Law and extensive
                        experience in academia, he serves as an Adjunct Professor at LSE University and IMC University
                        of Applied Sciences. Dr. Balbaa is recognized for his research contributions, with an H-index of
                        7, and has authored textbooks and research papers in various international journals. His
                        expertise encompasses areas such as international economics, logistics, and economic
                        development.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>+15 Years of Experience</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualification</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Ph.D. in Economics and Public Finance</li>
                        <li>M.A. in International & Public Law</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Journal Publication - 40</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Area of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>International Economics, Logistics, Corporate Governance</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998995201605</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:m.balbaa@tsue.uz" className="text-blue-500">m.balbaa@tsue.uz</a>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaExternalLinkAlt className="mr-2 text-gray-600"/>
                            <a href="https://www.researchgate.net/profile/Muhammad-Balbaa" target="_blank"
                               rel="noopener noreferrer" className="text-blue-500">ResearchGate Profile</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DrBalbaa;
