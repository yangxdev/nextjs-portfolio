"use client";
import Image from "next/image";
// import HomePage from "@ui/HomePage";
import ProgressBar from "@ui/ProgressBar";
import SliderContainer from "@ui/SliderContainer";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState, Suspense, lazy, useContext } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";
import LoadingContext from "./components/functional/LoadingContext";

const HomePage = lazy(() => import("@ui/HomePage"));

export default function Home() {
    const [isTouch, setIsTouch] = useState(false);
    const loadingContext = useContext(LoadingContext) as { loadingComplete: boolean; setLoadingComplete: (value: boolean) => void };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsTouch(window.matchMedia("(pointer: coarse)").matches);
        }
    }, []);

    const { loadingComplete, setLoadingComplete } = loadingContext;

    const handleLoaded = () => {
        setLoadingComplete(true);
    };

    return (
        <>
            <LoadingScreen loadingComplete={loadingComplete} />
            <div className={isTouch ? "hidden" : ""}>
                <AnimatedCursor
                    color="240, 240, 240"
                    innerStyle={{
                        mixBlendMode: "exclusion",
                    }}
                    outerAlpha={1}
                    outerStyle={{
                        mixBlendMode: "exclusion",
                    }}
                    clickables={["a", ".common-button-style", ".landing-button-email", ".footer-button-email", ".footer-logo", "#scroll-to-top-button *", ".animated-cursor", ".load-more"]}
                />
            </div>
            <main className="flex min-h-screen flex-col items-center justify-center">
                {/* <SliderContainer username="yangxdev" /> */}
                <ProgressBar />
                <Suspense fallback={<LoadingScreen loadingComplete={loadingComplete} />}>
                    <HomePage onLoaded={handleLoaded} />
                </Suspense>
            </main>
        </>
    );
}
