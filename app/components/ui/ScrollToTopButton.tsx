import React, { useState, useEffect, useLayoutEffect, useRef, useContext } from "react";
import { ScrollPointContext } from "../functional/ScrollPointContext";

const ScrollToTopButton = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const targetYPos = useRef(0);
    const { scrollPoint, setScrollPoint } = useContext(ScrollPointContext);
    const [isScrollTextVisible, setIsScrollTextVisible] = useState(false);
    useEffect(() => {
        console.log("ScrollPoint: ", scrollPoint);
        setIsScrollTextVisible(scrollPoint !== "");
    }, [scrollPoint]);

    // useEffect(() => {
    //     if (scrollPoint) console.log("ScrollPoint updated: ", scrollPoint);
    //     else console.log("ScrollPoint is now empty");
    // }, [scrollPoint]);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const landingElement = document.getElementById("Welcome");
            const experienceElement = document.getElementById("Experience");
            if (!landingElement || !experienceElement) return;

            const landingYPos = window.pageYOffset + landingElement.getBoundingClientRect().top;
            const experienceYPos = window.pageYOffset + experienceElement.getBoundingClientRect().top;

            setIsButtonVisible(window.scrollY > 500);
            targetYPos.current = experienceYPos && window.scrollY > experienceYPos ? experienceYPos - 128 : landingYPos - 128;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        // Get the element with the ID specified by scrollPoint
        const element = document.getElementById(scrollPoint);

        // Calculate the Y position of the element
        const elementYPos = element ? element.getBoundingClientRect().top + window.scrollY - 128 : null;

        // If the element exists and scrollPoint is defined, set targetYPos to elementYPos
        // Otherwise, keep the current value of targetYPos
        targetYPos.current = element && scrollPoint && elementYPos !== null ? elementYPos : targetYPos.current;

        // Get the current scroll position
        const currentScrollYPos = window.scrollY;

        const experienceElement = document.getElementById("Experience");

        // If the current scroll position is lower than targetYPos.current and higher than experienceYPos, reset targetYPos.current to experienceYPos
        const experienceYPos = experienceElement ? window.pageYOffset + experienceElement.getBoundingClientRect().top : 0;
        if (currentScrollYPos < targetYPos.current && currentScrollYPos > experienceYPos) {
            targetYPos.current = experienceYPos;
        }

        // Scroll to targetYPos
        window.scrollTo({ top: targetYPos.current, behavior: "smooth" });

        // Reset scrollPoint
        setScrollPoint("");
    };

    return (
        <div className="bottom-8 sticky ml-auto mr-8 mb-8 z-10">
            <button
                id="scroll-to-top-button"
                onClick={scrollToTop}
                className={`transition-transform duration-1000 ease-in-out transform select-none
                ${isButtonVisible ? "translate-y-0" : "translate-y-52"} ${scrollPoint ? "" : ""}`}
            >
                <div className="transition-all flex flex-row duration-500 ease-in-out text-sm">
                    <div className="text-[#f0f0f0] py-[0.375rem] px-2 rounded-lg backdrop-blur backdrop-opacity-90 ">
                        <div className="text-3xl md:text-4xl lg:text-5xl">▲</div>
                    {/* <p className={`transition-all duration-500 ease-in-out h-[0px] ${isScrollTextVisible ? "opacity-1" : "opacity-0"}`}>{scrollPoint && ("Return")}</p> */}
                    </div>
                </div>
            </button>
        </div>
    );
};

export default ScrollToTopButton;
