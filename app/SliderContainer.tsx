"use client";
import { useEffect, useState } from "react";
import styles from "./css/styles.module.css";

type SliderContainerProps = {
  username: string;
};

export default function SliderContainer({ username }: SliderContainerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    return () => {
      setIsVisible(true);
    };
  }, []);

  const handleBeginClick = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`flex bg-black opening-slider-container absolute items-center justify-center w-screen h-screen 
      ${
        isVisible ? "" : styles["hidden"]
      }`}
    >
      <div className={`${styles["opening-slider-text"]} text-text`}>
        <div className="text-xl font-bold text-center cursor-default select-none">
          {username}
        </div>
        <div
          className="text-text text-lg font-medium text-center select-none underline underline-offset-1 cursor-pointer hover:opacity-80"
          onClick={handleBeginClick}
        >
          begin
        </div>
      </div>
    </div>
  );
}
