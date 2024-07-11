import React from 'react';
import PageIntro from "../../components/PageIntro.jsx";
import AdministrationGF from "../../components/AdministrationGF.jsx";
import AdministrationGFStaff from "../../components/AdministrationGFStaff.jsx";
import {useTranslation} from "react-i18next";

const GlobalFaculty = () => {
    const {t} = useTranslation();
    return (
        <div className="px-10">
            <PageIntro eyebrow={t('globalFaculty')} title={t('leadershipAndFaculty')}>
            </PageIntro>
                <AdministrationGF/>
            <AdministrationGFStaff/>


        </div>
    );
};

export default GlobalFaculty;
