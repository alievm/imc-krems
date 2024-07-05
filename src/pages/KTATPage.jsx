import { Typography, Divider, Card } from 'antd';
import { motion } from 'framer-motion';
const { Title, Paragraph } = Typography;

const KTATPage = () => {
    return (
        <div className="px-4 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="relative h-60 bg-cover bg-center rounded-lg profile-card-bg3 overflow-hidden shadow-lg mb-8">
                    <div className="absolute inset-0 bg-black opacity-30"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <h1 className="text-white text-4xl font-semibold">About KTAT</h1>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <Paragraph className="mb-8">
                        The Krems Tashkent Admission Test (KTAT) is a comprehensive assessment designed to evaluate your readiness for the academic programs at our faculty. The test ensures that all students meet the required standards in key academic areas and possess the necessary skills for success in their studies.
                    </Paragraph>

                    <Title level={2}>Overview of KTAT</Title>
                    <Paragraph className="mb-8">
                        The KTAT consists of two main parts: a written exam and a speaking test. Each component is designed to assess different aspects of your academic abilities and language proficiency.
                    </Paragraph>

                    <Divider />

                    <Title level={3}>Part 1: Written Exam</Title>
                    <Paragraph className="mb-8">
                        The written exam evaluates your skills in three key areas: English, Math, and Logic.
                    </Paragraph>

                    <Card className="mb-8">
                        <Title level={4}>1. English Test (30 Questions)</Title>
                        <Paragraph>
                            <b>Purpose:</b> To assess your English language proficiency, including grammar, vocabulary, reading comprehension, and writing skills.
                        </Paragraph>
                        <Paragraph>
                            <b>Format:</b> Multiple-choice questions covering various aspects of English language use.
                        </Paragraph>
                        <Paragraph>
                            Sample Questions:
                            <ul>
                                <li>Choose the correct word to complete the sentence: "She _____ to the store every Saturday."</li>
                                <li>Read the passage and answer the question: "The sun rises in the east and sets in the west. This statement is true for most places on Earth. What does this passage mainly describe?"</li>
                            </ul>
                        </Paragraph>
                    </Card>

                    {/* Include similar Cards for Math Test and Logic Test */}

                    <Divider />

                    <Title level={3}>Part 2: Speaking Test</Title>
                    <Paragraph className="mb-8">
                        The speaking test evaluates your ability to communicate effectively in English.
                    </Paragraph>

                    <Card className="mb-8">
                        <Paragraph>
                            <b>Components of the Speaking Test:</b>
                            <ol>
                                <li>Introduction: You will introduce yourself and discuss your background, interests, and goals.</li>
                                <li>Discussion Topics: You will be asked to discuss specific topics related to your academic interests or current events.</li>
                                <li>Role Play: You might engage in a role-play exercise where you respond to hypothetical scenarios or solve problems.</li>
                            </ol>
                        </Paragraph>
                        <Paragraph>
                            Sample Speaking Test Topics:
                            <ul>
                                <li>Describe a challenge you have faced and how you overcame it.</li>
                                <li>Discuss a recent news event and share your opinion on it.</li>
                                <li>Explain your reasons for choosing [University Name] and what you hope to achieve here.</li>
                            </ul>
                        </Paragraph>
                    </Card>

                    <Divider />

                    <Title level={2}>Preparing for KTAT</Title>
                    <Paragraph className="mb-8">
                        To prepare for the KTAT, consider the following tips:
                    </Paragraph>
                    <ul className="mb-8">
                        <li>Review Basic Concepts: Brush up on English grammar and vocabulary, basic math principles, and logical reasoning strategies.</li>
                        <li>Practice Sample Questions: Work on sample questions for English, Math, and Logic to familiarize yourself with the test format.</li>
                        <li>Improve Speaking Skills: Practice speaking English with friends, family, or through language exchange programs.</li>
                    </ul>

                    <Title level={2}>Admission Test Schedule</Title>
                    <Paragraph className="mb-8">
                        The KTAT is held on specific dates throughout the year. Please check our website or contact the admissions office for the upcoming test dates and registration deadlines.
                    </Paragraph>

                    <Divider />

                    <Title level={2}>Contact Us</Title>
                    <Paragraph className="mb-8">
                        For more information about the Krems Tashkent Admission Test (KTAT) or to register for the test, please contact our admissions office:
                    </Paragraph>
                    <ul className="mb-8">
                        <li>Email: info@imctashkent.uz</li>
                        <li>Phone: +998943670440, +998943870440, +998943970440</li>
                        <li>Office Hours: Monday to Friday, 9 AM to 5 PM</li>
                    </ul>
                    <Paragraph>
                        We look forward to your application and wish you the best of luck with your KTAT preparation!
                    </Paragraph>
                </motion.div>

                <Divider className="my-8"/>

                <div className="mt-8 text-center">
                    <Title level={4} className="mb-4">KTAT Summary</Title>
                    <Paragraph className="mb-4">
                        Part of Test: Description: Number of Questions
                    </Paragraph>
                    <Paragraph className="mb-4">
                        Written Exam: English Test: 30 questions, Math Test: 10 questions, Logic Test: 10 questions - 50 Questions Total
                    </Paragraph>
                    <Paragraph className="mb-4">
                        Speaking Test: Introduction, Discussion Topics, Role Play - Oral Assessment
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};

export default KTATPage;
