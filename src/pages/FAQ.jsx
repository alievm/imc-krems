import { useEffect, useRef, useState  } from 'react';
import { Card, Col, Row, Typography, Divider } from 'antd';
import { PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
const { Title, Paragraph } = Typography;

const faqData = [
    {
        question: "Universitet xususiymi?",
        answer: "Yo'q, Davlat universiteti"
    },
    {
        question: "Bitirganidan so'ng diplom o'tadimi?",
        answer: "Bizning bitiruvchilarga taqdim etiladigan TDIU diplomi respublika miqyosida TOP 10 ga kiradi"
    },
    {
        question: "Grant o'rinlari mavjudmi?",
        answer: "2023-2024 o'quv yili uchun Grant o'rinlari ajratilgan"
    },
    {
        question: "Imtihondan o'ta olmasam nima qilsam bo'ladi?",
        answer: "Universitetda 4 oylik pre-foundation kursini tamomlab 1-kursga suhbat asosida kirsangiz bo'ladi."
    },
    {
        question: "Chet-elda o'qish imkoniyati bormi?",
        answer: "Ha, 'Student exchange programme' dasturi orqali siz 2-kursdan so'ng 1 semestrga Avstriya, Germaniya va boshqa davlatlarga borsangiz bo'ladi"
    },
    {
        question: "Work&Travel dasturida qatnashsa bo'ladimi?",
        answer: "Ha, bo'ladi"
    },
    {
        question: "Kantrakt summasi necha pul?",
        answer: "1-kurs uchun 16.800.000 uzs"
    },
    {
        question: "2-kursdan nega kantrakt oshadi?",
        answer: "2-kursdan o'qituvchi va professorlarning 40-60% chet-ellik bo'lganligi sabablik kantrakt summasi 2.300 usd"
    },
    {
        question: "Bitirganimizdan so'ng 2 ta diplom beriladimi?",
        answer: "Ha, TDIU diplomi va Avstriyaning Imc Krems diplomi beriladi"
    },
    {
        question: "Kantrakt qimmatligi sabablik 'Ta'lim krediti' olsak bo'ladimi?",
        answer: "Ha, Davlat tomonidan ajratilgan mahsus imtiyozlik 'Ta'lim krediti' olsangiz bo'ladi"
    },
    {
        question: "Kantrkatni o'qish boshida 100% to'lash shartmi?",
        answer: "Yo'q, Kantrakt summasini 4 ga bo'lib to'lash imkoniyati mavjud"
    },
    {
        question: "Qanday yo'nalishlar bor?",
        answer: "Hozirgi kunda 2 ta asosiy yo'nalish uchun qabul ketmoqda: International business management, Tourism & leisure management"
    },
    {
        question: "Hujjat topshirib imtihonda qatnashish pullikmi?",
        answer: "Bepul"
    },
    {
        question: "Qanday qilib hujjat topshirsam bo'ladi?",
        answer: "Online ilova orqali: <a href='https://docs.google.com/forms/d/e/1FAIpQLSdq2l3RB8WcXfPe9Te3o10pscJ2qfg8cm4GK-gQ-TmuQtbH-Q/viewform?usp=sf_link' target='_blank'>Google Form Application</a>"
    },
    {
        question: "Men hali ID olmaganman, yashil biometrik passport bilan topshirsam bo'ladimi?",
        answer: "Ha, bo'ladi"
    },
    {
        question: "Universitet o'qituvchilari yaxshimi?",
        answer: "Bizda PhD hamda ESL/ESP/EFL o'qituvchilar dars berishadi"
    },
    {
        question: "Kirish Imtihoni nimalardan bo'ladi?",
        answer: "Ingliz tili va IQ (mantiq) test"
    },
    {
        question: "Bitiruvchilar bormi?",
        answer: "Ha, 2022-yil 8-iyul kuni qo'shma ta'lim dasturining ilk qaldirg'ochlari bitirdi: <a href='https://www.instagram.com/p/Cf9FtVuLk_B/' target='_blank'>Instagram Post</a>"
    },
    {
        question: "Hozirgi kunda nechta talaba mavjud shu qo'shma ta'lim dasturida?",
        answer: "Hozirgi kunda 500 dan ortiq talaba va tinglovchilarimiz mavjud"
    },
    {
        question: "Nega 1000 yoki 2000 ta emas balki 100-200 ta qabul qilasizlar?",
        answer: "Bizda songa emas sifatga ahamiyat beriladi, bizni bitiruvchilar eng kamida Ingliz, Nemis o'rganib chiqishadi"
    },
    {
        question: "Hali attestat olmaganman, topshirsam bo'ladi?",
        answer: "Ha, bo'ladi"
    },
    {
        question: "Bu universitet ochilganiga necha yil bo'ldi?",
        answer: "TDIU 1931-yil, IMC Krems 1994-yil, Qo'shma ta'lim dasturi esa 2018-yil"
    },
    {
        question: "O'qish necha yillik?",
        answer: "4 yillik"
    },
    {
        question: "1-kursdan so'ng qayerga perevod qilsa bo'ladi?",
        answer: "1-kursdan so'ng foundation sertifikat beriladi va ushbu sertifikat bilan Xalqaro universitetlarga topshirib 2-kursdan o'qishni davom ettirsangiz bo'ladi"
    },
    {
        question: "Qayerda joylashgansizlar?",
        answer: "Toshkent shahar, Chilonzor tumani, Islom Karimov ko'chasi 49, mo'ljal Hilton mehmonxonasi"
    },
    {
        question: "IELTS sertifikati shartmi kirish uchun?",
        answer: "Yo'q shart emas, agarda IELTS mavjud bo'lmasa unda 1-kursga kirish uchun ichki imtihondan o'tasiz."
    },
    {
        question: "Telefon raqamilar bormi?",
        answer: "+998903939099, +998909691011, +998909990989, +998900169099"
    },
    {
        question: "Ijtimoiy tarmoqlarilar bormi?",
        answer: {
            Twitter: "https://twitter.com/imckremsuz",
            LinkedIn: "https://www.linkedin.com/company/84320156",
            Facebook: "https://www.facebook.com/imckremsuz/",
            Instagram: "https://www.instagram.com/imckremsuz/",
            YouTube: "https://www.youtube.com/channel/UCRuz1hIVK1wM5jSYEUi1eUg"
        }
    }
];

const FAQ = () => {
    const [animateItems, setAnimateItems] = useState([]);

    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const elements = containerRef.current.querySelectorAll('.faq-card');
            const animateItemsArray = [];
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
                if (isVisible && !animateItemsArray.includes(element)) {
                    animateItemsArray.push(element);
                }
            });
            setAnimateItems(animateItemsArray);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="px-4 py-8 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="relative h-60 bg-cover bg-center rounded-lg overflow-hidden shadow-lg mb-8"
                     style={{backgroundImage: "url('/teaser-ankommen-und-vernetzen (1).jpg')"}}>
                    <div className="absolute inset-0 bg-black opacity-50"/>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <h1 className="text-white text-4xl font-semibold">Frequently Asked Questions</h1>
                    </div>
                </div>

                <div className="space-y-4" ref={containerRef}>
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="faq-card hover:shadow-md p-4 rounded-lg border border-gray-200"
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <Title level={4}>{item.question}</Title>
                            {typeof item.answer === 'string' ? (
                                <Paragraph>{item.answer}</Paragraph>
                            ) : (
                                <ul className="list-disc pl-6">
                                    {Object.entries(item.answer).map(([platform, link]) => (
                                        <li key={platform}>
                                            <a href={link} target="_blank" rel="noopener noreferrer">{platform}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FAQ;
