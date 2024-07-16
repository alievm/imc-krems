import React from "react";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";

const SectionSecond = ({ title, image, children }) => {
    return (
        <div className="group/section container mx-auto [counter-increment:section]">
            <div className="lg:flex relative lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center ">
                    <FadeIn className="  z-[1]  flex-none ">
                    <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <img
          class="object-cover object-center rounded-full h-96 w-96"
          src="/31.jpg"
          alt="nature image"
        />
      </div>
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

export default SectionSecond;
