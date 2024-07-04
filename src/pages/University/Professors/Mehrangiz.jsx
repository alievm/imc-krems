import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
const Mehrangiz = () => {
    return (
        <div className="min-h-screen p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Mehrangiz Narzullaeva</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Assistant Lecturer</h2>
                    <p className="text-gray-600 mt-2">Department of Business Administration, Tashkent State University
                        of Economics</p>
                    <p className="text-gray-600 mt-1">Islam Karimov st 49</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Mehrangiz Narzullaeva is a teaching assistant at Tashkent State University of Economics. She
                        started her academic journey with a Bachelor's degree from Tashkent Financial Institute and then
                        obtained a Master's degree in Business Administration in Latvia. She also expanded her knowledge
                        through the Erasmus programme in Germany. During her studies, she demonstrated her abilities in
                        critical analysis and strategic thinking by successfully completing her Master's thesis on
                        strategic planning for small businesses.
                    </p>
                    <p className="text-gray-700 mt-4">
                        Mehrangiz went on to study financial trading in London, mastering stock market dynamics, forex,
                        and the impact of economic conditions on market trends. She also became a mentor to students,
                        utilizing her experience and knowledge of financial trading to develop them. In 2021, she became
                        a teaching assistant at Tashkent State University of Economics where she teaches strategic
                        management, marketing, and digital marketing. Her journey serves as an example of the pursuit of
                        knowledge and development, as well as a knowledge keeper for future business leaders and
                        marketers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <p className="text-gray-700 mt-4">+5 Years</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>MBA in Management</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Awards & Recognitions</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Participation in Erasmus Programme in Germany</li>
                        <li>Recognized for Master's thesis on strategic planning for small businesses</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Journal Publication - 2</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Areas of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Finance</li>
                        <li>Management</li>
                        <li>Marketing</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 95 030 1855</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:mehrangiznarzullayeva5@gmail.com"
                               className="text-blue-500">mehrangiznarzullayeva5@gmail.com</a>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaGlobe className="mr-2 text-gray-600"/>
                            <a href="https://www.tsue.uz" className="text-blue-500">www.tsue.uz</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Mehrangiz;
