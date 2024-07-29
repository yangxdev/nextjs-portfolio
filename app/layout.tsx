"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import AnimatedCursor from "react-animated-cursor";
import { Suspense, useEffect, useState } from "react";
import LoadingContext from "@/app/components/functional/LoadingContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "YANGXDEV",
//     description: "Portfolio Website, made by Yang // yangxdev",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        if (loadingComplete) {
            const body = document.querySelector("body");
            body?.classList.remove("overflow-hidden");
        }
    }, [loadingComplete]);

    return (
        <html lang="en" className="dark">
            <LoadingContext.Provider value={{ loadingComplete, setLoadingComplete }}>
                <body className={`${inter.className} overflow-hidden`}>
                    <SpeedInsights />
                    {children}
                    <Analytics />
                </body>
            </LoadingContext.Provider>
        </html>
    );
}
