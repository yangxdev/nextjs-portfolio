import React, { useState } from 'react';
import { useEffect } from 'react';

export default function ProgressBar() {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100

            setScrollPercentage(scrollPercent)
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <div
            id="progress-container"
            style={{
                height: "3px",
                width: "100%",
                backgroundColor: "black",
                position: "fixed",
                zIndex: 100,
                top: "0",
                left: "0",
                right: "0",
            }}
        >
            <div
                className="progress-fill"
                style={{
                    height: "100%",
                    backgroundColor: "#fdfdfd",
                    opacity: "1",
                    width: `${scrollPercentage}%`,
                }}
            >
            </div>
        </div>
    )
}