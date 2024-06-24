import React, { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Button } from "antd";

// Define the news data array
const newsData = [
    {
        id: 1,
        href: "/news/8475",
        imgSrc: "/img_11.png",
        category: "post",
        title: "IMC News Title Here",
        date: "19 March 08:54",
    },
    {
        id: 2,
        href: "/news/8475",
        imgSrc: "/img_11.png",
        category: "post",
        title: "IMC News Title Here",
        date: "19 March 08:54",
    },
    {
        id: 3,
        href: "/news/8475",
        imgSrc: "/img_11.png",
        category: "post",
        title: "IMC News Title Here",
        date: "19 March 08:54",
    },
    {
        id: 4,
        href: "/news/8475",
        imgSrc: "/img_11.png",
        category: "post",
        title: "IMC News Title Here",
        date: "19 March 08:54",
    },
    {
        id: 5,
        href: "/news/8475",
        imgSrc: "/img_11.png",
        category: "post",
        title: "IMC News Title Here",
        date: "19 March 08:54",
    },
    {
        id: 5,
        href: "/news/8475",
        imgSrc: "/img_11.png",
        category: "post",
        title: "IMC News Title Here",
        date: "19 March 08:54",
    },
    // Add more news items as needed
];

export const NewsCards = () => {
    const [visibleItems, setVisibleItems] = useState(3);

    const handleLoadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-6">
                {newsData.slice(0, visibleItems).map((news) => (
                    <div key={news.id} className="news-card">
                        <a href={news.href}>
                            <div className="news-card-img mx-auto object-cover h-48 w-96">
                                <img src={news.imgSrc} alt="news card image" />
                            </div>
                        </a>
                        <div className="news-card-body">
                            <a href={news.href}>
                                <div className="news-card-category">{news.category}</div>
                                <h3 className="news-card-title">{news.title}</h3>
                                <div className="news-card-date icon-and-text flex items-center gap-3">
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
                                    {news.date}
                                </div>
                            </a>
                            <a href={news.href} className="section-green-link flex items-center gap-3">
                                See More
                                <HiOutlineArrowLongRight className="link-text" />
                            </a>
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
