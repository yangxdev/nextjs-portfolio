import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const biographySection = document.getElementById('Biography');
            if (biographySection) {
                const isScrolledPastBiography = window.scrollY >= (biographySection.offsetTop - 500);
                setIsButtonVisible(isScrolledPastBiography);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup: remove the scroll event listener when the component is unmounted
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bottom-8 sticky ml-auto mr-8 mb-8">
            <button
                onClick={scrollToTop}
                className={`transition-transform duration-1000 ease-in-out transform
                    ${isButtonVisible ? 'translate-y-0' : 'translate-y-52'}`}
            >
                <div className="text-white text-3xl py-[0.375rem] px-2 rounded-lg backdrop-blur backdrop-opacity-90
                ">▲</div>
            </button>
        </div>
    );
};

export default ScrollToTopButton;
