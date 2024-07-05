import { Typography, Divider, Card } from 'antd';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const { Title, Paragraph } = Typography;

const EntryRequirements = () => {

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
            <div className="max-w-5xl mx-auto">
                <div className="relative h-60 bg-cover bg-center rounded-lg overflow-hidden shadow-lg mb-8 profile-card-bg4">
                    <div className="absolute inset-0 bg-black opacity-30"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <h1 className="text-white text-4xl font-semibold">Entry Requirements</h1>
                    </div>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className="space-y-8">
                        <EntryRequirementCard
                            program="Foundation Program"
                            englishRequirement="IELTS 5.0 or Above: Speaking Test<br>Below IELTS 5.0: KTAT (English, Math, Logic, Speaking Test)"
                            additionalRequirements="Pass the KTAT or Speaking Test for admission"
                        />
                        <EntryRequirementCard
                            program="Second Year Program"
                            englishRequirement="IELTS 5.5 or Above"
                            additionalRequirements="Pass an interview with IMC University Program Directors"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const EntryRequirementCard = ({ program, englishRequirement, additionalRequirements }) => (
    <Card className="entry-card hover:shadow-md p-4 rounded-lg border border-gray-200">
        <Title level={4}>{program}</Title>
        <Paragraph>
            <span dangerouslySetInnerHTML={{ __html: englishRequirement }} />
        </Paragraph>
        <Paragraph>{additionalRequirements}</Paragraph>
    </Card>
);

export default EntryRequirements;
