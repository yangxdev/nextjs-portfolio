"use client";
import type { Metadata } from "next";
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
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Portfolio Website, made by Yang // yangxdev" />
                <meta name="author" content="Yang" />
                <meta
                    name="keywords"
                    content="yangxdev, yang, portfolio, website, developer, designer, full-stack, fullstack, frontend, backend, web, app, application, software, engineer, programmer, coder, coder, code, programming, development, design
                "
                />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />
                <meta property="og:title" content="YANGXDEV" />
                <meta property="og:description" content="Portfolio Website, made by Yang // yangxdev" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yangxdev.vercel.app" />
                <meta property="og:image" content="https://yangxdev.vercel.app/og-image.png" />
                <meta property="og:site_name" content="YANGXDEV" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@yangxdev" />
                <meta name="twitter:creator" content="@yangxdev" />
                <meta name="twitter:title" content="YANGXDEV" />
                <meta name="twitter:description" content="Portfolio Website, made by Yang // yangxdev" />
                <meta name="twitter:image" content="https://yangxdev.vercel.app/og-image.png" />
                <meta name="twitter:image:alt" content="YANGXDEV" />
                <title>YANGXDEV</title>
            </head>
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
