import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {motion} from "framer-motion";
import PageIntro from "../components/PageIntro.jsx";
import {getNewsById} from "../service/newsService.js";
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import {Spin} from "antd";

const NewsDetail = () => {
    const { id } = useParams(); // Get the id parameter from URL path
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNewsById(id); // Fetch news data by id
                setNews(response.data); // Update state with fetched news item
            } catch (error) {
                console.error('Error fetching news detail:', error);
            }
        };

        fetchNews();
    }, [id]);

    const formatDate = (createdAt) => {
        const formattedDate = format(new Date(createdAt), 'MMMM d, yyyy', { locale: enUS });
        return formattedDate;
    };

    if (!news) {
        return <Spin  />; // Placeholder for when news data is loading
    }

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="min-h-screen relative py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
            >
                <div
                    className="absolute h-full w-full z-[-999] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-7xl bg-white p-6 rounded-lg shadow-xl">
                    <div className="flex lg:flex-nowrap relative items-center flex-wrap">

                        <div
                            className="absolute z-[0] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

                        <PageIntro eyebrow={formatDate(news.created_at)} title={news.title}>
                        </PageIntro>
                        <img className="w-96 h-auto z-[10]" src={news.path}/>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Description</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The skills profile for graduates of the bachelor program “Export-Oriented Management” is
                            equivalent to level 1 of the EHEA qualifications framework (2018) and the knowledge and
                            skills
                            profile for level 6 of the EQF-LLL (2008), covering knowledge and understanding, applying
                            knowledge and understanding, integrating both of these areas to solve problems in new
                            contexts
                            or in the absence of full information, reflecting on personal actions from a social and
                            ethical
                            perspective, communication skills and self-directed learning. The profile also maps onto
                            Bloom’s
                            taxonomy of cognitive learning objectives. The qualifications to be achieved in the degree
                            program and the skills profile for graduates are described below in the program profile
                            prepared
                            in accordance with the ECTS Users’ Guide 2015.
                        </p>
                    </section>

                </div>
            </motion.div>
        </>
    );
};

export default NewsDetail;
