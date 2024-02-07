'use client';
import Image from 'next/image';
import HomePage from '@ui/HomePage';
import ProgressBar from '@ui/ProgressBar';
import SliderContainer from '@ui/SliderContainer';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';

export default function Home() {

    function isTouchPointer() {
        if (typeof window !== 'undefined') {
            return window.matchMedia("(pointer: coarse)").matches;
        }
        return false;
    }

    return (
        <>
            <div className={isTouchPointer() ? 'hidden' : ''}>
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
                /></div>
            <main className="flex min-h-screen flex-col items-center justify-center">
                {/* <SliderContainer username="yangxdev" /> */}
                <ProgressBar />
                <HomePage />
            </main>
        </>
    );
}
