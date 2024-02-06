import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react';
import AnimatedCursor from 'react-animated-cursor';

const inter = Inter({ subsets: ["latin"] });

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
                <AnimatedCursor
                    color='240, 240, 240'
                    clickables={[
                        'a',
                        '.common-button-style',
                        '.landing-button-email',
                        '.footer-button-email',
                        '.footer-logo',
                        '#scroll-to-top-button *'
                    ]}
                />
                <SpeedInsights />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
