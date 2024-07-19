import React from "react";
import Section from "./Section";
import img from "/public/1 photo.jpg";
import img2 from "/public/2 photo.jpg";
import img3 from "/public/3 photo.jpg";
import Blockquote from "./Blockquote";
import { useTranslation } from 'react-i18next';

const Build = () => {
    const { t } = useTranslation();

    return (
        <Section title={t("ABOUT_IMC_KREMS")} img={img} img2={img2} img3={img3}>
            <div className="space-y-6 text-base text-neutral-600">
                <p>
                    {t("IMC_KREMS_DETAILS")}
                </p>
                <p>
                    {t("IMC_KREMS_HISTORY")}
                </p>
            </div>
            <Blockquote
                author={{ name: "IMC Krems", role: t("IMC_KREMS_INNOVATION") }}
                className="mt-12"
            >
                {t("IMC_KREMS_DETAILS")}
            </Blockquote>
        </Section>
    );
};

export default Build;
