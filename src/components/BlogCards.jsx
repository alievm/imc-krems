import React, { useEffect, useState } from 'react';
import { getNews} from "../service/newsService.js";// Импортируем функцию getNews из нашего API
import { formatDistanceToNow, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import {useTranslation} from "react-i18next";
import {getEvents} from "../service/eventsService.js";
import {Link} from "react-router-dom";

// Предположим, что news.created_at имеет формат даты-времени (например, '2024-06-28T10:30:00')
const BlogCards = () => {
    const {t} = useTranslation();
    const [newsData, setNewsData] = useState([]); // Состояние для хранения данных новостей

    useEffect(() => {
        // Функция для загрузки данных новостей при монтировании компонента
        const fetchNews = async () => {
            try {
                const response = await getNews(); // Вызываем функцию getNews для получения данных
                setNewsData(response.data); // Обновляем состояние с полученными данными новостей
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews(); // Вызываем функцию загрузки данных при загрузке компонента
    }, []);

    const formatDate = (createdAt) => {
        const parsedDate = parseISO(createdAt);
        const formattedDate = formatDistanceToNow(parsedDate, { addSuffix: true, locale: enUS });
        return formattedDate;
    };
    return (
        <div className="flex my-16 max-w-7xl mx-auto flex-col bg-main rounded-xl py-4  px-8 max-md:px-5">
            <h2 className="text-center text-2xl font-semibold leading-8 text-white">
                {t('Our recent blogs')}
            </h2>
            <div className="mt-8 max-md:max-w-full">
                <div className="flex flex-wrap lg:flex-nowrap gap-5 max-md:flex-col max-md:gap-0">

                    {/*2 LASTEST NEWS */}
                    <div className="flex flex-col w-full  lg:w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col gap-3 grow justify-center max-md:mt-8 max-md:max-w-full">
                            {newsData.slice(1, 3).map((news) => (
                                <Link to={`/news/${news.id}`}>
                            <div className="max-md:max-w-full">
                                <div
                                    className="flex flex-wrap  lg:flex-nowrap gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-full lg:w-[56%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            src={news.path} // Путь к изображению из данных новости
                                            alt={news.title} // Заголовок новости в качестве альтернативного текста
                                            className="grow w-full rounded-lg object-cover aspect-[1.59] max-md:mt-6"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-1 w-full lg:w-[44%] max-md:ml-0 max-md:w-full">
                                        <div
                                            className="flex flex-col text-sm font-semibold leading-5 max-md:mt-6">
                                            <div className="mt-3 text-lg leading-7 text-gray-100">
                                                {news.title.slice(0, 30)}
                                                {news.title.length > 30 && '...'}
                                            </div>
                                            <div className="mt-2 text-base  leading-6 text-white">
                                                {news.description.slice(0, 130)}
                                                {news.description.length > 130 && '...'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </Link>
                                ))}
                        </div>
                    </div>


                    {/*LATEST POST HERE */}
                    <div className="flex flex-col w-full lg:w-6/12  max-md:ml-0 max-md:w-full">
                        {newsData.slice(0, 1).map((news) => (
                            <Link to={`/news/${news.id}`}>
                            <div
                                className="flex flex-col grow self-stretch text-sm font-semibold leading-5 max-md:mt-8 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src={news.path}
                                    className="w-full object-cover rounded-xl aspect-[2.44] max-md:max-w-full"
                                />
                                <div className="mt-1 text-gray-100 max-md:max-w-full">
                                    {formatDate(news.created_at)}
                                </div>
                                <div className="mt-1 text-xl leading-8 text-gray-100 max-md:max-w-full">
                                    {news.title}
                                </div>
                                <div className="mt-1 text-base leading-6 text-white max-md:max-w-full">
                                    {news.description.length > 100
                                        ? `${news.description.substring(0, 250)}...`
                                        : news.description}
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;
