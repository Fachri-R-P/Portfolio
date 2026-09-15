import { useState, useEffect } from "react";

export const useScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        
        return () => {
            window.addEventListener('scroll', handleScroll);
            // Clean up the event listener on component unmount
            document.documentElement.style.scrollBehavior = 'auto';
        };
        
    }, []);

    return showScrollTop;
};