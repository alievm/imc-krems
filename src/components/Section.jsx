import React from "react";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";

const Section = ({ title, image, children }) => {
  return (
    <div className="group/section container mx-auto [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-full flex-none lg:w-[45rem]">
            <div className="flex items-center justify-center w-full -mx-4 lg:pl-10">
              <div className="lg:flex hidden flex-col items-end px-3">
                <img className="object-cover mb-6 rounded shadow-lg h-full sm:h-full xl:h-56 w-28 sm:w-full xl:w-56"
                     src="/img_6.png"
                     alt=""/>
                <img className="object-cover w-20 lg:w-29 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                     src="/img_6.png"
                     alt=""/>
              </div>
              <div className="px-3">
                <img
                    className="object-cover w-full h-full mx-auto lg:w-40 lg:h-40 rounded shadow-lg sm:hbg-green-500ray-50-64 xl:h-80 sm:w-full xl:w-80"
                    src="/img_6.png"
                    alt=""/>
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

export default Section;
