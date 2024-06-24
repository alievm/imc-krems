import React from 'react';
import FadeIn, {FadeInStagger} from "./FadeIn.jsx";

const VideoHeader = () => {
    return (
        <div className='main h-screen w-full relative'>
            <div className="overlay"></div>
            <video src="/video.mp4" autoPlay loop muted/>
            <div className="content text-center">
                <img className="h-28" src="/logo-light.png" />
                <FadeInStagger>
                    <FadeIn>
                        <h1 className="text-6xl">Empowering Global Minds</h1>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-lg">
                            Join IMC Krems Tashkent for an unparalleled international education experience in
                            business and tourism management
                        </p>
                    </FadeIn>
                </FadeInStagger>

            </div>
        </div>
    );
};

export default VideoHeader;
