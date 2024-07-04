import React from 'react';
import PageIntro from "../../components/PageIntro.jsx";

const Leadership = () => {
    return (
        <>
            <PageIntro eyebrow="Leadership" title="Leadership: Guiding the Path of Excellence at TSUE and IMC Krems">
            </PageIntro>
            <div className="flex flex-wrap mb-5">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div
                        className="relative mx-auto break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">

                        <div className="flex-auto block py-8 px-9">
                            <div>
                                <div className="grid grid-cols-1 lg:grid-cols-5 w-full">
                                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                                        <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                            <img
                                                className="inline-block  object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                src="/Teshabayev_To'lqin_Zakirovich.jpg"
                                                alt="avarat image"/>
                                        </div>
                                        <div className="text-center">
                                            <a href="javascript:void(0)"
                                               className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Tulkin Teshabaev</a>
                                            <span className="block font-medium text-muted">Rector of Tashkent State University of Economics</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                                        <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                            <img
                                                className="inline-block  object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                src="/web.jens.ennen.jpg"
                                                alt="avarat image"/>
                                        </div>
                                        <div className="text-center">
                                            <a href="javascript:void(0)"
                                               className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Dr. Udo Brändle</a>
                                            <span className="block font-medium text-muted">CEO of IMC University of Applied Sciences Krems</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                                        <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                            <img
                                                className="inline-block  object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                src="/web.christian.kuemmel.jpg"
                                                alt="avarat image"/>
                                        </div>
                                        <div className="text-center">
                                            <a href="javascript:void(0)"
                                               className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Dr. Christian Kümmel</a>
                                            <span className="block font-medium text-muted">Program Director International Business Management</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                                        <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                            <img
                                                className="inline-block  object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                src="/web.udo.braendle.jpg"
                                                alt="avarat image"/>
                                        </div>
                                        <div className="text-center">
                                            <a href="javascript:void(0)"
                                               className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Jens Peter Ennen</a>
                                            <span className="block font-medium text-muted">Program Director Tourism and Leisure Management</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                                        <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                                            <img
                                                className="inline-block object-cover shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                                                src="/Fv2tHlmaMAIwATY.jpg"
                                                alt="avarat image"/>
                                        </div>
                                        <div className="text-center">
                                            <a href="javascript:void(0)"
                                               className="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out">Ahmed Mohamed Aziz Ismail
                                            </a>
                                            <span className="block font-medium text-muted">Dean of the international Joint Education Faculty of TSUE and IMC Krems</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leadership;
