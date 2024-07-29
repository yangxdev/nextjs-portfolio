"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import AnimatedCursor from "react-animated-cursor";
import { Suspense, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "YANGXDEV",
//     description: "Portfolio Website, made by Yang // yangxdev",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        setTimeout(() => {
            const body = document.querySelector("body");
            body?.classList.remove("overflow-hidden");
        }, 2300);
    }, []);

    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} overflow-hidden`}>
                <SpeedInsights />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
