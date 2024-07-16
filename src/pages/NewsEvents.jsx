import React, { useState, useEffect } from "react";
import { Alert, Button, Spin, Tabs } from "antd";
import { getNews } from "../service/newsService.js";
import { Link } from "react-router-dom";
import { getEvents } from "../service/eventsService.js";

const { TabPane } = Tabs;

const NewsEvents = () => {
    const [newsData, setNewsData] = useState([]);
    const [eventsData, setEventsData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(3);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("news");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getNews();
                setNewsData(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const data = await getEvents();
                setEventsData(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (activeTab === "events" && eventsData.length === 0) {
            fetchEvents();
        }
    }, [activeTab, eventsData.length]);

    const handleLoadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
    };

    const handleTabChange = (key) => {
        setActiveTab(key);
    };
    if (error) return <Alert message="Error" description={error} type="error" showIcon className="mt-10" />;


    return (
        <>
            <Tabs centered size="large" defaultActiveKey="news" onChange={handleTabChange}>
                <TabPane tab="News" key="news">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-6">
                        {newsData.slice(0, visibleItems).map((news) => (
                            <div key={news.id} className="relative rounded overflow-hidden shadow-lg my-4 mx-4">
                                <Link to={`/news/${news.id}`}>
                                    <img className="w-full object-cover h-[300px]" src={news.path} alt={news.title} />
                                    <div className="absolute bottom-0 left-0 right-0 portrait-bg bg-opacity-50 px-6 py-2">
                                        <div className="font-bold text-sm portrait-top-text max-h-15 h-full overflow-hidden hover:underline" style={{ color: "white" }}>{news.title}</div>
                                        <div className="portrait-bot-text" style={{ color: "white" }}>
                                            {new Date(news.created_at).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </div>
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
                </TabPane>
                <TabPane tab="Events" key="events">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-6">
                        {eventsData.map((event) => (
                            <div key={event.id} className="relative rounded overflow-hidden shadow-lg my-4 mx-4">
                                <Link to={`/events/${event.id}`}>
                                    <img className="w-full object-cover h-[300px]" src={event.path} alt={event.title} />
                                    <div className="absolute bottom-0 left-0 right-0 portrait-bg bg-opacity-50 px-6 py-2">
                                        <div className="font-bold text-sm portrait-top-text max-h-15 h-full overflow-hidden hover:underline" style={{ color: "white" }}>{event.title}</div>
                                        <div className="portrait-bot-text" style={{ color: "white" }}>
                                            {new Date(event.created_at).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </TabPane>
            </Tabs>
        </>
    );
};

export default NewsEvents;
