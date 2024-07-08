import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import { GridList, GridListItem } from "./GridList";
import { useTranslation } from 'react-i18next';

const Values = () => {
    const { t } = useTranslation();

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
                    title={t("ABOUT_TSUE")}
                >
                    <p>
                        {t("TSUE_DETAILS")}
                    </p>
                </SectionIntro>
                <img height="400" width="400" src="/img_6.png" />
            </div>
        </div>
    );
};

export default Values;
