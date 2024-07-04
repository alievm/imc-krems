import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Haneen = () => {
    return (
        <div className="min-h-screen  p-8 flex justify-center items-center">
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#D8D8D8_1px,transparent_1px),linear-gradient(to_bottom,#D8D8D8_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="max-w-4xl bg-white p-6 rounded-lg shadow-xl">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900">Dr. Haneen Allataifeh</h1>
                    <h2 className="text-xl text-gray-600 mt-2">Associate Professor</h2>
                    <p className="text-gray-600 mt-2">International Business Management</p>
                </header>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">About</h2>
                    <p className="text-gray-700 mt-4">
                        Dr. Haneen Allataifeh is currently the Associate Professor in the Faculty of International
                        Business Management (IMC Krems) at Tashkent State University of Economics. She has been teaching
                        a variety of Management Courses to university students for the last two years, covering subjects
                        such as finance, economics, management theory, organizational behaviour, project management,
                        audit and report, and data analytics. Prior to her academic career, Dr. Allataifeh held various
                        positions in industry, including Senior Content Coordinator at Wajeez Co. and Machine Learning
                        Data Analyst at Amazon. Her research focuses on bridging the gap between theory and practice in
                        the realms of Innovation Management and Digital Transformation. Her doctoral thesis presented a
                        novel model for managing digital innovation processes to ensure success and prosperity.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Experience</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Academic: +2 Years</li>
                        <li>Industrial: +7 Years</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Qualifications</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Ph.D. in Business and Accountancy, University of Malaya</li>
                        <li>M.A. in Business Administration, Yarmouk University</li>
                        <li>B.Sc. in Pharmacy, Jordan University for Science and Technology</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Research</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Allataifeh, H., Moghavvemi, S., & Peerally, J. A. (2023). How does the digital innovation
                            process unfold in practice? A novel third-generation and empirical-based need–solution
                            pairing model. European Journal of Innovation Management, 26(3), 730-754.
                        </li>
                        <li>Khan R. L., Priyanshu D., Ather D. & Allataifeh H. (2023). An Implementation of Internet of
                            Things-based Live Temperature and Humidity Monitoring System. 2022 11th International
                            Conference on System Modeling & Advancement in Research Trends (SMART), pp. 277-281.
                        </li>
                        <li>Allataifeh, H. and Moghavvemi, S. (2022). Digitally-enabled innovation processes: the
                            emergence of a new management logic, In Gupta V. & Gupta C., Emerging Technologies for
                            Innovation Management in the Software Industry, IGI Global.
                        </li>
                        <li>Allataifeh, H. and Moghavvemi, S. (2022). Innovation as a management question: can
                            innovation be managed?, In Goi C. L., Innovative Economic, Social, and Environmental
                            Practices for Progressing Future Sustainability, IGI Global.
                        </li>
                        <li>Allataifeh, H. and Moghavvemi, S. (2021). The Individual Dimension of Digital Innovation:
                            The Altered Roles of Innovation Agents and Market Actors, Sustainability, 13(16), 8971.
                        </li>
                        <li>Allataifeh, H., Al-Shaikh, F.N. (2020). Technological Innovation and Strategic Financial
                            Performance: The Case of Jordan, Middle East Journal of Management, 7(3), 298-322.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Areas of Interest</h2>
                    <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                        <li>Digital Transformation</li>
                        <li>Innovation Management</li>
                        <li>Management Practices</li>
                        <li>Big Data and Digital Analytics</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-gray-800 border-b-2 pb-2">Contact</h2>
                    <div className="flex mt-4 space-x-6">
                        <div className="flex items-center text-gray-700">
                            <FaPhone className="mr-2 text-gray-600"/>
                            <span>+998 91 794 4303</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaEnvelope className="mr-2 text-gray-600"/>
                            <a href="mailto:haneen@allataifeh.com" className="text-blue-500">haneen@allataifeh.com</a>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <FaLinkedin className="mr-2 text-gray-600"/>
                            <a href="https://www.linkedin.com/in/haneenallataifeh/"
                               className="text-blue-500">LinkedIn</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Haneen;
