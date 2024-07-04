import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone, FaGlobe } from 'react-icons/fa';

const Urmanov = () => {
    return (
        <div className="min-h-screen relative p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Dr. Bahromjon Urmanov</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Senior Lecturer, International Business Management</h2>
                    <p className="text-gray-600 mt-2">Double-Degree Program between Tashkent State University of
                        Economics and Austrian University of Applied Sciences Krems</p>
                    <p className="text-gray-600 mt-1">Room 109, Building 1, TSUE</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Dr. Bahromjon Urmanov Numanovich is currently a senior lecturer at the department of
                        "International Business Management" of the double-degree program between Tashkent State
                        University of Economics and Austrian University of Applied Sciences Krems. He is a Ph.D.
                        candidate at Yeungnam University, Republic of Korea, majoring in Management Information Systems
                        (MIS). He has been delivering lectures on several subjects related to economics and MIS and
                        supervising six BA theses. He has published research articles in the field of management
                        information systems.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <p className="text-gray-700 mt-4">+4 Years</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Ph.D. candidate in Business Administration at Yeungnam University, Republic of Korea</li>
                        <li>MBA in Business Administration, Yeungnam University, Republic of Korea</li>
                        <li>Bachelor of Management, Tashkent State University of Economics</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Awards & Recognitions</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Best paper award (First International Workshop on Communication Management, Soft Computing,
                            and Digital Economy. ICFNDS 2021, December 15-16, 2021, Dubai, United Arab Emirates).
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>
                            Urmanov Bahromjon, Shin Hoyoung, Kim Kisu (2013).
                            <a href="https://www.earticle.net/Article/A208290" className="text-blue-500">A Study on the
                                Factors Affecting Turnover Intentions of IT Professionals</a>.
                            Asia-Europe Perspective Association. The Review of Eurasian Studies/유라시아연구 제10권 제1호 Vol.10
                            No.1, 2013. Pp.147-174.
                        </li>
                        <li>
                            Urmanov Bahromjon and Shin Hoyong (2021).
                            <a href="https://dl.acm.org/doi/10.1145/3508072.3508169" className="text-blue-500">An
                                Empirical Investigation on the Factors Affecting Smartphone Addiction in Digital Era:
                                Effect of Social Networking Services and Instant Messaging Applications Usage</a>.
                            ©2021 Association for Computing Machinery. ACMISBN978-1-4503-8734-7/21/12...$15.00.
                        </li>
                        <li>
                            Kabilov Alisher, Radjabov Sherzod, and Urmanov Bahromjon (2021).
                            <a href="https://dl.acm.org/doi/10.1145/3508072.3508215" className="text-blue-500">Problem
                                of Optimum Control Connected with Environmental Problems</a>.
                            © 2021 Association for Computing Machinery. ACMISBN 978-1-4503-8734-7/21/12...$15.00.
                        </li>
                        <li>
                            Urmanov Bahromjon, Shin Hoyoung, Abdullaev Munis, Suleimanov Farrukh, Uktamova Durdona,
                            Sulaymanov Samandarboy, Bakhodirova Durdona, Norboyeva Nafisa, and Yusupova Dilbar (2022).
                            <a href="https://link.springer.com/book/10.1007/978-3-031-30259-6"
                               className="text-blue-500">“I’ll wait 4 ur answr!” A Study on Modern Style of
                                Cyber-Writing and User Reactions</a>.
                            Conference paper at the 22nd International Conference on “Next Generation Wired/Wireless
                            Networks and Systems” (NEW2EN-2022), December 15-16, Tashkent, Uzbekistan. Published within
                            eBook entitled “Internet of Things, Smart Spaces, and Next Generation Networks and Systems”,
                            ISBN 978-3-031-30258-9, Lecture Notes in Computer Science 13772, Springer.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Areas of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Turnover intention of IT professionals</li>
                        <li>Smartphone, social media and Internet addiction of users and its consequences</li>
                        <li>Online word-of-mouth and its effect on company performance in the market</li>
                        <li>Cyber behavior and its antecedents</li>
                        <li>Technostress</li>
                        <li>Technology compatibility</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 97 005 8545</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:urmanov1983@gmail.com" className="text-blue-500">urmanov1983@gmail.com</a>
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

export default Urmanov;
