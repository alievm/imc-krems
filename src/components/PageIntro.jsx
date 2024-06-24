import React from "react";
import FadeIn from "./FadeIn";
import clsx from "clsx";

const PageIntro = ({ eyebrow, title, children, centered = false }) => {
  return (
    <div
      className={clsx("mt-24 container mx-auto sm:mt-32 lg:mt-16", centered && "text-center")}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-orange-600 [text-wrap:balance] sm:text-6xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-xl text-gray-900",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </div>
  );
};

export default PageIntro;
