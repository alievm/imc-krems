import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const AzizaUsmanova = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Aziza Usmanova</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Lecture Assistant, International Business Management</h2>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Aziza Usmanova is currently a lecture assistant in the Joint program between Tashkent State
                        University of Economics and IMC Krems University. She is conducting PhD research on the topic
                        “The Impact of Fiscal Policy on the Poverty Rate in Uzbekistan”. Her expertise lies in
                        Microeconomics, Finance, Taxes and Taxation, and Econometrics.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <p className="text-gray-700 mt-4">+1 year</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>M.Sc. in [Your Field], [Your University]</li>
                        <li>B.Sc. in [Your Field], [Your University]</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Awards & Recognitions</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Presidential Scholarship Award (2021) – Tashkent, Uzbekistan</li>
                        <li>State Scholarship by the name of Islam Karimov (2017) - Tashkent, Uzbekistan</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Journal Publication – 4</li>
                        <li>Conference Publication - 4</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Areas of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Poverty reduction</li>
                        <li>Fiscal policy</li>
                        <li>Taxation</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 339 070714</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:aziza.usmanova2909@gmail.com"
                               className="text-blue-500">aziza.usmanova2909@gmail.com</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AzizaUsmanova;
