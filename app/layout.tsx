import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';
import Maintenance from '@ui/Maintenance';

const inter = Inter({ subsets: ["latin"] });

// While true, the real page content is never rendered (so nothing leaks via
// view-source / inspect) and only the maintenance screen is shown. Flip to
// false to bring the site back.
const MAINTENANCE_MODE = true;

export const metadata: Metadata = {
    title: "YANGXDEV",
    description: "Portfolio Website, made by Yang // yangxdev",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <SpeedInsights />
                {MAINTENANCE_MODE ? <Maintenance /> : children}
                <Analytics />
            </body>
        </html>
    );
}
