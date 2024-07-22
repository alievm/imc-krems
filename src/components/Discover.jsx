import React from "react";
import Section from "./Section";
import imageWhiteboard from "../assets/2023.jpg";
import { useTranslation } from 'react-i18next';

const Discover = () => {
  const { t } = useTranslation();

  return (
      <Section title={t("DUAL_HORIZONS")} image={{ src: imageWhiteboard, shape: 1 }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            {t("DUAL_HORIZONS_PARAGRAPH")}
          </p>
          <p>
            {t("WE_ARE_OFFERING")}<br/>
            <strong className="text-gray-800">{t("PROGRAM_1")}</strong><br/>
            <strong className="text-gray-800">{t("PROGRAM_2")}</strong><br/>
          </p>
        </div>
      </Section>
  );
};

export default Discover;
