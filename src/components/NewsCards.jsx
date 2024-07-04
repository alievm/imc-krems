import React, { useState, useEffect } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {Alert, Button, Spin} from "antd";
import {getNews} from "../service/newsService.js";
import {Link} from "react-router-dom";

// Define the news data array
const NewsCards = () => {
    const [newsData, setNewsData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(3);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getNews();
                setNewsData(data.data); // Assuming news items are in the 'data' field
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleLoadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
    };

    if (loading) return <Spin size="large" className="flex justify-center mt-10" />;
    if (error) return <Alert message="Error" description={error} type="error" showIcon className="mt-10" />;

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-6">
                {newsData.slice(0, visibleItems).map((news) => (
                    <div key={news.id} className="news-card p-4 bg-white rounded-lg">
                        <a href={news.href}>
                            <div className="news-card-img mx-auto object-cover h-48 w-full mb-4">
                                <img src={news.path} alt={news.title} className="h-full w-full object-cover rounded-lg" />
                            </div>
                        </a>
                        <div className="news-card-body">
                            <Link to={`/news/${news.id}`}>
                                <div className="news-card-category text-gray-500 text-sm mb-2">{news.type}</div>
                                <h3 className="news-card-title text-lg font-semibold mb-2">{news.title}</h3>
                                <div className="news-card-date icon-and-text flex items-center text-gray-500 text-sm gap-2 mb-4">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.78053 4.87733V8.49464L10.624 10.2282M5.32198 1.53457C8.89271 0.0552892 12.9861 1.75156 14.4654 5.32221C15.9447 8.89286 14.2484 12.9862 10.6777 14.4654C7.10696 15.9447 3.01357 14.2484 1.53426 10.6778C0.0557191 7.10714 1.75125 3.01385 5.32198 1.53457Z"
                                            stroke="#B2AEAB"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    {new Date(news.created_at).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </div>
                            </Link>
                            <Link to={`/news/${news.id}`} className="section-green-link flex items-center text-gray-600 hover:text-gray-800 cursor-pointer gap-3">
                                See More
                                <HiOutlineArrowLongRight className="link-text" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {visibleItems < newsData.length && (
                <Button size="large" className="w-full mt-4" type="primary" onClick={handleLoadMore}>
                    Load more
                </Button>
            )}
        </>
    );
};

export default NewsCards;
