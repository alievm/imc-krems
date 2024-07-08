import React from "react";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";

const SectionSecond = ({ title, image, children }) => {
    return (
        <div className="group/section container mx-auto [counter-increment:section]">
            <div className="lg:flex relative lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center ">
                    <FadeIn className="w-[17.75rem]  z-[1]  flex-none lg:w-[45rem]">
                        <div className="lg:ml-16  lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                            <div className="relative mx-5 lg:w-96">
                                <div
                                    className="bg-tranparent absolute z-[1] left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-gray-400 dark:border-blue-900 lg:size-72"/>
                                <div
                                    className="bg-tranparent absolute left-0 z-[1] top-0 -ml-14 -mt-20 size-40 rounded-full border border-gray-300 dark:border-blue-950 lg:size-72"/>
                                <div
                                    className="bg-tranparent absolute bottom-0 z-[1] right-0 -mb-16 -mr-20 size-40 rounded-full border border-gray-400 dark:border-blue-900 lg:size-72"/>
                                <div
                                    className="bg-tranparent absolute bottom-0 z-[1] right-0 -mb-20 -mr-14 size-40 rounded-full border border-gray-300 dark:border-blue-950 lg:size-72"/>
                                <div
                                    className="absolute inset-0 -m-6 -rotate-2 z-[1] rounded-xl bg-gray-200 dark:bg-gray-800"/>
                                <div
                                    className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-gray-800/75 shadow-inner dark:bg-orange-900/75"/>
                                <img
                                    src={image.src}
                                    className="relative mx-auto rounded-lg shadow-lg z-[2]"
                                    alt="Hero Image"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                    <FadeIn>
                        <div
                            className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                            aria-hidden="true"
                        />
                        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                            {title}
                        </h2>
                        <div className="mt-6">{children}</div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default SectionSecond;
