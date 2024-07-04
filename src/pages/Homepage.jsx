// components/Homepage.js

import React from 'react';
import {Card, Input, Typography} from "@material-tailwind/react";
import FadeIn, { FadeInStagger} from "../components/FadeIn.jsx";
import GridPattern from "../components/GridPattern.jsx";
import StylizedImage from "../components/StylizedImage.jsx";
import List, { ListItem } from "../components/List.jsx";
import Testimonials from "../components/Testimonials.jsx";
import deanPic from "/ma.jpg";
import foundPic from "/fs.jpg";
import StatsSection from "../components/StatsSection.jsx";
import {Badge, Carousel, Button} from "antd";
import VideoHeader from "../components/VideoHeader.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import {AiOutlineAlignRight} from "react-icons/ai";
import {LuMoveRight} from "react-icons/lu";
import {HiOutlineArrowLongRight} from "react-icons/hi2";
import NewsCards from "../components/NewsCards.jsx";
import BlogCards from "../components/BlogCards.jsx";
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Homepage = () => {
    return (
        <>
            <div className="relative">
                <VideoHeader/>
            </div>
            <div className="bg-white">
                <div className="bg-white  py-12 sm:py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
                            Student exchange partner universities
                        </h2>
                        <div
                            className="mx-auto mt-10 grid max-w-xl grid-cols-4 items-center gap-x-20 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img
                                className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                                src="/img.png"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                                src="/img_1.png"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                                src="/img_2.png"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-28 w-full object-contain sm:col-start-2 lg:col-span-1"
                                src="/img_3.png"
                                alt="SavvyCal"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 col-start-2 max-h-28 w-full object-contain sm:col-start-auto lg:col-span-1"
                                src="/img_7.png"
                                alt="Statamic"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-16 container mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-end">
                        <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                            <FadeIn className="w-[23.75rem] flex-none lg:w-[30rem]">
                                <StylizedImage
                                    src="/img_10.png"
                                    sizes="(min-width: 1024px) 31rem, 31rem"
                                    className="justify-center lg:justify-end"
                                />
                            </FadeIn>
                        </div>
                        {/* List item */}
                        <List className="mt-16 text-3xl lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                            <ListItem title="International Business Management">
                                Global skills for dynamic business leadership.
                            </ListItem>
                            <ListItem title="Tourism and Leisure management">
                                Crafting experiences in the world of hospitality.
                            </ListItem>
                        </List>
                    </div>
                </div>


                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
                        Student life events
                    </h2>

                    <NewsCards/>

                </div>

                <BlogCards/>

                <section className="my-20 bg-white">
                    <h2 className="text-center my-10 text-2xl font-semibold leading-8 text-gray-900">
                        Pave Your Way to Achievement
                    </h2>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-center">
                            <FadeInStagger>
                                <div className="w-full px-4 mb-8 md:mb-0">
                                    <img src="/Group-1.png" alt="Build designs that scale" className="mx-auto h-24 mb-4"/>
                                    <FadeIn>
                                        <h2 className="text-xl md:text-xl font-semibold mb-2">Seamless Application
                                            Process</h2>
                                    </FadeIn>
                                    <FadeIn>
                                        <p className="text-gray-600 mb-4">
                                            Seamless Application Process with Expert Guidance.
                                        </p>
                                    </FadeIn>
                                    {/* <a href="#" className="text-orange-300 hover:text-orange-300">
              Browse extensions <i className='bx bx-right-arrow-alt align-bottom'></i>
            </a> */}
                                </div>
                            </FadeInStagger>
                            <FadeInStagger>
                                <div className="w-full px-4">
                                    <img src="/Layer1.png" alt="Customize your workflow" className="mx-auto h-24 mb-4"/>
                                    <FadeIn>
                                        <h2 className="text-xl md:text-xl font-semibold mb-2">Welcome to IMC Krems
                                            Tashkent</h2>
                                    </FadeIn>
                                    <FadeIn>
                                        <p className="text-gray-600 mb-4">
                                            Welcome! Transformative Education Awaits Your Journey.
                                        </p>
                                    </FadeIn>
                                    {/* <a href="#" className="text-orange-300 hover:text-orange-500">
              Browse extensions <i className='bx bx-right-arrow-alt align-bottom'></i>
            </a> */}
                                </div>
                            </FadeInStagger>
                        </div>
                    </div>
                </section>


                <div
                    className="flex flex-col flex-wrap justify-center items-end py-16 px-16 mt-24 w-full  max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="z-10 mt-0 mr-36 mb-0 max-w-full w-[1214px] max-md:mr-2.5 max-md:mb-2.5">
                        <div className="flex justify-between flex-wrap gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-wrap flex-col  lg:w-[35%] w-full max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    src="/img_6.png"
                                    className="grow w-full rounded-xl aspect-[1.04] max-md:mt-10 max-md:max-w-full"
                                />
                            </div>
                            <div className="flex flex-col flex-wrap ml-5 lg:w-[45%] w-full max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src="/logo-dark.png"
                                        className="max-w-full  w-[161px]"
                                    />
                                    <div className="mt-11 text-lg leading-7 text-black max-md:mt-10 max-md:max-w-full">
                                        Since the very early days of its establishment, the Joint degree program between
                                        TSUE and IMC Krems has been building its way up to the bright future. We care
                                        about each student who wants to reach their goals. We support and guide you in
                                        your path to the great success that you are yet to achieve. Our dedicated team
                                        always stays focused on discovering and shaping your unique skills.
                                    </div>
                                    <div className="flex flex-col self-end mt-6 mr-14 max-md:mr-2.5">
                                        <div className="text-xl leading-7 text-[#798591]">
                                            IMC University of Applied Sciences
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="section bio  py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0 wow fadeInRight"
                                 data-wow-duration="3s">
                                <FadeInStagger>
                                    <FadeIn>
                                        <h2 className="text-gray-700 text-lg md:text-lg mb-2">WHO WE ARE?</h2>
                                    </FadeIn>
                                    <FadeIn>
                                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Discover IMC Krems
                                            Tashkent</h2>
                                    </FadeIn>
                                    <FadeIn>
                                        <p className="px-2 py-2 text-lg text-gray-600">
                                            We pride ourselves on providing only the best for our students. Our
                                            university
                                            provides state-of-the-art infrastructure, a library, and world-renowned
                                            professors.
                                        </p>
                                    </FadeIn>
                                </FadeInStagger>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-2/3 flex justify-center wow fadeInLeft"
                                 data-wow-duration="3s">
                                {/* Replace this with your actual image or video */}
                                <img
                                    src="/univer.jpg"
                                    alt="Design Example"
                                    className='rounded-xl'
                                    height="390" width="390"
                                />

                            </div>
                        </div>
                    </div>
                </section>

                <StatsSection/>


                <Testimonials
                    className="mt-24 sm:mt-32 lg:mt-40 px-10"
                    client={{name: "DR. AHMED MOHAMMED AZIZ ISMAIL", position: "Dean", logo: deanPic}}
                >
                       <span className="text-3xl">Explore global opportunities with us at IMC Krems Tashkent, where we prepare you for success in
                        international business.</span>
                </Testimonials>


                <div className="bg-white py-10 sm:py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
                            Partner organizations
                        </h2>
                        <div
                            className="mx-auto mt-10 grid max-w-xl grid-cols-4 items-center gap-x-20 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <img
                                className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                                src="/img_8.png"
                                alt="Transistor"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                src="/img_5.png"
                                alt="Reform"
                                width={158}
                                height={48}
                            />
                            <img
                                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                                src="/img_9.png"
                                alt="Tuple"
                                width={158}
                                height={48}
                            />
                        </div>
                    </div>
                </div>


            </div>

            {/*<ScrollToTopButton/>*/}
        </>
    );
};

export default Homepage;
