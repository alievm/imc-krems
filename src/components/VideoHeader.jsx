import React from 'react';
import FadeIn, {FadeInStagger} from "./FadeIn.jsx";
import {useTranslation} from "react-i18next";

const VideoHeader = () => {
    const {t} = useTranslation();
    return (
        <div className='main h-screen w-full relative'>
            <div className="overlay"></div>
            <video src="/video.mp4" autoPlay loop muted/>
            <div className="content text-center">
                <img className="h-24" src="/logo1222.svg" />
                <FadeInStagger>
                    <FadeIn>
                        <h1 className="text-6xl font-bold ">{t('Empowering Global Minds')}</h1>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-lg mt-5">
                            {t('Join IMC Krems Tashkent for an unparalleled international education experience in business and tourism management')}
                        </p>
                    </FadeIn>
                </FadeInStagger>

            </div>
        </div>
    );
};

export default VideoHeader;
