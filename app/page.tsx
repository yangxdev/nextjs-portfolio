import Image from "next/image";
import SliderContainer from "./SliderContainer";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SliderContainer username="yangxdev" />
      <HomePage />
    </main>
  );
}
