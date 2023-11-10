import Image from "next/image";
import SliderContainer from "./slider-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SliderContainer username="yangxdev"/>
    </main>
  );
}
