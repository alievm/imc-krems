import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const BekzodRuzimov = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Bekzod Rozimov</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Assistant Lecturer, International Business
                        Management</h2>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Bekzod Rozimov is a dedicated lecturer in international trade and world economy at Tashkent
                        State University of Economics. His passion lies in shaping the minds of future economists and
                        trade professionals, fostering critical thinking, and preparing students for the challenges of
                        our interconnected world. He stays current with the latest developments in international trade,
                        contributes to research, and thrives on lifelong curiosity about global economic trends and
                        their societal impact.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <p className="text-gray-700 mt-4">+1 year</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>M.A in International Economics</li>
                        <li>B.A in Economics</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Awards & Recognitions</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Best Teacher Award (2015) – NIU, Tamil Nadu</li>
                        <li>El-yurt Umidi scholarship winner</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Areas of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Postcolonial Literature, Indian Writing in English, Common Wealth Literature</li>
                        <li>Technical English and Soft Skills</li>
                        <li>International Finance, Trade World Economy</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 91 782 0806</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:ruzimovbekzod@gmail.com"
                               className="text-blue-500">ruzimovbekzod@gmail.com</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BekzodRuzimov;
