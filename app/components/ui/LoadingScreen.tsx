import AOS from "aos";
import "aos/dist/aos.css";
import logo from "@/public/logos/logo_transparent.png";
import Image from "next/image"; // Import the 'Image' component from 'next/image'
import { useEffect, useState } from "react";

const LoadingScreen = ({ loadingComplete: loadingComplete }: { loadingComplete: boolean }) => {
    useEffect(() => {
        scrollTo(0, 0);
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(100);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loadingComplete) {
            setTimeout(() => {
                const loadingScreen = document.querySelector(".loading-screen-container");
                loadingScreen?.setAttribute("data-aos", "fade-down");
            }, 1000);
        }
    }, [loadingComplete]);

    return (
        <div className="loading-screen-container bg-[#0f0f0f] h-full w-full absolute z-[200]">
            <div className="flex flex-col items-center justify-center h-screen gap-3">
                <Image data-aos="fade-down" draggable="false" src={logo} alt="Logo" width={100} height={100} />
                <div data-aos="fade-up" className="loading-bar w-[300px] h-2 bg-[#0f0f0f] rounded">
                    <div
                        className="progress h-full bg-white"
                        style={{
                            width: `${progress}%`,
                            transition: "width 2s ease-in-out",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
