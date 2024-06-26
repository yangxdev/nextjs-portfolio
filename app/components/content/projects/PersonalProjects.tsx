import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import withFadeIn from "@functional/withFadeIn";
import { useIsMobile } from "@functional/useIsMobile";
import Button from "@ui/Button";
import bbDashboard from "@personal/bb-dashboard-desktop.jpeg";
import bbIncome from "@personal/bb-income-desktop.jpeg";
import fmCalendar from "@personal/fm-tablet.jpg";
import fmAddOrder from "@personal/fm-add-order-tablet.jpg";
import fe2FaqAccordion from "@personal/fe2-faq-accordion-desktop.jpg";
import fe2FaqAccordionMobile from "@personal/fe2-faq-accordion-mobile.jpg";
import fe8RoomHomepage from "@personal/fe8-room-homepage-desktop.jpg";
import fe8RoomHomepageMobile from "@personal/fe8-room-homepage-mobile.jpg";
import fe10Ecommerce from "@personal/fe10-ecommerce-desktop.jpg";
import fe10EcommerceMobile from "@personal/fe10-ecommerce-mobile.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PersonalProjects() {
    const isMobile = useIsMobile();

    const textDirection = "text-center";
    const buttonDirection = "justify-center";

    return (
        <div
            id="Personal Projects & Freelance"
            className="frontend-mentor py-20 border-b select-none border-slate-700 max-w-5xl
            mx-6
            md:mx-20
            lg:mx-40
        "
        >
            <h1 className="text-3xl text-left text-white font-bold">Personal Projects & Freelance</h1>
            <h3 className="text-lg text-left text-white mt-2">From 2023</h3>
            <br />

            <div className="fm-row flex flex-col">
                <div className="fm-col2 flex-1 flex justify-center">
                    <div className={`img-desktop max-w-2xl`}>
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                            <div>
                                <Image width={5000} height={0} src={bbDashboard.src} alt="Frontend Mentor FAQ Accordion" className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                            </div>
                            <div>
                                <Image width={5000} height={0} src={bbIncome.src} alt="Frontend Mentor FAQ Accordion" className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className={`fm-col1 flex-1 ${textDirection} mt-4`}>
                    <h2 className="mb-4 text-2xl font-bold text-white">💸 Budget Buddy</h2>
                    <div className="text-sm">
                        Budget Buddy is a web app that helps individuals manage their personal finances and budget effectively. It is built using Next.js, a React-based framework that enables server-side rendering and generates static websites for React-based web applications. The project utilizes
                        Tailwind CSS for efficient and customizable styling.
                    </div>
                    <div className={`row mt-4 flex flex-nowrap ${buttonDirection}`}>
                        <Button type="main" content="View GitHub Repository" onClick={() => window.open("https://github.com/yangxdev/nextjs-budget-buddy")} />
                        <div className="mx-2"></div>
                        {/* <Button type="main" content="Preview Site" onClick={() => window.open("https://yangxdev.github.io/fe2-faq-accordion/")} /> */}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="fm-row flex flex-col">
                <div className="fm-col2 flex-1 flex justify-center">
                    <div className={`img-desktop max-w-2xl`}>
                        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                            <div>
                                <Image width={5000} height={0} src={fmCalendar.src} alt="Frontend Mentor FAQ Accordion" className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                            </div>
                            <div>
                                <Image width={5000} height={0} src={fmAddOrder.src} alt="Frontend Mentor FAQ Accordion" className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className={`fm-col1 flex-1 ${textDirection} mt-4`}>
                    <h2 className="mb-4 text-2xl text-white">
                        <strong>🌷 Flower Manager</strong>
                    </h2>
                    <div className="text-sm">
                        Flower Manager is an order manager I made for a client's flower business where they can keep track of her orders and customers throughout the month. This project gives me a chance to make a real world impact, using the latest technologies to make a product that can provide
                        value to a business.{" "}
                    </div>
                    <div className={`row mt-4 flex flex-nowrap ${buttonDirection}`}>
                        <Button type="main" content="View GitHub Repository" onClick={() => window.open("https://github.com/yangxdev/nextjs-flower-manager")} />
                        <div className="mx-2"></div>
                        {/* <Button type="main" content="Preview Site" onClick={() => window.open("https://yangxdev.github.io/fe8-room-homepage/")} /> */}
                    </div>
                </div>
            </div>
            <br />
            {/* <br />
            <div className="fm-row flex flex-col">
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? (
                        <div className={`img-desktop max-w-2xl`}>
                            <Image src={fe10Ecommerce.src} alt="Frontend Mentor E-Commerce" width={5000} height={0} className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                        </div>
                    ) : (
                        <div className={`img-mobile max-w-full`}>
                            <Image src={fe10EcommerceMobile.src} alt="Frontend Mentor E-Commerce" height={0} width={5000} className="w-full h-auto rounded-xl" draggable={false} priority={true} />
                        </div>
                    )}
                </div>
                <div className={`fm-col1 flex-1 ${textDirection} mt-4`}>
                    <h2 className="mb-4 text-3xl text-white">
                        <strong>E-commerce</strong>
                    </h2>
                    <div className="text-sm">
                        One of the last projects I&apos;ve done in this platform, this e-commerce website was initially built with vanilla JavaScript and CSS. I then decided to refactor the code using React and SASS, which allowed me to implement a more efficient and scalable design.
                    </div>
                    <div className={`row mt-4 flex flex-nowrap ${buttonDirection}`}>
                        <Button type="main" content="View Code" onClick={() => window.open("https://github.com/unimibYNGX/fe10-ecommerce")} />
                        <div className="mx-2"></div>
                        <Button type="main" content="Preview Site" onClick={() => window.open("https://yangxdev.github.io/fe10-ecommerce/")} />
                    </div>
                </div>
            </div> */}

            <div className="mt-8 text-center text-lg">
                Want to see more? Check out my <strong>GitHub</strong>!
            </div>
            <div className="flex justify-center mt-4">
                <Button type="main" content="View GitHub" onClick={() => window.open("https://github.com/yangxdev")} />
            </div>
        </div>
    );
}

export default withFadeIn(PersonalProjects);
