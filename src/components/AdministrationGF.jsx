import React from "react";
import Section from "./Section";
import imageMeeting from "../assets/2023.jpg";
import List, { ListItem } from "./List";
import SectionSecond from "./SectionSecond.jsx";
import {useTranslation} from "react-i18next";

const AdministrationGF = () => {
    const {t} = useTranslation();
    return (
        <SectionSecond title={t('administration')} image={{ src: imageMeeting }}>
            <div className="space-y-6 text-base text-neutral-600">
                <p>
                    {t('administrationDescription')}
                </p>
            </div>
        </SectionSecond>

    );
};

export default AdministrationGF;
