import React from 'react';
import {Avatar, Card, CardBody, Typography} from "@material-tailwind/react";
import clsx from "clsx";
import FadeIn from "../components/FadeIn.jsx";
import {motion} from "framer-motion";
import PageIntro from "../components/PageIntro.jsx";
import {Image} from "antd";
import Section from "../components/Section.jsx";
import imageWhiteboard from "../../public/2023.jpg";
import { FaGlobe, FaHandsHelping, FaUsers, FaBriefcase } from 'react-icons/fa';

const Internships = () => {
    return (
        <div>
            <div className=" mx-5">
                <div
                    className="relative mt-8 h-72 w-full overflow-hidden rounded-xl profile-card-bg bg-cover bg-center">
                    <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <FadeIn>
                        <h1 className="text-5xl font-semibold text-white">Internships</h1>
                        </FadeIn>
                    </div>
                </div>
                <Card className="mx-3 -mt-16 mb-6 lg:mx-4 ">
                    <div className="mx-auto p-10">
                        <FadeIn>
                            <div
                                className="mt-6 max-w-3xl text-center text-xl text-gray-900"
                            >
                                At our double degree faculty, we pride ourselves on our practical and industry-focused
                                curriculum. As a University of Applied Sciences, we emphasize the importance of linking
                                theoretical knowledge with real-world applications.
                            </div>
                        </FadeIn>
                    </div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className=" relative  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
                    >
                        <div
                            className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                        <div className=" w-full bg-white p-6 rounded-lg ">

                            <div className="flex lg:flex-nowrap relative items-center flex-wrap ">
                                <PageIntro title="Curriculum-Integrated Internships">
                                    Our curriculum is uniquely designed to ensure that students not only learn but also
                                    apply their knowledge in real industry settings. In the fourth semester, all our
                                    students embark on a 22-weeks internship program. This essential part of their
                                    education allows them to gain hands-on experience, understand the intricacies of
                                    industry operations, and apply the theories and skills they've learned in class.
                                </PageIntro>

                                <img className="w-["
                                     src="/csm_gruppe-studenten-gehen-in-einer-gasse_42df2f9a0b (1).jpg"/>
                            </div>
                        </div>
                    </motion.div>

                    <header className="relative bg-cover bg-center h-96"
                            style={{backgroundImage: 'url("/teaser-rund-um-den-imc-campus-krems.jpg")'}}>
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center max-w-3xl text-white">
                                <h1 className="text-4xl  font-bold mb-4">Presentation of Experience</h1>
                                <p className="text-lg">
                                    After completing the internship, students return to the university to present their
                                    experiences and the knowledge they have gained. This presentation is a crucial part
                                    of their learning process, allowing them to reflect on their time in the industry,
                                    share insights with their peers, and receive feedback from faculty.
                                </p>
                            </div>
                        </div>
                    </header>
                    `

                    <div className="mx-auto flex max-w-[58rem] py-5 flex-col items-center space-y-4 text-center">

                        <h2 className="font-bold text-3xl text-black leading-[1.1] sm:text-3xl md:text-3xl">Our
                            Partners</h2>

                        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                            We are proud to have established partnerships with a wide range of leading companies and
                            organizations across various industries. Our partners provide our students with diverse
                            opportunities to work and learn in real-world environments. Some of our esteemed partners
                            include:
                        </p>

                    </div>
                    <div
                        className="mx-auto mt-10 grid max-w-xl py-10 grid-cols-4 items-center gap-x-20 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10  lg:max-w-7xl lg:mx-auto lg:grid-cols-4">
                        <img
                            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
                            src="/Partners/moi.png"
                            alt="Transistor"
                            height={58}
                        />
                        <img
                            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                            src="/Partners/01.jpg"
                            alt="Reform"
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                            src="/Partners/Coca-Cola-logo.png"
                            alt="Tuple"
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="/Partners/hilton.svg"
                            alt="SavvyCal"
                            height={48}
                        />
                    </div>

                    <Section title="Industry Experience" image={{src: imageWhiteboard, shape: 1}}>
                        <div className="space-y-6 text-base text-neutral-600">
                            <p>
                                During their internships, students will work in various industries, applying their
                                academic knowledge to practical situations. This invaluable experience helps them to:
                            </p>
                            <p>
                                <strong className="text-gray-900">Develop professional skills</strong> <br/>
                                <strong className="text-gray-900">Understand industry standards and practices</strong>
                                <br/>
                                <strong className="text-gray-900">Network with professionals in their field</strong>
                                <br/>
                                <strong className="text-gray-900">Gain insights into their future careers</strong> <br/>
                            </p>
                        </div>
                    </Section>
                    <div className="my-10">
                        <Section title="Internships in Top Dubai Hotels" image={{src: imageWhiteboard, shape: 1}}>
                            <div className="space-y-6 text-base text-neutral-600">
                                <p>
                                    Additionally, we have forged partnerships with top hotels in Dubai, offering our
                                    students the chance to practice and work in one of the most dynamic hospitality
                                    markets
                                    in the world. These internships provide students with unparalleled exposure to the
                                    hospitality industry, helping them to:
                                </p>
                                <div
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                                    <div className="flex gap-3 items-center rounded-lg shadow-lg p-4 max-h-min">
                                        <div className="bg-main p-3 rounded-full">
                                            <FaGlobe className="text-3xl text-white"/>
                                        </div>
                                        <p className="">
                                            Develop a global perspective on hospitality management
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center  rounded-lg shadow-lg p-6 max-h-min">
                                        <div className="bg-main p-3 rounded-full">
                                            <FaHandsHelping className="text-3xl text-white"/>
                                        </div>
                                        <p className="">
                                            Experience high standards of service and luxury
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center  rounded-lg shadow-lg p-6 max-h-min">
                                        <div className="bg-main p-3 rounded-full">
                                            <FaUsers className="text-3xl text-white"/>
                                        </div>
                                        <p className="">
                                            Enhance their cultural understanding and adaptability
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center rounded-lg shadow-lg p-6 max-h-min">
                                        <div className="bg-main p-3 rounded-full">
                                            <FaBriefcase className="text-3xl text-white"/>
                                        </div>
                                        <p className="">
                                            Build international professional networks
                                        </p>
                                    </div>
                                    <div className=" rounded-lg p-6 max-h-min col-span-1 lg:col-span-2">
                                        <p className="">
                                            Our strong industry connections ensure that our students receive quality
                                            internships that are relevant to their fields of study and career
                                            aspirations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Internships;
