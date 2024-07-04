import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const DurdonaBakhodirova = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Durdona Bahodirova</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Senior Teacher of German Language</h2>
                    <p className="text-gray-600 mt-2">International Business Management</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Durdona Bahodirova is currently Senior Teacher for the Faculty of International Business
                        Management, Joint Degree Program of Tashkent State University of Economics and IMC Krems
                        University of Applied Sciences. She has been teaching German for the last 5 years and she was
                        qualified by several top-ranked German universities and organizations.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>+5 Years of Teaching Experience</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>M.A</li>
                        <li>B.A</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Awards & Recognitions</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>DAAD Scholarship</li>
                        <li>IPS-Scholarship</li>
                        <li>Exchange semester at Humboldt University of Berlin</li>
                        <li>Internship at German Bundestag</li>
                        <li>Goethe Institute Scholarship</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Publications - 4</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Areas of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Central Asian Studies (Uzbekistan): Culture, History, Language, Religion</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 99 781 7633</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:durdona.bahodirova1211@gmail.com"
                               className="text-blue-500">durdona.bahodirova1211@gmail.com</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DurdonaBakhodirova;
