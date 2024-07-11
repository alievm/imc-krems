import React from "react";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";

const SectionThird = ({ title, image, children }) => {
    return (
        <div className="group/section container mx-auto [counter-increment:section]">
            <div className="lg:flex relative lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center ">
                    <FadeIn className="w-[17.75rem]  z-[1]  flex-none lg:w-[45rem]">
                        <img
                            className="object-cover w-full h-full mx-auto lg:w-40 lg:h-40 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-80 sm:w-full xl:w-80"
                            src={image.src}
                            alt=""/>
                    </FadeIn>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                    <FadeIn>
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

export default SectionThird;
