import React, { useEffect, useRef, useState } from 'react';
import { Collapse, Typography } from 'antd';
import { motion } from 'framer-motion';
import {Accordion, AccordionBody, AccordionHeader} from "@material-tailwind/react";
import PageIntro from "../components/PageIntro.jsx";
import {useTranslation} from "react-i18next";
import header from "../assets/header-besonderheiten.jpg"
const { Panel } = Collapse;
const { Title, Paragraph } = Typography;


const faqData = [
    { id: 1, question: "Is the university private?", answer: "No, it is a public university." },
    { id: 2, question: "Is the diploma recognized after graduation?", answer: "The TDIU diploma awarded to our graduates is among the top 10 nationwide." },
    { id: 3, question: "Are there any scholarship opportunities?", answer: "Yes, there are scholarships available for the 2023-2024 academic year." },
    { id: 4, question: "What if I fail the exam?", answer: "You can join the 4-month pre-foundation course and then enter the first year based on an interview." },
    { id: 5, question: "Is there an opportunity to study abroad?", answer: "Yes, through the 'Student exchange programme,' you can go to Austria, Germany, and other countries for one semester after the second year." },
    { id: 6, question: "Can I participate in the Work&Travel program?", answer: "Yes, you can." },
    { id: 7, question: "How much is the contract fee?", answer: "16,800,000 UZS for the first year." },
    { id: 8, question: "Why does the contract fee increase from the second year?", answer: "From the second year, 40-60% of the professors are foreign, so the contract fee is 2,300 USD." },
    { id: 9, question: "Will we receive two diplomas after graduation?", answer: "Yes, you will receive both the TDIU diploma and the IMC Krems diploma from Austria." },
    { id: 10, question: "Can I get an 'Education Loan' due to the high contract fee?", answer: "Yes, you can get a special 'Education Loan' provided by the government." },
    { id: 11, question: "Is it necessary to pay the full contract fee at the beginning of the study?", answer: "No, you can pay the contract fee in four installments." },
    { id: 12, question: "What programs are available?", answer: "Currently, there are two main programs: International Business Management and Tourism & Leisure Management." },
    { id: 13, question: "Is there a fee to submit documents and take the exam?", answer: "It's free." },
    { id: 14, question: "How can I submit documents?", answer: "You can submit them online through the following link: <a href='https://docs.google.com/forms/d/e/1FAIpQLSdq2l3RB8WcXfPe9Te3o10pscJ2qfg8cm4GK-gQ-TmuQtbH-Q/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer'>Google Form Application</a>" },
    { id: 15, question: "I haven't received my ID yet, can I apply with a green biometric passport?", answer: "Yes, you can." },
    { id: 16, question: "Are the university professors good?", answer: "Our professors hold PhDs and have ESL/ESP/EFL certifications." },
    { id: 17, question: "What subjects are included in the entrance exam?", answer: "English and IQ (logic) tests." },
    { id: 18, question: "Are there any graduates?", answer: "Yes, the first graduates of the joint program completed their studies on July 8, 2022. <a href='https://www.instagram.com/p/Cf9FtVuLk_B/' target='_blank'>Instagram Post</a>" },
    { id: 19, question: "How many students are currently enrolled in the joint education program?", answer: "Currently, we have over 500 students and trainees." },
    { id: 20, question: "Why do you accept only 100-200 students instead of 1000 or 2000?", answer: "We focus on quality, not quantity. Our graduates learn at least English and German." },
    { id: 21, question: "I haven't received my certificate yet, can I still apply?", answer: "Yes, you can." },
    { id: 22, question: "How many years has the university been open?", answer: "TDIU was established in 1931, IMC Krems in 1994, and the joint education program in 2018." },
    { id: 23, question: "How many years is the study?", answer: "4 years." },
    { id: 24, question: "Where can I transfer after the first year?", answer: "After the first year, you will receive a foundation certificate, which allows you to apply to international universities and continue your studies from the second year." },
    { id: 25, question: "Where are you located?", answer: "49 Islam Karimov Street, Chilanzar District, Tashkent City, near Hilton Hotel." },
    { id: 26, question: "Is an IELTS certificate required for admission?", answer: "No, it is not required. If you don't have an IELTS certificate, you can take the internal exam to enter the first year." },
    { id: 27, question: "Do you have phone numbers?", answer: "+998943670440, +998943870440, +998943970440" }
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
    const {t} = useTranslation();
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
                                 src={header}/>
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
                                    <Typography color="white" className="text-lg text-white">{t(section.question)}</Typography>
                                </AccordionHeader>
                                <AccordionBody className="px-3 text-md">
                                    {t(section.answer)}
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
