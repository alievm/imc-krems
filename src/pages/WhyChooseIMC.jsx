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
import {useTranslation} from "react-i18next";

const { Title, Paragraph } = Typography;

const WhyChooseIMC = () => {
    const {t} = useTranslation();
    return (
        <div className="mx-5">
            <div className="relative mt-8 h-72 w-full overflow-hidden  profile-card-bg6 bg-cover bg-center">
                <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <h1 className="text-5xl font-semibold text-white">{t('whyChooseIMCPrograms')}</h1>
                </div>
            </div>

            <div className=" mx-auto p-10">
                <div className="text-center my-5">
                    <Paragraph className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                        {t('whyChooseIMCProgramsIntro')}
                    </Paragraph>

                    <div className="bg-main py-12">
                        <div className="max-w-3xl mx-auto px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center text-white mb-8">{t('whyChooseOurFaculty')}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('affiliationWithIMC')}</h3>
                                        <p className="text-base text-gray-700 leading-7">
                                            {t('affiliationWithIMCIntro')}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('internationalFaculty')}</h3>
                                        <p className="text-base text-gray-700 leading-7">
                                            {t('internationalFacultyIntro')}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="bg-white col-span-1 lg:col-span-2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('expertFacultyMembers')}</h3>
                                        <p className="text-base text-gray-700 leading-7">
                                            {t('expertFacultyMembersIntro')}
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
                                <Title level={4}>{t('scholarships')}</Title>
                                <Divider/>
                                <Paragraph>
                                    {t('scholarshipsIntro')}
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>{t('fullScholarship')}</li>
                                    <li>{t('halfScholarship')}
                                    </li>
                                    <li>{t('partialScholarship')}
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
                                <Title level={4}>{t('doubleDegreeDiploma')}</Title>
                                <Divider/>
                                <Paragraph>
                                    {t('doubleDegreeDiplomaIntro')}
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>{t('tsueLeadingUniversity')}
                                    </li>
                                    <li>{t('imcEuropeanAccreditation')}
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
                                <Title level={4}>{t('innovativeCurriculum')}</Title>
                                <Divider/>
                                <Paragraph>
                                    {t('innovativeCurriculumIntro')}
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>{t('relevantCourses')}</li>
                                    <li>{t('handsOnLearning')}</li>
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
                                <Title level={4}>{t('strongIndustryConnections2')}</Title>
                                <Divider/>
                                <Paragraph>
                                    {t('strongIndustryConnectionsIntro')}
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>{t('internshipOpportunities')}</li>
                                    <li>{t('careerPlacement')}</li>
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
                                <Title level={4}>{t('stateOfTheArtFacilities')}</Title>
                                <Divider/>
                                <Paragraph>
                                    {t('stateOfTheArtFacilitiesIntro')}
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>{t('advancedLaboratories')}</li>
                                    <li>{t('modernClassrooms')}</li>
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
                                <Title level={4}>{t('comprehensiveSupportServices')}</Title>
                                <Divider/>
                                <Paragraph>
                                    {t('comprehensiveSupportServicesIntro')}
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>{t('academicAdvising')}</li>
                                    <li>{t('careerServices')}</li>
                                    <li>{t('counselingAndWellBeing')}</li>
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
                                <Title level={4}>{t('exchangeProgram2')}</Title>
                                <Divider/>
                                <Paragraph>
                                    {t('exchangeProgramIntro2')}
                                </Paragraph>
                                <ul className="list-disc list-inside">
                                    <li>{t('studyAbroadOpportunities')}</li>
                                    <li>{t('culturalIntegration')}</li>
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
