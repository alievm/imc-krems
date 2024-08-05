import React from "react";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";

const SectionSingle = ({ title, img,img2,img3,  children }) => {
    return (
        <div className="group/section container mx-auto [counter-increment:section]">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                    <FadeIn className="w-full flex-none lg:w-[45rem]">
                        <div className="flex items-center justify-center w-full -mx-4 lg:pl-10">
                            <div className="lg:flex hidden flex-col items-end px-3">
                                <img className="object-cover mb-6 rounded shadow-lg sm:h-full "
                                     src={img}
                                     height={450}
                                     width={450}
                                     alt=""/>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                    <FadeIn>
                        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-black sm:text-4xl">
                            {title}
                        </h2>
                        <div className="mt-6">{children}</div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default SectionSingle;
