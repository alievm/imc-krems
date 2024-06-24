import React from "react";
import Section from "./Section";
import imageLaptop from "/public/circle.png";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="About IMC University of Applied Sciences Krems" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          IMC Krems offers 27-degree programs, and has 3,100 students, 560 lecturers, as well as 137 partner universities in 36 countries. With three locations in and around Krems, the university offers bachelor and master's degree programs in business, health sciences and life sciences.
        </p>
        <p>
          IMC Krems was founded in 1994 as International Management Center GmbH (IMC), after the Fachhochschul-Studiengesetz Act in (University of Applied Sciences Studies Act) 1993 opened the way for private-sector institutions to provide university degree programs. It started with an English language degree program in Tourism and Leisure Management that included a compulsory semester abroad in an internship – a first in Austria, after which it has expanded to the level of university the present day.
        </p>
      </div>
      <Blockquote
        author={{ name: "IMC Krems", role: "Innovating Education Since 1994" }}
        className="mt-12"
      >
          IMC University of Applied Sciences Krems (German: IMC Fachhochschule Krems) is a private Austrian university. Founded in 1994, IMC Krems has three campuses in Krems, Austria.
      </Blockquote>
    </Section>
  );
};

export default Build;
