import React from 'react';
import PageIntro from "../../components/PageIntro.jsx";
import { Tooltip } from "@material-tailwind/react";
import {useTranslation} from "react-i18next";
import img1 from "../../assets/Partners/logo.png"
import img2 from "../../assets/host-logo.svg"
import img3 from "../../assets/img_2.png"
import img4 from "../../assets/Partners/banner-horizontal-black-en.png"
import img5 from "../../assets/Partners/Lund_university_L_CMYK.svg"
import img6 from "../../assets/Partners/unnamed-removebg-preview (1).png"
import img7 from "../../assets/img_3.png"
import img8 from "../../assets/img_1.png"

import img9 from "../../assets/Partners/british-council-1 1.png"
import img10 from "../../assets/Partners/pngegg.png"
import img11 from "../../assets/Partners/Coca_Cola_İçecek_logosu.png"



const Partners = () => {
    const {t} = useTranslation();
    return (
        <section>
            <PageIntro eyebrow={t("Partners")} title={t("Strategic Partnerships: Building Bridges with Global Leaders")} />
            <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h1 className="text-4xl text-gray-900 font-bold">{t('Partner Universities')}</h1>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    <Tooltip
                        content="Wakayama University"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <span
                            className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img1} className="h-16"/>
                        </span>

                    </Tooltip>
                    {/* Hochschule Bremen City University of Applied Sciences */}
                    <Tooltip
                        content="Hochschule Bremen City University of Applied Sciences"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img2} className="h-20" />
                        </a>
                    </Tooltip>

                    {/* Hochschule Stralsund University of Applied Sciences */}
                    <Tooltip
                        content="Universiti Malaya"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img3} className="h-14" />
                        </a>
                    </Tooltip>

                    {/* Universiti Malaya */}
                    <Tooltip
                        content="Aristotle University"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img4} className="h-14" />
                        </a>
                    </Tooltip>

                    {/* Saitama University */}
                    <Tooltip
                        content="Lund University"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img5} className="h-14" />
                        </a>
                    </Tooltip>

                    {/* Lund University */}
                    <Tooltip
                        content="Azerbaijan Turism and Management University"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img6} className="h-20" />
                        </a>
                    </Tooltip>

                    {/* Additional partners */}
                    <Tooltip
                        content="Saitama University"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img7} className="h-16" />
                        </a>
                    </Tooltip>

                    <Tooltip
                        content="Hochschule Bremen City University of Applied Sciences"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img8} className="h-16" />
                        </a>
                    </Tooltip>
                </div>
            </div>

            <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h1 className="text-4xl text-gray-900 font-bold">{t("Partner Organizations")}</h1>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {/* Partner Organization 1 */}
                    <Tooltip
                        content="British Council"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img9} className="h-16" />
                        </a>
                    </Tooltip>

                    {/* Partner Organization 2 */}
                    <Tooltip
                        content="IDP IELTS"
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img10} className="h-20" />
                        </a>
                    </Tooltip>

                    {/* Partner Organization 3 */}
                    <Tooltip
                        content="“Coca-cola icecek” Ltd."
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                        }}
                    >
                        <a href="#" className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl">
                            <img src={img11} className="h-20" />
                        </a>
                    </Tooltip>
                </div>
            </div>
        </section>
    );
};

export default Partners;
