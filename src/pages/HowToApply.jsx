import React from 'react';
import { Typography, Steps, Row, Col, Divider, Card } from 'antd';
import { FormOutlined, FileTextOutlined, CloudUploadOutlined, CheckCircleOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import {FaBriefcase} from "react-icons/fa";

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const HowToApply = () => {
    return (
        <div className="px-4 py-8 bg-gray-100">
            <div className="max-w-5xl mx-auto">
                <div className="relative h-60 bg-cover bg-center rounded-lg profile-card-bg4 overflow-hidden shadow-lg mb-8">
                    <div className="absolute inset-0 bg-black opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <h1 className="text-white text-4xl font-semibold">How to Apply</h1>
                    </div>
                </div>

                <Card className="shadow-lg rounded-lg">
                    <div className="p-8">
                        <Title level={3} className="text-center mb-4">Applying to Our Program</Title>
                        <Paragraph className="text-lg text-gray-700 mb-6 text-center">
                            Applying to our program is a simple and straightforward process. Follow the steps below to
                            start your academic journey with us:
                        </Paragraph>

                        <Steps direction="vertical" className="mb-8">
                            <Step
                                status="process"
                                title={<Title level={4}>Step 1: Complete the Application Form</Title>}
                                description={
                                    <Paragraph>
                                        To apply, you need to fill out our online application form. Please click the
                                        link below to access the form:
                                        <a href="https://docs.google.com/forms" target="_blank"
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
                                    <ul className="list-disc list-inside">
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
                                    <Paragraph>
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
                                        <Paragraph>If Your IELTS Score is 5.0 or Above:</Paragraph>
                                        <ul className="list-disc list-inside">
                                            <li><strong>Interview:</strong> You will be invited to an interview as part
                                                of the admissions process. This interview assesses your motivation,
                                                academic goals, and suitability for the program.
                                            </li>
                                        </ul>
                                        <Paragraph>If Your IELTS Score is Below 5.0:</Paragraph>
                                        <ul className="list-disc list-inside">
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
                                    <Paragraph>
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



                        <div className="text-center my-5">
                            <Title level={4}>Contact Us</Title>
                            <Row justify="center" gutter={[16, 16]} className="mb-4">
                                <Col xs={24} sm={12} md={8}>
                                    <Card className="hover:shadow-lg p-6 rounded-lg border border-gray-300">
                                        <div className="bg-main p-3 max-w-min mx-auto rounded-md">
                                            <PhoneOutlined className="text-3xl text-white"/>
                                        </div>
                                        <Paragraph className="my-1 text-xl"><strong>Phone:</strong></Paragraph>
                                        <Paragraph>+998943670440</Paragraph>
                                        <Paragraph>+998943870440</Paragraph>
                                        <Paragraph>+998943970440</Paragraph>
                                        <Paragraph className="mt-4"><strong></strong></Paragraph>
                                        <Paragraph></Paragraph>
                                    </Card>
                                </Col>
                                <Col xs={24} sm={12} md={8}>
                                    <Card className="hover:shadow-lg p-6 rounded-lg border border-gray-300">
                                        <div className="bg-main p-3 max-w-min mx-auto rounded-md">
                                            <MailOutlined className="text-3xl text-white"/>
                                        </div>
                                        <Paragraph className="my-1 text-xl"><strong>Email:</strong></Paragraph>
                                        <Paragraph><a href="mailto:info@imctashkent.uz"
                                                      className="text-blue-600">info@imctashkent.uz</a></Paragraph>
                                    </Card>
                                </Col>

                                <Col xs={24} sm={12} md={8}>
                                    <Card className="hover:shadow-lg p-6 rounded-lg border border-gray-300">
                                        <MailOutlined className="text-3xl text-blue-600 mb-2"/>
                                        <Paragraph className="mb-1"><strong>Office Hours:</strong></Paragraph>
                                        <Paragraph>Monday to Friday, 9 AM to 5 PM</Paragraph>
                                    </Card>
                                </Col>
                            </Row>
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
                                    <td className="px-4 py-2 border">Submit the form and documents through the Google Form link</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>English Proficiency Assessment and Admission Test</strong></td>
                                    <td className="px-4 py-2 border">IELTS 5.0 or Above: Interview<br />Below IELTS 5.0: KTAT (English, Math, Logic, Speaking Test)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Admission Decision</strong></td>
                                    <td className="px-4 py-2 border">Receive notification and enrollment instructions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Apply for Scholarships</strong></td>
                                    <td className="px-4 py-2 border">Indicate interest in scholarships on the application form</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border"><strong>Contact Us</strong></td>
                                    <td className="px-4 py-2 border">info@imctashkent.uz, +998943670440, +998943870440, +998943970440</td>
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
