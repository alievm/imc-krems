// src/ToirovaCV.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Toirova = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Dr. Munisa Toirova</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Associate Professor, Business Administration</h2>
                    <p className="text-gray-600 mt-2">Tashkent State University of Economics</p>
                    <p className="text-gray-600 mt-1">Department of International Business Management</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Dr. Munisa Toirova is currently the Associate Professor of Business Administration at Tashkent
                        State University of Economics. Dr. Toirova earned her Ph.D. from Kyungpook National University,
                        demonstrating a high level of academic dedication and excellence. As an Associate Professor, she
                        has displayed unwavering commitment to her role as a passionate teacher, trainer, and
                        researcher.
                    </p>
                    <p className="text-gray-700 mt-4">
                        One noteworthy endeavor that underscores Dr. Toirova's commitment to international collaboration
                        and academic excellence is her active participation in the Online International Learning
                        Project. This project, conducted in collaboration with Coventry University (United Kingdom),
                        Hochschule Ruhr West - University of Applied Sciences (Germany), and Kyungpook National
                        University (South Korea), focused on the critical topic of "Strategies in a Post-COVID World -
                        Ways of the Crisis”.
                    </p>
                    <p className="text-gray-700 mt-4">
                        In addition to her involvement in collaborative projects, Dr. Toirova has contributed
                        significantly to the global academic community by participating in various international
                        conferences. Notable among these are her presentations at the Annual Meetings of the Academy of
                        Management in Seattle (USA) and Dublin (Ireland).
                    </p>
                    <p className="text-gray-700 mt-4">
                        Dr. Toirova's specialization in business ethics, unethical pro-organizational behavior, non-task
                        behavior is indicative of her expertise in these critical areas. Her doctoral thesis, centered
                        on coworker's influence on focal employees' behavior in the workplace, further highlights her
                        commitment to advancing knowledge in her field.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <p className="text-gray-700 mt-4">+2 Years</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Ph.D.</li>
                        <li>M.A.</li>
                        <li>B.A.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Awards & Recognitions</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Korean Government Scholarship Awardee for outstanding academic performance (2017-2019).</li>
                        <li>Korean Government Scholarship Awardee for outstanding academic performance (2019-2023).</li>
                        <li>Certificate for active participation in Collaborative Online International Learning (COIL)
                            project 2022.02.04 by Kyungpook National University (South Korea), Hochschule Puhr West
                            University (Germany); Coventry University (United Kingdom).
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <p className="text-gray-700 mt-4">Journal Publications - 3</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Area of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Extra-role behavior</li>
                        <li>Unethical behavior</li>
                        <li>Business ethics</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:munisa22445@gmail.com" className="text-blue-500">munisa22445@gmail.com</a>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaLinkedin className="mr-2 text-blue-600"/>
                            <a href="https://linkedin.com/in/munisa-toirova" className="text-blue-500">LinkedIn</a>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaGithub className="mr-2 text-gray-800"/>
                            <a href="https://github.com/munisa-toirova" className="text-blue-500">GitHub</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Toirova;
