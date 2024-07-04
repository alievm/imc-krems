import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const DildoraKhodjaeva = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Dr. Dildora Khodjaeva</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Associate Professor, International Business
                        Management</h2>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Dr. Dildora Khodjaeva is an experienced Indologist and specialist in Central and South Asia
                        Studies. Her academic journey includes a Ph.D. in Cultural Diplomacy between Uzbekistan and
                        India. With over 18 years of experience, she has contributed significantly to the fields of
                        cultural diplomacy, soft power, and international relations. Currently, she serves as an
                        Associate Professor at the joint program of IMC Krems University of Applied Sciences and
                        Tashkent State University of Economics (TSUE), where she focuses on developing soft skills and
                        fostering intercultural communication among students.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <p className="text-gray-700 mt-4">+18 years</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Education</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Ph.D. in Area Studies, Jawaharlal Nehru University (JNU)</li>
                        <li>MPhil in Area Studies, JNU</li>
                        <li>MA in Hindi Language, Literature and Culture, JNU</li>
                        <li>BA in Indo-Uzbek Literature Relations, [Your University Name]</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Publications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>"A Pathway of Cultural Impact between Central and South Asia: Buddhism to Baburids"</li>
                        <li>"Soft Power: An Important Factor Influencing Foreign Policy"</li>
                        <li>"A Sensible Soft Power Generator: Indian Diaspora Abroad and Its Prospects in Uzbekistan"
                        </li>
                        <li>"Opportunities Linking South- and Central-Asia and 'Self-reliant India'"</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research Interests</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Cultural Diplomacy</li>
                        <li>Soft Power</li>
                        <li>Socio-political Situation in Eurasia</li>
                        <li>Cross-cultural Communication</li>
                        <li>International Relations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 [Your Phone Number]</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:[Your Email Address]" className="text-blue-500">[Your Email Address]</a>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaGlobe className="mr-2 text-gray-600"/>
                            <a href="[Your Website URL]" className="text-blue-500">[Your Website URL]</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DildoraKhodjaeva;
