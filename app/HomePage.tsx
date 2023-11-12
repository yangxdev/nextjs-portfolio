"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Header from "./Header";
import Landing from "./Landing";
import Biography from "./Biography";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="bg-background flex-col flex main-page h-full w-screen items-center justify-center">
      {/* <div className="scroll-links absolute cursor-pointer">
        <ScrollLink to="landing" smooth={true} duration={500}>
          Landing
        </ScrollLink>
        <ScrollLink to="biography" smooth={true} duration={500}>
          Biography
        </ScrollLink>
      </div> */}
      <Header />
      <Landing />
      <Biography />
      <Footer />
    </div>
  );
}
