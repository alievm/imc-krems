import React from 'react';
import PageIntro from "../../components/PageIntro.jsx";
import { useTranslation } from 'react-i18next';

const Leadership = () => {
    const { t } = useTranslation();

    const leaders = [
        {
            name: "Tulkin Teshabaev",
            title: "Rector of Tashkent State University of Economics",
            image: "/Teshabayev_To'lqin_Zakirovich.jpg"
        },
        {
            name: "Dr. Udo Brändle",
            title: "CEO of IMC University of Applied Sciences Krems",
            image: "/web.udo.braendle.jpg"
        },
        {
            name: "Prof. Mehmonov Sultonali Umaraliyevich",
            title: "First Vice-Rector for Academic, TSUE",
            image: "/Professors/img_2.png"
        },
        {
            name: "Prof.(FH) Mag. Dr. Martin Waiguny",
            title: "Academic Head, IMC University of Applied Science, Krems, Austria",
            image: "/Professors/img_1.png"
        },
        {
            name: "Dr. Christian Kümmel",
            title: "Program Director International Business Management",
            image: "/web.christian.kuemmel.jpg"
        },
        {
            name: "Jens Peter Ennen",
            title: "Program Director Tourism and Leisure Management",
            image: "/web.jens.ennen.jpg"
        },
        {
            name: "Ahmed mohaMed Aziz Ismail",
            title: "Dean of the international Joint Education Faculty of TSUE and IMC Krems",
            image: "/Fv2tHlmaMAIwATY.jpg"
        },
    ];

    return (
        <>
            <PageIntro eyebrow={t("Leadership")} title={t("Leadership: Guiding the Path of Excellence at TSUE and IMC Krems")}>
            </PageIntro>
           
            <div className="flex flex-wrap mb-5 justify-center">
                {leaders.map((leader, index) => (
                    <div key={index} className="relative max-w-[270px] rounded overflow-hidden shadow-lg my-4 mx-4">
                        <img className="w-full object-cover w-[270px] h-[270px]" src={leader.image} alt={t("avatar image")} />
                        <div className="absolute bottom-0 left-0 right-0 portrait-bg bg-opacity-50 px-6 py-2">
                            <div className="font-bold text-sm portrait-top-text">{leader.name}</div>
                            <div className="portrait-bot-text">{leader.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Leadership;
