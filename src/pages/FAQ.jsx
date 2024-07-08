import React, { useEffect, useRef, useState } from 'react';
import { Collapse, Typography } from 'antd';
import { motion } from 'framer-motion';
import {Accordion, AccordionBody, AccordionHeader} from "@material-tailwind/react";
import PageIntro from "../components/PageIntro.jsx";

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const faqData = [
    {  id: 1,
        question: "Universitet xususiymi?",
        answer: "Yo'q, Davlat universiteti"
    },
    {id: 2,
        question: "Bitirganidan so'ng diplom o'tadimi?",
        answer: "Bizning bitiruvchilarga taqdim etiladigan TDIU diplomi respublika miqyosida TOP 10 ga kiradi"
    },
    {id: 3,
        question: "Grant o'rinlari mavjudmi?",
        answer: "2023-2024 o'quv yili uchun Grant o'rinlari ajratilgan"
    },
    {id: 4,
        question: "Imtihondan o'ta olmasam nima qilsam bo'ladi?",
        answer: "Universitetda 4 oylik pre-foundation kursini tamomlab 1-kursga suhbat asosida kirsangiz bo'ladi."
    },
    {id: 5,
        question: "Chet-elda o'qish imkoniyati bormi?",
        answer: "Ha, 'Student exchange programme' dasturi orqali siz 2-kursdan so'ng 1 semestrga Avstriya, Germaniya va boshqa davlatlarga borsangiz bo'ladi"
    },
    {id: 6,
        question: "Work&Travel dasturida qatnashsa bo'ladimi?",
        answer: "Ha, bo'ladi"
    },
    {id: 7,
        question: "Kantrakt summasi necha pul?",
        answer: "1-kurs uchun 16.800.000 uzs"
    },
    {id: 8,
        question: "2-kursdan nega kantrakt oshadi?",
        answer: "2-kursdan o'qituvchi va professorlarning 40-60% chet-ellik bo'lganligi sabablik kantrakt summasi 2.300 usd"
    },
    {id: 9,
        question: "Bitirganimizdan so'ng 2 ta diplom beriladimi?",
        answer: "Ha, TDIU diplomi va Avstriyaning Imc Krems diplomi beriladi"
    },
    {id: 10,
        question: "Kantrakt qimmatligi sabablik 'Ta'lim krediti' olsak bo'ladimi?",
        answer: "Ha, Davlat tomonidan ajratilgan mahsus imtiyozlik 'Ta'lim krediti' olsangiz bo'ladi"
    },
    {id: 11,
        question: "Kantrkatni o'qish boshida 100% to'lash shartmi?",
        answer: "Yo'q, Kantrakt summasini 4 ga bo'lib to'lash imkoniyati mavjud"
    },
    {id: 12,
        question: "Qanday yo'nalishlar bor?",
        answer: "Hozirgi kunda 2 ta asosiy yo'nalish uchun qabul ketmoqda: International business management, Tourism & leisure management"
    },
    {id: 13,
        question: "Hujjat topshirib imtihonda qatnashish pullikmi?",
        answer: "Bepul"
    },
    {id: 14,
        question: "Qanday qilib hujjat topshirsam bo'ladi?",
        answer: (
            <>
                Online ilova orqali:
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdq2l3RB8WcXfPe9Te3o10pscJ2qfg8cm4GK-gQ-TmuQtbH-Q/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                    Google Form Application
                </a>
            </>
        )},
    {id: 15,
        question: "Men hali ID olmaganman, yashil biometrik passport bilan topshirsam bo'ladimi?",
        answer: "Ha, bo'ladi"
    },
    {id: 16,
        question: "Universitet o'qituvchilari yaxshimi?",
        answer: "Bizda PhD hamda ESL/ESP/EFL o'qituvchilar dars berishadi"
    },
    {id: 17,
        question: "Kirish Imtihoni nimalardan bo'ladi?",
        answer: "Ingliz tili va IQ (mantiq) test"
    },
    {id: 18,
        question: "Bitiruvchilar bormi?",
        answer: (
            <>
                Ha, 2022-yil 8-iyul kuni qo'shma ta'lim dasturining ilk qaldirg'ochlari bitirdi: <a href='https://www.instagram.com/p/Cf9FtVuLk_B/' target='_blank'>Instagram Post</a>
            </>
        )
    },
    {id: 19,
        question: "Hozirgi kunda nechta talaba mavjud shu qo'shma ta'lim dasturida?",
        answer: "Hozirgi kunda 500 dan ortiq talaba va tinglovchilarimiz mavjud"
    },
    {id: 20,
        question: "Nega 1000 yoki 2000 ta emas balki 100-200 ta qabul qilasizlar?",
        answer: "Bizda songa emas sifatga ahamiyat beriladi, bizni bitiruvchilar eng kamida Ingliz, Nemis o'rganib chiqishadi"
    },
    {id: 21,
        question: "Hali attestat olmaganman, topshirsam bo'ladi?",
        answer: "Ha, bo'ladi"
    },
    {id: 22,
        question: "Bu universitet ochilganiga necha yil bo'ldi?",
        answer: "TDIU 1931-yil, IMC Krems 1994-yil, Qo'shma ta'lim dasturi esa 2018-yil"
    },
    {id: 23,
        question: "O'qish necha yillik?",
        answer: "4 yillik"
    },
    {id: 24,
        question: "1-kursdan so'ng qayerga perevod qilsa bo'ladi?",
        answer: "1-kursdan so'ng foundation sertifikat beriladi va ushbu sertifikat bilan Xalqaro universitetlarga topshirib 2-kursdan o'qishni davom ettirsangiz bo'ladi"
    },
    {id: 25,
        question: "Qayerda joylashgansizlar?",
        answer: "Toshkent shahar, Chilonzor tumani, Islom Karimov ko'chasi 49, mo'ljal Hilton mehmonxonasi"
    },
    {id: 26,
        question: "IELTS sertifikati shartmi kirish uchun?",
        answer: "Yo'q shart emas, agarda IELTS mavjud bo'lmasa unda 1-kursga kirish uchun ichki imtihondan o'tasiz."
    },
    {id: 27,
        question: "Telefon raqamilar bormi?",
        answer: "+998903939099, +998909691011, +998909990989, +998900169099"
    }
];


