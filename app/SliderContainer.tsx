"use client";
import { useEffect, useState } from "react";
import styles from "./css/styles.module.css";
import Button from "./Button";

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
      ${isVisible ? "" : styles["hidden"]}`}
    >
      <div className={`opening-slider-text text-text`}>
        <div className="text-xl font-bold text-center cursor-default select-none">
          {username}
        </div>
        <Button type="begin" content="begin" onClick={handleBeginClick} />
      </div>
    </div>
  );
}
