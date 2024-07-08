import React from "react";
import SectionSecond from "./SectionSecond.jsx";
import imageMeeting from "/public/2023.jpg";
import { useTranslation } from 'react-i18next';

const Deliver = () => {
  const { t } = useTranslation();

  return (
      <SectionSecond title={t("HERO_IMAGE")} image={{ src: imageMeeting, shape: 1 }}>
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            {t("HERO_IMAGE_PARAGRAPH")}
          </p>
        </div>
      </SectionSecond>
  );
};

export default Deliver;
