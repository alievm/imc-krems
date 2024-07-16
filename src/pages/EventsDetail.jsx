import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {motion} from "framer-motion";
import PageIntro from "../components/PageIntro.jsx";
import {getNewsById} from "../service/newsService.js";
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import {Spin} from "antd";
import { BsTelegram } from 'react-icons/bs';
import SocialMediaWhite from '../components/SocialMediaWhite.jsx';
import SideNewsPanel from '../components/SideNewsPanel.jsx';
import SideEventsPanel from '../components/SideEventsPanel.jsx';

const EventsDetail = () => {
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
                className="min-h-screen flex relative  px-4 sm:px-6 lg:px-8 flex gap-x-20"
            >
                <div className=" bg-white max-w-4xl p-6">
                <div className='flex w-full flex-wrap items-center justify-between'>
                <h1 className='news-detail-h1'>{news.title}</h1>
                <h2 className="text-xl my-2 lg:text-base font-semibold text-gray-800">{formatDate(news.created_at)}</h2>
                </div>
                <div className=" rounded overflow-hidden shadow-lg  relative">
            <img
                className="w-full object-cover max-h-[400px] object-top rounded"
                src={news.path}
                alt={news.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-2 right-2">
             <div className='lg:px-4 lg:py-2 p-0 bg-white/10 rounded-full'>
             <SocialMediaWhite/>
             </div>
            </div>
        </div>

                    <section className="my-8">
                        {/* <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Description</h2> */}
                        <p className="text-gray-700 text-lg leading-relaxed">
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

                <SideEventsPanel/>
            </motion.div>
        </>
    );
};

export default EventsDetail;
