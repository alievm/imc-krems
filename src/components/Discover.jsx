import React from "react";
import Section from "./Section";
import imageWhiteboard from "/public/2023.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Dual Horizons: Unlocking Global Opportunities" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At the dual degree program, we highly value academic honesty and intellectual growth. Our degree structure targets at bringing up valuable and sought-after personnel both for the local and international job market. We do our best to make your university experience unforgettable and ultra-practical. on the top, our students have the opportunity to earn dual degree simultaneously: an Austrian, internationally-recognized diploma and an Uzbek, provided by TSUE and meeting-the-criteria-of-the-local-labor-market degree.
        </p>
        <p>
          We are currently offering:<br/>
          <strong className="text-orange-600">BA in Management (International Business Management)</strong>  <br/>
          <strong className="text-orange-600"> BA in Management (Tourism and Leisure Management)</strong> <br/>
        </p>
      </div>
    </Section>
  );
};

export default Discover;
