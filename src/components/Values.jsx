import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-gray-100 stroke-gray-900/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
     <div className="flex justify-around items-center max-w-7xl mx-auto flex-wrap lg:flex-nowrap">
         <SectionIntro
             title="About Tashkent State University of Economics (TSUE):"
         >
             <p>
                 Tashkent State University of Economics has roughly 10,000 students and is one of the largest economic universities in Central Asia. It is divided into functional institutes that strive to provide education regarding the economics of Uzbekistan. TSEU was the first international American-style business school in Uzbekistan and has gained note by building relationships with notable universities in the US, Great Britain, Austria and Germany. It maintains the largest university library in Central Asia. The university maintains as the Institute of economics, business, and professional development and retraining of personnel, specialized higher business school, republican economic lyceum, economic gymnasium, various scientific-research institutes, consulting and training centers at the University. All these structures ensure the continual economic education. TSUE serves as the base university on economic education in the Republic of Uzbekistan.
             </p>
         </SectionIntro>
         <img height="400" width="400" src="/img_6.png" />
     </div>
    </div>
  );
};

export default Values;
