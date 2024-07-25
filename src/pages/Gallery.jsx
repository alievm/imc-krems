import React, { useState, useEffect } from "react";
import { Pagination, Image } from "antd";
import FadeIn from "../components/FadeIn.jsx";
import { getGallery } from "../service/galleryService.jsx";

export function Gallery() {
    const [data, setData] = useState([]);
    const [active, setActive] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getGallery(currentPage);
                const galleryData = response.data.data;
                setData(galleryData);
                setTotalItems(response.data.total);
                setActive(galleryData[0]?.img_path || ""); // Set the first image as active
            } catch (err) {
                setError("Failed to load gallery data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [currentPage]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const firstFiveImages = data.slice(0, 5);
    const remainingImages = data.slice(5);

    return (
        <>
            <div className="relative mb-8 h-72 w-full overflow-hidden profile-card-bg7 bg-cover bg-center">
                <div className="absolute inset-0 h-full w-full bg-black opacity-50"/>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <FadeIn>
                        <h1 className="text-5xl font-semibold text-white">Gallery</h1>
                    </FadeIn>
                </div>
            </div>
            <div className="grid gap-4 max-w-5xl mx-auto">
                <div>
                    <img
                        className="h-auto w-full max-w-full rounded-lg object-cover object-center  md:h-[480px]"
                        src={active}
                        alt="Active gallery"
                    />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {firstFiveImages.map(({ img_path }, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setActive(img_path)}
                                src={img_path}
                                className="h-20 w-96 will-change-auto  mx-auto max-w-full cursor-pointer rounded-lg object-cover object-center"
                                alt={`Gallery image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:grid max-w-7xl flex flex-col items-center mx-auto mt-10 lg:grid-cols-4 gap-4">
                {remainingImages.map(({ img_path }, index) => (
                    <div key={index}>
                        <Image
                            onClick={() => setActive(img_path)}
                            src={img_path}
                            className="max-h-40 min-w-[300px] mx-auto max-w-full cursor-pointer rounded-lg object-cover object-center"
                            alt={`Gallery image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center my-10">
                <Pagination
                    current={currentPage}
                    pageSize={9}
                    total={totalItems}
                    onChange={handlePageChange}
                />
            </div>
        </>
    );
}
