import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            window.scrollTo(0, 0);
        };
        setTimeout(handleScroll, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
