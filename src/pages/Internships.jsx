import React from 'react';
import {Avatar, Card, CardBody, Typography} from "@material-tailwind/react";
import clsx from "clsx";
import FadeIn from "../components/FadeIn.jsx";
import {motion} from "framer-motion";
import PageIntro from "../components/PageIntro.jsx";
import {Image} from "antd";
import Section from "../components/Section.jsx";
import imageWhiteboard from "../assets/2023.jpg";
import { FaGlobe, FaHandsHelping, FaUsers, FaBriefcase } from 'react-icons/fa';
import {useTranslation} from "react-i18next";
import img1 from "../assets/Partners/moi.png"
import img2 from "../assets/Partners/01.jpg"
import img3 from "../assets/Partners/Coca-Cola-logo.png"
import img4 from "../assets/Partners/hilton.svg"

const Internships = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div className=" mx-5">
                <div
                    className="relative mt-8 h-72 w-full overflow-hidden  profile-card-bg bg-cover bg-center">
                    <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <FadeIn>
                            <h1 className="text-5xl font-semibold text-white">{t('internships')}</h1>
                        </FadeIn>
                    </div>
                </div>
                <div>
                    <div className="mx-auto p-10 text-center w-full">
                        <FadeIn>
                            <div
                                className="mt-6 max-w-3xl mx-auto text-center text-xl text-gray-900"
                            >
                                {t('doubleDegreeFacultyIntro')}
                            </div>
                        </FadeIn>
                    </div>

                    <div
                        className=" relative  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
                    >
                        <div
                            className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                        <div className=" w-full bg-white p-6 rounded-lg ">
                            <section className="bg-white dark:bg-gray-900">
                                <div
                                    className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-6xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                        <h2 className="mb-4 text-4xl text-center lg:text-left tracking-tight font-extrabold text-gray-900 dark:text-white">Curriculum-Integrated Internships</h2>
                                        <p className="mb-4"> {t('curriculumIntegratedInternships')}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <img className="w-full rounded-lg h-96 object-cover"
                                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                                             alt="office content 1"/>
                                        <img className="mt-4 w-full lg:mt-10 rounded-lg h-96 object-cover"
                                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                                             alt="office content 2"/>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <header className="relative bg-cover bg-center h-96 bg-intern">
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center max-w-3xl text-white">
                                <h1 className="text-4xl  font-bold mb-4">{t('presentationOfExperience')}</h1>
                                <p className="text-lg">
                                    {t('presentationOfExperienceDescription')}
                                </p>
                            </div>
                        </div>
                    </header>
                    `

                    <div className="mx-auto flex max-w-[58rem] py-5 flex-col items-center space-y-4 text-center">

                        <h2 className="font-bold text-3xl text-black leading-[1.1] sm:text-3xl md:text-3xl">{t('ourPartners')}</h2>

                        <p className="max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                            {t('partnersIntro')}
                        </p>

                    </div>
                    <div
                        className="mx-auto mt-10 grid max-w-xl py-10 grid-cols-4 items-center gap-x-20 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10  lg:max-w-7xl lg:mx-auto lg:grid-cols-4">
                        <img
                            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
                            src={img1}
                            alt="Transistor"
                            height={58}
                        />
                        <img
                            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                            src={img2}
                            alt="Reform"
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                            src={img3}
                            alt="Tuple"
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src={img4}
                            alt="SavvyCal"
                            height={48}
                        />
                    </div>

                    <Section title="Industry Experience">
                        <div className="space-y-6 text-base text-neutral-600">
                            <p>
                                {t('industryExperienceDescription')}
                            </p>
                            <p>
                                <strong className="text-gray-900">{t('developProfessionalSkills')}</strong> <br/>
                                <strong className="text-gray-900">{t('understandIndustryStandards')}</strong>
                                <br/>
                                <strong className="text-gray-900">{t('networkWithProfessionals')}</strong>
                                <br/>
                                <strong className="text-gray-900">{t('gainCareerInsights')}</strong>
                                <br/>
                            </p>
                        </div>
                    </Section>
                    <div className="my-10">
                        <Section title="Internships in Top Dubai Hotels" image={{src: imageWhiteboard, shape: 1}}>
                            <div className="space-y-6 text-base text-neutral-600">
                                <p>
                                    {t('dubaiHotelsIntro')}
                                </p>
                                <div
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                                    <div className="flex gap-3 items-center rounded-lg shadow-lg p-4 max-h-min">
                                        <div className="bg-main p-3 rounded-full">
                                            <FaGlobe className="text-3xl text-white"/>
                                        </div>
                                        <p className="">
                                            {t('developGlobalPerspective')}
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center  rounded-lg shadow-lg p-6 max-h-min">
                                        <div className="bg-main p-3 rounded-full">
                                            <FaHandsHelping className="text-3xl text-white"/>
                                        </div>
                                        <p className="">
                                            {t('experienceHighStandards')}
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center  rounded-lg shadow-lg p-6 max-h-min">
                                        <div className="bg-main p-3 rounded-full">
                                            <FaUsers className="text-3xl text-white"/>
                                        </div>
                                        <p className="">
                                            {t('enhanceCulturalUnderstanding')}
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center rounded-lg shadow-lg p-6 max-h-min">
                                        <div className="bg-main p-3 rounded-full">
                                            <FaBriefcase className="text-3xl text-white"/>
                                        </div>
                                        <p className="">
                                            {t('buildInternationalNetworks')}
                                        </p>
                                    </div>
                                    <div className=" rounded-lg p-6 max-h-min col-span-1 lg:col-span-2">
                                        <p className="">
                                            {t('strongIndustryConnections')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Internships;
