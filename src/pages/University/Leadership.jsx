import React from 'react';
import PageIntro from "../../components/PageIntro.jsx";
import { useTranslation } from 'react-i18next';
import img1 from "../../assets/Teshabayev_To'lqin_Zakirovich.jpg"
import img2 from "../../assets/web.udo.braendle.jpg"
import img3 from "../../assets/Professors/img_2.png"
import img4 from "../../assets/Professors/img_1.png"
import img5 from "../../assets/web.christian.kuemmel.jpg"
import img6 from "../../assets/web.jens.ennen.jpg"
import img7 from "../../assets/deandean.png"
import img8 from "../../assets/6.png"
import img9 from "../../assets/7.png"
import img10 from "../../assets/7.png"
import img11 from "../../assets/8.png"

const Leadership = () => {
    const { t } = useTranslation();

    const leaders = [
        {
            name: "Tulkin Teshabaev",
            title: "Rector of Tashkent State University of Economics",
            image: img1
        },
        {
            name: "Dr. Udo Brändle",
            title: "CEO of IMC University of Applied Sciences Krems",
            image: img2
        },
        {
            name: "Prof. Mehmonov Sultonali Umaraliyevich",
            title: "First Vice-Rector for Academic, TSUE",
            image: img3
        },
        {
            name: "Prof.(FH) Mag. Dr. Martin Waiguny",
            title: "Academic Head, IMC University of Applied Science, Krems, Austria",
            image: img4
        },
        {
            name: "Ahmed Mohamed Aziz Ismail",
            title: "Rector's Advisor on International Educational Programs and Scientific Affairs",
            image: img7
        },
        {
            name: "Prof.(FH) Dipl.-Ing. Dr. Roger Hage",
            title: "Head of Institute Global Impact and Transformation / Programme Director Digital Business Innovation and Transformation",
            image: img8
        },
        {
            name: "MA. Chen Yang",
            title: "Programme Director Transnational Programmes",
            image: img9
        },
        {
            name: "Ms. Uktamova Durdona",
            title: "Dean of IMC Krems International Double Degree Faculty at TSUE in partnership with the IMC UAS",
            image: img11
        },
        // {
        //     name: "Dr. Christian Kümmel",
        //     title: "Program Director International Business Management",
        //     image: img5
        // },
        // {
        //     name: "Jens Peter Ennen",
        //     title: "Program Director Tourism and Leisure Management",
        //     image: img6
        // },

    ];

    return (
        <>
            <PageIntro eyebrow={t("Leadership")} title={t("Leadership: Guiding the Path of Excellence at TSUE and IMC Krems")}>
            </PageIntro>
           
            <div className="flex flex-wrap mb-5 justify-center">
                {leaders.map((leader, index) => (
                    <div key={index} className="relative max-w-[370px]  rounded overflow-hidden shadow-lg my-4 mx-4">
                        <img className="w-full object-cover  h-[270px]" src={leader.image} alt={t("avatar image")} />
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
