import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNews } from '../service/newsService';

const SideNewsPanel = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNewsList = async () => {
            try {
                const newsData = await getNews(); 
                setNewsList(newsData.data); 
            } catch (error) {
                console.error('Error fetching news list:', error);
            }
        };

        fetchNewsList();
    }, []);

    return (
        <div className="hidden lg:block lg:w-1/4 lg:flex py-10 lg:flex-col lg:space-y-4 lg:sticky ">
             <div class="tg-bg">
                <h5 className='font-semibold'>
        Follow the official Telegram channel of the faculty </h5> <a href="https://t.me/imckremsuz"><button class="mt-2">Follow</button></a></div>
        <h3 className="text-xl font-semibold mb-4">Latest News</h3>
        <div className="space-y-4">
            {newsList.map((news) => (
                <Link key={news.id} to={`/news/${news.id}`} className="block hover:text-primary transition-colors duration-200 ease-in-out">
                    <div className="flex items-center space-x-2">
                        <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden">
                            <img className="object-cover w-full h-full" src={news.path} alt={news.title} />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-semibold">{news.title}</div>
                            <div className="text-xs text-gray-500">{new Date(news.created_at).toLocaleDateString()}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    );
};

export default SideNewsPanel;
