import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const ScrollToTopButton = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    let targetYPos = useRef(0);

    useLayoutEffect(() => {
        const handleScroll = () => {
            let landingYPos = window.pageYOffset + document.getElementById('Welcome')?.getBoundingClientRect().top - 128;
            let experienceYPos = window.pageYOffset + document.getElementById('Experience')?.getBoundingClientRect().top - 128;

            if (window.scrollY > 500) {
                setIsButtonVisible(true);
            } else {
                setIsButtonVisible(false);
            }

            if (experienceYPos && window.scrollY > experienceYPos) {
                targetYPos.current = experienceYPos;
            } else {
                targetYPos.current = landingYPos;
            }

            console.clear();
            console.log("L: " + landingYPos);
            console.log("E: " + experienceYPos);
            console.log("Final: " + targetYPos.current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup: remove the scroll event listener when the component is unmounted
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: targetYPos.current, behavior: 'smooth' });
    };

    return (
        <div className="bottom-8 sticky ml-auto mr-8 mb-8 z-10">
            <button
                onClick={scrollToTop}
                className={`transition-transform duration-1000 ease-in-out transform select-none
                    ${isButtonVisible ? 'translate-y-0' : 'translate-y-52'}`}
            >
                <div className="text-white text-3xl md:text-4xl lg:text-5xl py-[0.375rem] px-2 rounded-lg backdrop-blur backdrop-opacity-90
                ">▲</div>
            </button>
        </div>
    );
};

export default ScrollToTopButton;
