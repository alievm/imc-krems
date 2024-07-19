import {Typography, Divider, Card, Steps} from 'antd';
import { motion } from 'framer-motion';
import {MdOutlineAttachEmail} from "react-icons/md";
import {
    CheckCircleOutlined,
    CloudUploadOutlined,
    FileTextOutlined,
    FormOutlined,
    PhoneOutlined
} from "@ant-design/icons";
import {RiHourglassLine} from "react-icons/ri";
import React from "react";
import PageIntro from "../components/PageIntro.jsx";
import {useTranslation} from "react-i18next";
import {Step} from "@material-tailwind/react";
const { Title, Paragraph } = Typography;

const KTATPage = () => {
    const {t} = useTranslation();
    return (
        <div className="px-4 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-full mx-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className=" relative   px-4 sm:px-6 lg:px-8 flex justify-center items-center"
                >
                    <div
                        className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    <div className="max-w-6xl mx-auto w-full bg-white p-6 ">
                        <div className="lg:flex-nowrap relative items-center flex-wrap">
                            <img className="h-[50vh] w-full object-cover z-[10]"
                                 src="/teaser-10-gruende-fuer-krems.jpg"/>
                            <PageIntro eyebrow={t('Learn about KTAT initiatives')}
                                       title={t("About KTAT")}>
                              <div className="text-center">
                                  {t("The Krems Tashkent Admission Test (KTAT) is a comprehensive assessment designed to evaluate your readiness for the academic programs at our faculty. The test ensures that all students meet the required standards in key academic areas and possess the necessary skills for success in their studies.")}
                              </div>
                            </PageIntro>

                        </div>

                        <Title level={2}>{t("Overview of KTAT")}</Title>
                        <Paragraph className="mb-8 text-xl">
                            The KTAT consists of two main parts: a written exam and a speaking test. Each component is
                            designed to assess different aspects of your academic abilities and language proficiency.
                        </Paragraph>

                        <Divider/>

                        <Title level={3}>{t("Part 1: Written Exam")}</Title>
                        <Paragraph className="mb-8 text-xl">
                            {t("The written exam evaluates your skills in three key areas: English, Math, and Logic.")}
                        </Paragraph>

                        <Card className="mb-8">
                            <Title level={4}>{t("1. English Test (30 Questions)")}</Title>
                            <Paragraph className="text-xl">
                                {t("Purpose: To assess your English language proficiency, including grammar, vocabulary, reading comprehension, and writing skills.")}
                            </Paragraph>
                            <Paragraph className="text-xl">
                                {t("Format: Multiple-choice questions covering various aspects of English language use.")}
                            </Paragraph>
                            <Paragraph className="text-xl">
                                {t("Sample Questions:")}
                                <ul>
                                    <li>Choose the correct word to complete the sentence: "She _____ to the store every
                                        Saturday."
                                    </li>
                                    <li>Read the passage and answer the question: "The sun rises in the east and sets in the
                                        west. This statement is true for most places on Earth. What does this passage mainly
                                        describe?"
                                    </li>
                                </ul>
                            </Paragraph>
                        </Card>

                        {/* Include similar Cards for Math Test and Logic Test */}

                        <Divider/>

                        <Title level={3}>{t("Part 2: Speaking Test")}</Title>
                        <Paragraph className="mb-8 text-xl">
                            {t("The speaking test evaluates your ability to communicate effectively in English.")}
                        </Paragraph>

                        <Card className="mb-8">
                            <Paragraph className="text-xl">
                                <b>{t("Components of the Speaking Test:")}</b>
                                <ol>
                                    <li>{t("Introduction: You will introduce yourself and discuss your background, interests, and goals.")}
                                    </li>
                                    <li>{t("Discussion Topics: You will be asked to discuss specific topics related to your academic interests or current events.")}
                                    </li>
                                    <li>{t("Role Play: You might engage in a role-play exercise where you respond to hypothetical scenarios or solve problems.")}
                                    </li>
                                </ol>
                            </Paragraph>
                            <Paragraph className="text-xl">
                                {t("Sample Speaking Test Topics:")}
                                <ul>
                                    <li>Describe a challenge you have faced and how you overcame it.</li>
                                    <li>Discuss a recent news event and share your opinion on it.</li>
                                    <li>Explain your reasons for choosing [University Name] and what you hope to achieve
                                        here.
                                    </li>
                                </ul>
                            </Paragraph>
                        </Card>

                        <Divider/>

                        <Title level={2}>{t("Preparing for KTAT")}</Title>
                        <Paragraph  className="mb-8 text-xl">
                            {t("To prepare for the KTAT, consider the following tips:")}
                        </Paragraph>
                        <ul className="mb-8">
                            <li>{t("Review Basic Concepts: Brush up on English grammar and vocabulary, basic math principles, and logical reasoning strategies.")}
                            </li>
                            <li>{t("Practice Sample Questions: Work on sample questions for English, Math, and Logic to familiarize yourself with the test format.")}
                            </li>
                            <li>{t("Improve Speaking Skills: Practice speaking English with friends, family, or through language exchange programs.")}
                            </li>
                        </ul>

                        <Title level={2}>{t("Admission Test Schedule")}</Title>
                        <Paragraph className="mb-8 text-xl">
                            {t("The KTAT is held on specific dates throughout the year. Please check our website or contact the admissions office for the upcoming test dates and registration deadlines.")}
                        </Paragraph>

                        <Divider/>

                        <Card className="shadow-lg rounded-lg">
                            <div className="p-8">
                                <Title level={3} className="text-center mb-4">{t('applyingToOurProgram')}</Title>
                                <Paragraph className="text-xl text-gray-700 mb-6 text-center">
                                    {t('applyingToOurProgramIntro')}
                                </Paragraph>

                                <Steps direction="vertical" className="mb-8 ">
                                    <Step
                                        status="process"
                                        title={<Title level={4}>{t('step1')}</Title>}
                                        description={
                                            <Paragraph  className="text-xl">
                                                {t('completeApplicationForm')}
                                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfslvtJO2i1Tfo2xFpebn_rQtX8GPVSpHGYKbAXj9a4s-YZ2Q/viewform"
                                                   target="_blank"
                                                   rel="noopener noreferrer" className="text-blue-600"> Google Form
                                                    Application</a>.
                                            </Paragraph>
                                        }
                                        icon={<FormOutlined className="link-text"/>}
                                    />
                                    <Step
                                        status="process"
                                        title={<Title level={4}>{t('prepareRequiredDocuments')}</Title>}
                                        description={
                                            <ul className="list-disc list-inside text-xl">
                                                <li><strong>
                                                    {t('prepareRequiredDocuments')}
                                                </strong>
                                                </li>
                                                <li><strong>{t('proofOfEnglishProficiency')}</strong>
                                                </li>
                                                <li><strong>{t('personalStatement')}</strong>
                                                </li>
                                                <li><strong>{t('identificationDocuments')}</strong>
                                                </li>
                                            </ul>
                                        }
                                        icon={<FileTextOutlined className="link-text"/>}
                                    />
                                    <Step
                                        status="process"
                                        title={<Title level={4}>{t('step3')}</Title>}
                                        description={
                                            <Paragraph  className="text-xl">
                                                {t('submitApplication')}
                                            </Paragraph>
                                        }
                                        icon={<CloudUploadOutlined className="link-text"/>}
                                    />
                                    <Step
                                        status="process"
                                        title={<Title level={4}>{t('step4')}</Title>}
                                        description={
                                            <>
                                                <Paragraph  className="text-xl">{t('ifIeltsScoreAbove5')}</Paragraph>
                                                <ul className="list-disc list-inside text-xl">
                                                    <li><strong>{t('interview')}</strong>
                                                    </li>
                                                </ul>
                                                <Paragraph  className="text-xl">{t('ifIeltsScoreBelow5')}</Paragraph>
                                                <ul className="list-disc list-inside text-xl">
                                                    <li><strong>{t('ktatTest')}</strong>
                                                    </li>
                                                    <li><strong>{t('englishTest')}</strong>
                                                    </li>
                                                    <li><strong>{t('mathTest')}</strong>
                                                    </li>
                                                    <li><strong>{t('logicTest')}</strong>
                                                    </li>
                                                    <li><strong>{t('speakingTest')}</strong>
                                                    </li>
                                                </ul>
                                            </>
                                        }
                                        icon={<CheckCircleOutlined className="link-text"/>}
                                    />
                                    <Step
                                        status="process"
                                        title={<Title level={4}>{t('step5')}</Title>}
                                        description={
                                            <Paragraph  className="text-xl">
                                                {t('admissionDecision')}
                                            </Paragraph>
                                        }
                                        icon={<CheckCircleOutlined className="link-text"/>}
                                    />
                                </Steps>

                                <Divider/>

                                <div className="my-6">
                                    <div
                                        className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow rounded-md text-[#333] font-[sans-serif]">
                                        <div>
                                            <h1 className="text-3xl font-extrabold">{t('contactUs')}</h1>
                                            <div className="mt-12">
                                                <h2 className="text-lg font-extrabold">{t('email')}</h2>
                                                <ul className="mt-3">
                                                    <li className="flex items-center">
                                                        <div className="bg-main p-3  rounded-md">
                                                            <MdOutlineAttachEmail className="text-3xl text-white"/>
                                                        </div>
                                                        <a target="blank" href="mailto:info@imctashkent.uz"
                                                           className="text-[#007bff] text-sm ml-3">
                                                            <strong>info@imctashkent.uz</strong>
                                                        </a>
                                                    </li>
                                                    <h2 className="text-lg font-extrabold mt-3">{t('phoneNumbers')}</h2>
                                                    <li className="flex mt-2 items-center">
                                                        <div className="bg-main p-3 rounded-md">
                                                            <PhoneOutlined className="text-3xl text-white"/>
                                                        </div>
                                                        <div className="flex flex-col ml-3 justify-center">
                                                            <p>+998943670440</p>
                                                            <p>+998943870440</p>
                                                            <p>+998943970440</p>
                                                        </div>
                                                    </li>
                                                    <h2 className="text-lg font-extrabold mt-3">{t('officeHours')}</h2>
                                                    <li className="flex mt-2 items-center">
                                                        <div className="bg-main p-3 rounded-md">
                                                            <RiHourglassLine className="text-3xl text-white"/>
                                                        </div>
                                                        <div className="flex flex-col ml-3 justify-center">
                                                            <p>{t('officeHoursTime')}</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                        <img src="/grafik_standorte_international_2023.gif"/>
                                    </div>
                                </div>
                                <Paragraph className="text-center text-xl">
                                    {t("We look forward to your application and wish you the best of luck with your KTAT preparation!")}
                                </Paragraph>
                            </div>
                        </Card>

                    </div>
                </motion.div>


                <Divider className="my-8"/>

                <div className="mt-8 text-center">
                    <Title level={4} className="mb-4">{t("KTAT Summary")}</Title>
                    <Paragraph className="mb-4 text-xl">
                        {t("Part of Test:")} {t("Description:")} {t("Number of Questions")}
                    </Paragraph>
                    <Paragraph className="mb-4 text-xl">
                        {t("Written Exam:")} {t("English Test:")} {t("30 questions")}, {t("Math Test:")} {t("10 questions")}, {t("Logic Test:")} {t("10 questions")} - {t("50 Questions Total")}
                    </Paragraph>
                    <Paragraph className="mb-4 text-xl">
                        {t("Speaking Test:")} {t("Introduction, Discussion Topics, Role Play")} - {t("Oral Assessment")}
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};

export default KTATPage;
