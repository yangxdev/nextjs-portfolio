"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Header from "./Header";
import Landing from "./Landing";
import Biography from "./Biography";
import Footer from "./Footer";
import CoverLetterMaker from "./Projects/CoverLetterMaker";
import { Toaster } from "react-hot-toast";

export default function HomePage() {

  const sections = ['Landing', 'Biography', 'CLM'];

  return (
    <div className="bg-background flex-col flex main-page h-full w-screen items-center justify-center">
      <div><Toaster/></div>
      <Header />
      <div className="scroll-links flex flex-col sticky top-[70px] mr-auto ml-6 cursor-pointer">
        {sections.map((section, index) => (
          <div className="hover:opacity-80" key={index}>
            <ScrollLink 
              to={section} 
              smooth={true} 
              duration={500} 
              offset={-120}
              spy={true}
              activeClass="opacity-80"
            >
              {section}
            </ScrollLink>
          </div>
        ))}
      </div>
      <Landing />
      <Biography />
      <CoverLetterMaker />
      <Footer />
    </div>
  );
}
