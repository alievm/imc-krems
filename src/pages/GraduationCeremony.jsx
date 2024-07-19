import React, { useState, useEffect } from "react";
import { Alert, Button, Spin, Tabs } from "antd";
import { getNews } from "../service/newsService.js";
import { Link } from "react-router-dom";
import {getEvents, getGraduationCeremony} from "../service/eventsService.js";
import FadeIn from "../components/FadeIn.jsx";

const { TabPane } = Tabs;

const GraduationCeremony = () => {
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
                const data = await getGraduationCeremony();
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
                const data = await getGraduationCeremony();
                setEventsData(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [activeTab, eventsData.length]);

    return (
        <>
            <div
                className="relative mt-8 h-72 w-full overflow-hidden  profile-card-bg7 bg-cover bg-center">
                <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <FadeIn>
                        <h1 className="text-5xl font-semibold text-white">Graduational Ceremony</h1>
                    </FadeIn>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-6">
                {eventsData.map((event) => (
                    <div key={event.id} className="relative rounded overflow-hidden shadow-lg my-4 mx-4">
                        <Link to={`/events/${event.id}`}>
                            <img className="w-full object-cover h-[300px]" src={event.path} alt={event.title}/>
                            <div className="absolute bottom-0 left-0 right-0 portrait-bg bg-opacity-50 px-6 py-2">
                                <div
                                    className="font-bold text-sm portrait-top-text max-h-15 h-full overflow-hidden hover:underline"
                                    style={{color: "white"}}>{event.title}</div>
                                <div className="portrait-bot-text" style={{color: "white"}}>
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
        </>
    );
};

export default GraduationCeremony;
