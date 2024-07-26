import React, { useState, useEffect } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {Alert, Button, Spin} from "antd";
import {getNews} from "../service/newsService.js";
import {Link} from "react-router-dom";
import {getEvents} from "../service/eventsService.js";

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
                const data = await getEvents();
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
  <div className="relative   rounded overflow-hidden shadow-lg my-4 mx-4">
    <Link to={`/news/${news.id}`}>
  <img
      className="w-full object-cover h-[300px]"
      src={news.path}
      alt={news.title}
  />
  <div className="absolute bottom-0 left-0 right-0 portrait-bg bg-opacity-50 px-6 py-2" >
      <div className="font-bold text-sm portrait-top-text max-h-15 h-full overflow-hidden hover:underline" style={{color: "white"}}>{news.title}</div>
      <div className="portrait-bot-text" style={{color: "white"}}>   {new Date(news.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })}</div>
  </div>
  </Link>
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
