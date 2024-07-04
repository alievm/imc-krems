import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
const KholmatovaKibriyo = () => {
    return (
        <div className="min-h-screen  p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Kholmatova Kibriyo Mirzayevna</h1>
                    <h2 className="text-xl text-gray-600 mt-2">German Teacher</h2>
                    <p className="text-gray-600 mt-2">Tashkent State University of Economics (TSUE) and IMC Krems</p>
                    <p className="text-gray-600 mt-1">Office Location: Islam Karimov 49, Tashkent</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Kholmatova Kibriyo Mirzayevna is a German teacher in the joint programme between Tashkent State
                        University of Economics and IMC Krems. She has been teaching German to TSUE and UzSWLU students
                        for the last 4 years. Her area of interest includes Psychology, Literature, German and Soft
                        Skills. Kholmatova believes in her ability to change the way people think and help them become
                        instruments for bringing about positive changes in the world.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <p className="text-gray-700 mt-4">+4 Years</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>M.A. in Linguistics (German) from Uzbekistan State World Languages University</li>
                        <li>B.A. in Philology and Language Teaching: German from Karshi State University</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Awards & Recognitions</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>German Teacher (2023) - Tashkent State University of Economics (TSUE), Tashkent,
                            Uzbekistan
                        </li>
                        <li>German Teacher (2021) - Uzbekistan State World Languages University</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Journal Publication - 6</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Areas of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Psychology</li>
                        <li>Literature</li>
                        <li>German</li>
                        <li>Soft Skills</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 77 737 9077</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 91 641 2461</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:xolmatovakibriyo7@gmail.com"
                               className="text-blue-500">xolmatovakibriyo7@gmail.com</a>
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

export default KholmatovaKibriyo;