const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const FAQ = () => {
    const [expandedSectionId, setExpandedSectionId] = useState(null); // Состояние для открытого аккордеона

    const toggleSection = (id) => {
        setExpandedSectionId(expandedSectionId === id ? null : id); // Открывает или закрывает аккордеон при клике
    };

    return (
        <div className="faq-container px-4 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-full mx-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className=" relative  px-4 sm:px-6 lg:px-8 flex justify-center items-center"
                >
                    <div
                        className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    <div className="max-w-full w-full bg-white p-6 ">
                        <div className="lg:flex-nowrap relative items-center flex-wrap">
                            <img className="h-[50vh] w-full object-cover z-[10]"
                                 src="/header-besonderheiten.jpg"/>
                            <PageIntro
                                title="Frequently asked questions">
                            </PageIntro>

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {opacity: 0, y: 20},
                        visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
                    }}
                    className="accordion-container container mx-auto"
                >

                    <section className="my-8">
                        {faqData.map((section) => (
                            <Accordion
                                key={section.id}
                                open={expandedSectionId === section.id} // Используется expandedSectionId для открытия аккордеона
                                animate={CUSTOM_ANIMATION} // Настройте анимацию, если требуется
                                icon={<Icon id={section.id}
                                            open={expandedSectionId}/>} // Проверьте, как вы используете иконку
                            >
                                <AccordionHeader className="bg-main text-white hover:text-white px-3"
                                                 onClick={() => toggleSection(section.id)}>
                                    <Typography color="white" className="text-lg text-white">{section.question}</Typography>
                                </AccordionHeader>
                                <AccordionBody className="px-3 text-md">
                                    {section.answer}
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
