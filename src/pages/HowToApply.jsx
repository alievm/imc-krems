import React from 'react';
import { Typography, Steps, Row, Col, Divider, Card } from 'antd';
import { FormOutlined, FileTextOutlined, CloudUploadOutlined, CheckCircleOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import {FaBriefcase} from "react-icons/fa";
import {RiHourglassLine} from "react-icons/ri";
import {MdOutlineAttachEmail} from "react-icons/md";
import {useTranslation} from "react-i18next";
import gif from "../assets/grafik_standorte_international_2023.gif"
const { Title, Paragraph } = Typography;
const { Step } = Steps;

const HowToApply = () => {
    const {t} = useTranslation();
    return (
        <div className="px-4  py-8 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div
                    className="relative h-60 bg-cover bg-center rounded-lg profile-card-bg5 overflow-hidden shadow-lg mb-8">
                    <div className="absolute inset-0 bg-black opacity-50"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <h1 className="text-white text-4xl font-semibold">{t('howToApply')}</h1>
                    </div>
                </div>

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


                                <img src={gif}/>
                            </div>
                        </div>

                    </div>
                </Card>



                <Card className="shadow-lg rounded-lg mt-8">
                    <div className="p-8">
                        <Title level={4} className="text-center mb-4">{t('additionalInformation')}</Title>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full text-left border-collapse">
                                <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 border">{t('step')}</th>
                                    <th className="px-4 py-2 border">{t('details')}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>{t('completeApplicationFormDetails')}</strong></td>
                                    <td className="px-4 py-2 border"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfslvtJO2i1Tfo2xFpebn_rQtX8GPVSpHGYKbAXj9a4s-YZ2Q/viewform"
                                                                        target="_blank" rel="noopener noreferrer"
                                                                        className="text-blue-600">Google Form
                                        Application</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>{t('prepareRequiredDocuments2')}</strong></td>
                                    <td className="px-4 py-2 border">{t('prepareRequiredDocumentsDetails')}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>{t('submitApplication2')}</strong></td>
                                    <td className="px-4 py-2 border">{t('submitApplicationDetails')}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>{t('englishProficiencyAssessment')}</strong></td>
                                    <td className="px-4 py-2 border">{t('englishProficiencyAssessment')}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>{t('admissionDecision2')}</strong></td>
                                    <td className="px-4 py-2 border">{t('admissionDecisionDetails')}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>{t('applyForScholarships')}</strong></td>
                                    <td className="px-4 py-2 border">{t('applyForScholarshipsDetails')}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>{t('contactUs')}</strong></td>
                                    <td className="px-4 py-2 border">info@imctashkent.uz, +998943670440, +998943870440,
                                        +998943970440
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default HowToApply;
