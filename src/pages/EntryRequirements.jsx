import { Typography, Divider, Card } from 'antd';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import PageIntro from "../components/PageIntro.jsx";
import {MdOutlineAttachEmail} from "react-icons/md";
import {PhoneOutlined} from "@ant-design/icons";
import {RiHourglassLine} from "react-icons/ri";
import {useTranslation} from "react-i18next";
const { Title, Paragraph } = Typography;

const EntryRequirements = () => {
    const {t} = useTranslation();
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.entry-card');
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                if (cardTop < window.innerHeight * 0.75) {
                    card.classList.add('animate-fadeIn');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="px-4 py-8 bg-gray-50 min-h-screen">
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
                                 src="/header-online-bewerbung.jpg"/>
                            <PageIntro
                                       title={t('entryRequirements')}>
                            </PageIntro>

                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                    <div className="space-y-8">
                        <EntryRequirementCard
                            program={t('foundationProgram')}
                            englishRequirement={t('ielts5OrAbove')}
                            additionalRequirements={t('passKtatOrSpeakingTest')}
                        />
                        <EntryRequirementCard
                            program={t('secondYearProgram')}
                            englishRequirement={t('ielts5_5OrAbove')}
                            additionalRequirements={t('passInterview')}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const EntryRequirementCard = ({program, englishRequirement, additionalRequirements}) => (
    <Card className="entry-card hover:shadow-md p-4 rounded-lg border border-gray-200">
        <Title level={2}>{program}</Title>
        <Paragraph className="text-xl">
            <span className="text-xl" dangerouslySetInnerHTML={{__html: englishRequirement}}/>
        </Paragraph>
        <Paragraph lassName="text-xl">{additionalRequirements}</Paragraph>
    </Card>
);

export default EntryRequirements;
