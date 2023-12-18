'use client';
import Image from 'next/image';
import HomePage from '@ui/HomePage';
import ProgressBar from '@ui/ProgressBar';
import SliderContainer from '@ui/SliderContainer';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            {/* <SliderContainer username="yangxdev" /> */}
            <ProgressBar />
            <HomePage />
        </main>
    );
}
