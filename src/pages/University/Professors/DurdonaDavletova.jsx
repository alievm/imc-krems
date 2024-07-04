import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const DurdonaDavletova = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Durdona Davletova</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Lecture Assistant, International Business Management</h2>
                    <p className="text-gray-600 mt-2">Office location: Islam Karimov 49, Tashkent</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Durdona Davletova is currently the assistant of the Joint programme between Tashkent State
                        University of Economics and IMC Krems University. In the world where numbers are important than
                        anything Durdona Davletova stands as an adept narrator, her journey an intriguing exploration of
                        accounting's nuances. From an early fascination with debits and credits, Durdona Davletova
                        embraced the art of balancing sheets, eventually pursuing advanced studies in accounting and
                        finance. The transition from corporate intricacies, including auditing and navigating tax
                        complexities, laid the foundation for her journey into education. As a seasoned accounting
                        professional turned teacher, Durdona Davletova found her true calling in the classroom. The
                        pursuit shifted from corporate challenges to inspiring the next generation of accountants. With
                        each lesson, she skillfully unravels complex concepts, infusing humor and real-world scenarios
                        to make accounting accessible. Durdona Davletova is not merely an educator but a storyteller who
                        believes in shaping not just proficient accountants but ethical and critical thinkers. Her
                        classroom is a stage where the performance is not just about education but fostering a lifelong
                        appreciation for the dynamic world of finance. The legacy of Durdona Davletova extends beyond
                        numbers; it's a testament to the enduring impact of education on the canvas of countless
                        students' lives.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>5 Years of Experience</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>MSc in Economics of Tashkent State University of Economics</li>
                        <li>BSc in Business Economics of Bangor University</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Award & Recognition</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Certificate of completion International Corporate Finance course conducted by professor of
                            Finance, School of Business, Stetson University, Florida,25/11/2019
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Journal Publication - 5</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Area of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Finance, Economics, Marketing, Accounting, Human Resources, Ethics, Project Management,
                            Business Law
                        </li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 93 038 28 96</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:davletovadurdona96@gmail.com"
                               className="text-blue-500">davletovadurdona96@gmail.com</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DurdonaDavletova;
