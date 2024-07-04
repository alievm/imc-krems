import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const Giyasov = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Giyasov Farkhod</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Assistant Professor</h2>
                    <p className="text-gray-600 mt-2">IMC KREMS</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Giyasov Farkhod is currently at IMC KREMS, where he explores the distinctive features of the
                        psychology of tourists as consumers of various services and products, aiming to understand their
                        emotional responses. Previously, he was a lecturer at RAI (Riga Aeronautical Institute),
                        teaching Total Quality Management (TQM). In this role, he focused on overseeing activities and
                        tasks necessary to maintain a high level of excellence, including the establishment of quality
                        policies, planning, assurance, and continuous improvement.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>+10 Years of Experience</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>M.A</li>
                        <li>B.Ed.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>International Conference Publications - 2</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Areas of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>English Philology</li>
                        <li>International Logistics</li>
                        <li>Economic Science</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 91 011 6311</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:frankstraightforward.23@gmail.com"
                               className="text-blue-500">frankstraightforward.23@gmail.com</a>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaGlobe className="mr-2 text-gray-600"/>
                            <a href="#" className="text-blue-500">Website</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Giyasov;
