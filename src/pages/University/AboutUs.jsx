import React from 'react';
import {StatList, StatListItem} from "../../components/StatList.jsx";
import PageIntro from "../../components/PageIntro.jsx";
import ContactSection from "../../components/ContactSection.jsx";
import Cultures from "../../components/Cultures.jsx";
import Discover from "../../components/Discover.jsx";
import Build from "../../components/Build.jsx";
import Deliver from "../../components/Deliver.jsx";
import Values from "../../components/Values.jsx";
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation();
    return (
       <div className="mb-20 px-7">
           <PageIntro
               eyebrow={t("ABOUT_US")}
               title={t("FORGING_GLOBAL_LEADERS")}
           >
               <p>
                   {t("ABOUT_US_PARAGRAPH")}
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
