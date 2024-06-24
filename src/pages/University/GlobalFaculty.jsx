import React from 'react';
import PageIntro from "../../components/PageIntro.jsx";
import AdministrationGF from "../../components/AdministrationGF.jsx";
import AdministrationGFStaff from "../../components/AdministrationGFStaff.jsx";

const GlobalFaculty = () => {
    return (
        <div className="px-10">
            <PageIntro eyebrow="Global Faculty" title="Leadership and Faculty of the TSUE & IMC Krems Joint Program">
            </PageIntro>
                <AdministrationGF/>
            <AdministrationGFStaff/>


        </div>
    );
};

export default GlobalFaculty;
