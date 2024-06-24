import React from 'react';
import {StatList, StatListItem} from "../../components/StatList.jsx";
import PageIntro from "../../components/PageIntro.jsx";
import ContactSection from "../../components/ContactSection.jsx";
import Cultures from "../../components/Cultures.jsx";
import Discover from "../../components/Discover.jsx";
import Build from "../../components/Build.jsx";
import Deliver from "../../components/Deliver.jsx";
import Values from "../../components/Values.jsx";

const AboutUs = () => {
    return (
       <div className="mb-20 px-7">
           <PageIntro eyebrow="ABOUT US" title="Forging Global Leaders: The Dual Degree Advantage with TSUE and IMC Krems">
               <p>
                   Since the very early days of its establishment, the Joint degree program between TSUE and IMC Krems has been building its way up to the bright future. We care about each student who wants to reach their goals. We support and guide you in your path to the great success that you are yet to achieve. Our dedicated team always stays focused on discovering and shaping your unique skills.
               </p>
           </PageIntro>
           <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
               {/* Discover */}
               <Discover />
               {/* Deliver */}
               <Deliver />
               {/* Build */}
               <Build />
           </div>
           {/* Values */}
           <Values />
       </div>
    );
};

export default AboutUs;
