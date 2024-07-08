import React from 'react';
import { Typography, Steps, Row, Col, Divider, Card } from 'antd';
import { FormOutlined, FileTextOutlined, CloudUploadOutlined, CheckCircleOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import {FaBriefcase} from "react-icons/fa";
import {RiHourglassLine} from "react-icons/ri";
import {MdOutlineAttachEmail} from "react-icons/md";
import video from "/public/grafik_standorte_international_2023.mp4"

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const HowToApply = () => {
    return (
        <div className="px-4 py-8 bg-gray-100">
            <div className="max-w-full mx-auto">
                <div
                    className="relative h-60 bg-cover bg-center rounded-lg profile-card-bg5 overflow-hidden shadow-lg mb-8">
                    <div className="absolute inset-0 bg-black opacity-50"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <h1 className="text-white text-4xl font-semibold">How to Apply</h1>
                    </div>
                </div>

                <Card className="shadow-lg rounded-lg">
                    <div className="p-8">
                        <Title level={3} className="text-center mb-4">Applying to Our Program</Title>
                        <Paragraph className="text-xl text-gray-700 mb-6 text-center">
                            Applying to our program is a simple and straightforward process. Follow the steps below to
                            start your academic journey with us:
                        </Paragraph>

                        <Steps direction="vertical" className="mb-8 ">
                            <Step
                                status="process"
                                title={<Title level={4}>Step 1: Complete the Application Form</Title>}
                                description={
                                    <Paragraph  className="text-xl">
                                        To apply, you need to fill out our online application form. Please click the
                                        link below to access the form:
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
                                title={<Title level={4}>Step 2: Prepare Required Documents</Title>}
                                description={
                                    <ul className="list-disc list-inside text-xl">
                                        <li><strong>Academic Transcripts:</strong> Copies of your academic records from
                                            your previous school or university.
                                        </li>
                                        <li><strong>Proof of English Proficiency:</strong> If applicable, provide scores
                                            from standardized tests such as TOEFL, IELTS, etc.
                                        </li>
                                        <li><strong>Personal Statement:</strong> A brief essay outlining your academic
                                            goals, career aspirations, and reasons for choosing our program.
                                        </li>
                                        <li><strong>Identification Documents:</strong> A copy of your passport or
                                            national ID.
                                        </li>
                                    </ul>
                                }
                                icon={<FileTextOutlined className="link-text"/>}
                            />
                            <Step
                                status="process"
                                title={<Title level={4}>Step 3: Submit the Application</Title>}
                                description={
                                    <Paragraph  className="text-xl">
                                        Once you have completed the application form and prepared the necessary
                                        documents, submit your application through the Google Form link. Ensure that all
                                        information provided is accurate and complete.
                                    </Paragraph>
                                }
                                icon={<CloudUploadOutlined className="link-text"/>}
                            />
                            <Step
                                status="process"
                                title={<Title level={4}>Step 4: English Proficiency Assessment and Admission
                                    Test</Title>}
                                description={
                                    <>
                                        <Paragraph  className="text-xl">If Your IELTS Score is 5.0 or Above:</Paragraph>
                                        <ul className="list-disc list-inside text-xl">
                                            <li><strong>Interview:</strong> You will be invited to an interview as part
                                                of the admissions process. This interview assesses your motivation,
                                                academic goals, and suitability for the program.
                                            </li>
                                        </ul>
                                        <Paragraph  className="text-xl">If Your IELTS Score is Below 5.0:</Paragraph>
                                        <ul className="list-disc list-inside text-xl">
                                            <li><strong>Krems Tashkent Admission Test (KTAT):</strong> You will be
                                                required to pass our admission test, which consists of:
                                            </li>
                                            <li><strong>English Test:</strong> 30 questions assessing your English
                                                language skills.
                                            </li>
                                            <li><strong>Math Test:</strong> 10 questions evaluating your mathematical
                                                reasoning.
                                            </li>
                                            <li><strong>Logic Test:</strong> 10 questions testing your logical thinking
                                                abilities.
                                            </li>
                                            <li><strong>Speaking Test:</strong> An oral test to evaluate your English
                                                speaking skills.
                                            </li>
                                        </ul>
                                    </>
                                }
                                icon={<CheckCircleOutlined className="link-text"/>}
                            />
                            <Step
                                status="process"
                                title={<Title level={4}>Step 5: Admission Decision</Title>}
                                description={
                                    <Paragraph  className="text-xl">
                                        Following the interview or the KTAT, you will receive a notification about the
                                        status of your application. If you are accepted, the notification will include
                                        detailed instructions on the next steps, including enrollment procedures and
                                        deadlines.
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
                                    <h1 className="text-3xl font-extrabold">Contact Us</h1>
                                    <div className="mt-12">
                                        <h2 className="text-lg font-extrabold">Email</h2>
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
                                            <h2 className="text-lg font-extrabold mt-3">Phone numbers</h2>
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
                                            <h2 className="text-lg font-extrabold mt-3">Office hours</h2>
                                            <li className="flex mt-2 items-center">
                                                <div className="bg-main p-3 rounded-md">
                                                    <RiHourglassLine className="text-3xl text-white"/>
                                                </div>
                                                <div className="flex flex-col ml-3 justify-center">
                                                    <p>Monday to Friday, 9 AM to 5 PM</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <img src="/grafik_standorte_international_2023.gif"/>
                            </div>
                        </div>

                    </div>
                </Card>



                <Card className="shadow-lg rounded-lg mt-8">
                    <div className="p-8">
                        <Title level={4} className="text-center mb-4">Additional Information</Title>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full text-left border-collapse">
                                <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 border">Step</th>
                                    <th className="px-4 py-2 border">Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Complete the Application Form</strong></td>
                                    <td className="px-4 py-2 border"><a href="https://docs.google.com/forms"
                                                                        target="_blank" rel="noopener noreferrer"
                                                                        className="text-blue-600">Google Form
                                        Application</a></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Prepare Required Documents</strong></td>
                                    <td className="px-4 py-2 border">Academic Transcripts, Proof of English Proficiency,
                                        Personal Statement, Identification Documents
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Submit the Application</strong></td>
                                    <td className="px-4 py-2 border">Submit the form and documents through the Google
                                        Form link
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>English Proficiency Assessment and
                                        Admission Test</strong></td>
                                    <td className="px-4 py-2 border">IELTS 5.0 or Above: Interview<br/>Below IELTS 5.0:
                                        KTAT (English, Math, Logic, Speaking Test)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Admission Decision</strong></td>
                                    <td className="px-4 py-2 border">Receive notification and enrollment instructions
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Apply for Scholarships</strong></td>
                                    <td className="px-4 py-2 border">Indicate interest in scholarships on the
                                        application form
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Contact Us</strong></td>
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
