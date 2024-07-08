import React from 'react';
import { Card, Typography, Row, Col, Divider } from 'antd';
import {
    TrophyOutlined,
    BookOutlined,
    LaptopOutlined,
    ShopOutlined,
    SafetyOutlined,
    GlobalOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const WhyChooseIMC = () => {
    return (
        <div className="mx-5">
            <div className="relative mt-8 h-72 w-full overflow-hidden  profile-card-bg6 bg-cover bg-center">
                <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <h1 className="text-5xl font-semibold text-white">Why Choose IMC Programs</h1>
                </div>
            </div>

            <div className=" mx-auto p-10">
                <div className="text-center my-5">
                    <Paragraph className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                        Selecting the right faculty is a crucial decision that can shape your academic journey and
                        future career. Here at TSUE, our faculty stands out for several compelling reasons that make
                        it the ideal choice for ambitious and talented students.
                    </Paragraph>

                    <div className="bg-main py-12">
                        <div className="max-w-3xl mx-auto px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center text-white mb-8">Why Choose Our
                                Faculty?</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Affiliation with
                                            IMC University of Applied Sciences</h3>
                                        <p className="text-base text-gray-700 leading-7">
                                            We are academically affiliated with IMC University of Applied Sciences,
                                            ensuring rigorous standards in our curriculum, faculty, and academic
                                            practices.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">International
                                            Faculty</h3>
                                        <p className="text-base text-gray-700 leading-7">
                                            Over 50% of our professors are international, bringing diverse
                                            perspectives and global expertise to the classroom.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white col-span-1 lg:col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Faculty
                                            Members</h3>
                                        <p className="text-base text-gray-700 leading-7">
                                            Our faculty includes experienced professors with advanced degrees and
                                            significant industry experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full shadow-lg">
                            <div className="text-center py-4">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <TrophyOutlined className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Title level={4}>Scholarships</Title>
                                <Divider/>
                                <Paragraph>
                                    We offer competitive scholarships to recognize and reward academic excellence.
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>100% Scholarship: Full tuition fee waiver for top-performing students.</li>
                                    <li>50% Scholarship: 50% tuition fee waiver for students with the second highest
                                        GPA.
                                    </li>
                                    <li>30% Scholarship: 30% tuition fee waiver for students with the third highest
                                        GPA.
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full shadow-lg">
                            <div className="text-center py-4">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <BookOutlined className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Title level={4}>Double Degree Diploma</Title>
                                <Divider/>
                                <Paragraph>
                                    Earn degrees from both TSUE and IMC University, enhancing your job market prospects.
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>TSUE: Leading university in Uzbekistan for economics and business education.
                                    </li>
                                    <li>IMC University: European accreditation ensures global recognition of our
                                        degrees.
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full shadow-lg">
                            <div className="text-center py-4">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <LaptopOutlined className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Title level={4}>Innovative Curriculum</Title>
                                <Divider/>
                                <Paragraph>
                                    Our curriculum is designed to equip students with relevant and up-to-date skills.
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>Relevant and Up-to-Date Courses</li>
                                    <li>Hands-On Learning Experiences</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full shadow-lg">
                            <div className="text-center py-4">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <ShopOutlined className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Title level={4}>Strong Industry Connections</Title>
                                <Divider/>
                                <Paragraph>
                                    Benefit from extensive internship opportunities and career placements.
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>Internship Opportunities</li>
                                    <li>Career Placement</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full shadow-lg">
                            <div className="text-center py-4">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <SafetyOutlined className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Title level={4}>State-of-the-Art Facilities</Title>
                                <Divider/>
                                <Paragraph>
                                    Enjoy modern facilities that support learning, research, and innovation.
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>Advanced Laboratories</li>
                                    <li>Modern Classrooms</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full shadow-lg">
                            <div className="text-center py-4">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <UserOutlined className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Title level={4}>Comprehensive Support Services</Title>
                                <Divider/>
                                <Paragraph>
                                    We provide personalized academic advising, career services, and counseling.
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>Academic Advising</li>
                                    <li>Career Services</li>
                                    <li>Counseling and Well-being</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>

                    <Col xs={24} sm={12} md={8}>
                        <Card className="h-full shadow-lg">
                            <div className="text-center py-4">
                                <div className="bg-main max-w-min mx-auto mb-4 p-3 rounded-md">
                                    <GlobalOutlined className="text-4xl text-white  mx-auto"/>
                                </div>
                                <Title level={4}>Exchange Program</Title>
                                <Divider/>
                                <Paragraph>
                                    Gain international experience through our exchange program.
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>Study Abroad Opportunities</li>
                                    <li>Cultural Integration</li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default WhyChooseIMC;
