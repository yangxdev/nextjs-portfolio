import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const ScrollToTopButton = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const targetYPos = useRef(0);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const landingElement = document.getElementById('Welcome');
            const experienceElement = document.getElementById('Experience');

            if (!landingElement || !experienceElement) return;

            const landingYPos = window.pageYOffset + landingElement.getBoundingClientRect().top;
            const experienceYPos = window.pageYOffset + experienceElement.getBoundingClientRect().top;

            setIsButtonVisible(window.scrollY > 500);
            targetYPos.current = experienceYPos && window.scrollY > experienceYPos ? experienceYPos - 128 : landingYPos - 128;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: targetYPos.current, behavior: 'smooth' });
    };

    return (
        <div className="bottom-8 sticky ml-auto mr-8 mb-8 z-10">
            <button
                id='scroll-to-top-button'
                onClick={scrollToTop}
                className={`transition-transform duration-1000 ease-in-out transform select-none
            ${isButtonVisible ? 'translate-y-0' : 'translate-y-52'}`}
            >
                <div className="text-[#f0f0f0] text-3xl md:text-4xl lg:text-5xl py-[0.375rem] px-2 rounded-lg backdrop-blur backdrop-opacity-90">▲</div>
            </button>
        </div>
    );
};

export default ScrollToTopButton;
