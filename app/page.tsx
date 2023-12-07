"use client";
import Image from "next/image";
import SliderContainer from "./SliderContainer";
import HomePage from "./HomePage";
import ProgressBar from "./ProgressBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {/* <SliderContainer username="yangxdev" /> */}
      <ProgressBar />
      <HomePage />
    </main>
  );
}
