import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import withFadeIn from '@functional/withFadeIn';
import { useIsMobile } from '@functional/useIsMobile';
import Button from '@ui/Button';
import fe2FaqAccordion from '@personal/fe2-faq-accordion-desktop.jpg';
import fe2FaqAccordionMobile from '@personal/fe2-faq-accordion-mobile.jpg';
import fe8RoomHomepage from '@personal/fe8-room-homepage-desktop.jpg';
import fe8RoomHomepageMobile from '@personal/fe8-room-homepage-mobile.jpg';
import fe10Ecommerce from '@personal/fe10-ecommerce-desktop.jpg';
import fe10EcommerceMobile from '@personal/fe10-ecommerce-mobile.jpg';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import NewButton from '../../ui/NewButton';
import GithubIcon from '@/public/icons/githubIcon';
import { IoIosShareAlt } from 'react-icons/io';
import Badge from '../../ui/Badge';

function FrontendMentor() {

    const isMobile = useIsMobile();

    const textDirection = 'text-center';
    const buttonDirection = 'justify-center';

    return (
        <div id='Frontend Mentor' className="frontend-mentor py-20 border-b select-none border-slate-700 max-w-5xl
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-3xl text-left text-[#f0f0f0] font-bold">Frontend Mentor</h1>
            <h3 className='text-lg text-left text-[#f0f0f0] mt-2'>📚 From 2022</h3>
            <br />
            {/* <div className="text-sm text-left">From mastering vanilla JavaScript to embracing React and Next, I&apos;ve navigated the evolution of web design. Fueled by academic insights, I prioritize clean code and holistic development — from frontend responsiveness to seamless backend communication. My approach integrates UI/UX principles, ensuring each project is not just functional but an engaging digital journey. Explore my portfolio for a glimpse into my commitment to creating captivating web experiences.</div>
            <br /> */}

            <div className="fm-row flex flex-col">
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? (
                        <div className={`img-desktop max-w-2xl`}>
                            <Image
                                src={fe2FaqAccordion.src}
                                alt="Frontend Mentor FAQ Accordion"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    ) : (
                        <div className={`img-mobile max-w-full`}>
                            <Image
                                src={fe2FaqAccordionMobile.src}
                                width={5000}
                                height={0}
                                alt="Frontend Mentor FAQ Accordion"
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    )}
                </div>
                <div className={`fm-col1 flex-1 ${textDirection} mt-4`}>
                    <h2 className="mb-4 text-2xl font-bold text-[#f0f0f0]">FAQ Accordion</h2>
                    <div className="badges flex flex-row items-center gap-2 mb-4 justify-center">
                        <Badge label="HTML" bgColor='#f06529' />
                        <Badge label="CSS" bgColor='#2965f1' />
                        <Badge label="JavaScript" bgColor='#f0db4f' />
                        <Badge label="Responsive" bgColor='#61dafb' />
                    </div>
                    <div className="text-sm">
                        One of my first projects, built with vanilla JavaScript and CSS. It&apos;s a simple, responsive design that&apos;s easy to navigate and understand. The project was a great introduction to the fundamentals of web design and development.
                    </div>
                    <div className={`mt-4 flex gap-4 flex-wrap h-[60px] items-center justify-center`}>
                        <NewButton icon={<GithubIcon />} label="GitHub Repository" url='
                                https://github.com/yangxdev/fe2-faq-accordion' />
                        <NewButton icon={<IoIosShareAlt />} label="View Site" url='https://yangxdev.github.io/fe2-faq-accordion/' />
                        {/* {isDesktop && (
                            <>
                                <div className="mx-2"></div>
                                <div className={`${isMobileView3 ? 'hidden' : 'visible'}`}>
                                    <Button type="main" content="Show Mobile View" onClick={() => setIsMobileView3(true)} />
                                </div>
                                <div className={`${(isMobileView3 && isDesktop) ? 'visible' : 'hidden'}`}>
                                    <Button type="main" content="Show Desktop View" onClick={() => setIsMobileView3(false)} />
                                </div>
                            </>
                        )} */}
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="fm-row flex flex-col">
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? (
                        <div className={`img-desktop max-w-2xl`}>
                            <Image
                                src={fe8RoomHomepage.src}
                                alt="Frontend Mentor Room Homepage"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    ) : (
                        <div className={`img-mobile max-w-full`}>
                            <Image
                                src={fe8RoomHomepageMobile.src}
                                alt="Frontend Mentor Room Homepage"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    )}
                </div>
                <div className={`fm-col1 flex-1 ${textDirection} mt-4`}>
                    <h2 className="mb-4 text-2xl text-[#f0f0f0]"><strong>Room Homepage</strong></h2>
                    <div className="badges flex flex-row items-center gap-2 mb-4 justify-center">
                        <Badge label="HTML" bgColor='#f06529' />
                        <Badge label="CSS" bgColor='#2965f1' />
                        <Badge label="JavaScript" bgColor='#f0db4f' />
                        <Badge label="Responsive" bgColor='#61dafb' />
                    </div>
                    <div className="text-sm">
                        In my next projects, I prioritized seamless user experiences by enhancing responsiveness and functionality. I successfully implemented a dynamic image carousel, ensuring smooth transitions between desktop and mobile views.
                    </div>
                    <div className={`mt-4 flex gap-4 flex-wrap h-[60px] items-center justify-center`}>
                        <NewButton icon={<GithubIcon />} label="GitHub Repository" url='https://github.com/unimibYNGX/fe8-room-homepage' />
                        <NewButton icon={<IoIosShareAlt />} label="View Site" url='https://yangxdev.github.io/fe8-room-homepage/' />
                        {/* {isDesktop && (
                            <>
                                <div className="mx-2"></div>
                                <div className={`${isMobileView2 ? 'hidden' : 'visible'}`}>
                                    <Button type="main" content="Show Mobile View" onClick={() => setIsMobileView2(true)} />
                                </div>
                                <div className={`${(isMobileView2 && isDesktop) ? 'visible' : 'hidden'}`}>
                                    <Button type="main" content="Show Desktop View" onClick={() => setIsMobileView2(false)} />
                                </div>
                            </>
                        )} */}
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="fm-row flex flex-col">
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? (
                        <div className={`img-desktop max-w-2xl`}>
                            <Image
                                src={fe10Ecommerce.src}
                                alt="Frontend Mentor E-Commerce"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    ) : (
                        <div className={`img-mobile max-w-full`}>
                            <Image
                                src={fe10EcommerceMobile.src}
                                alt="Frontend Mentor E-Commerce"
                                height={0}
                                width={5000}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    )}
                </div>
                <div className={`fm-col1 flex-1 ${textDirection} mt-4`}>
                    <h2 className="mb-4 text-3xl text-[#f0f0f0]"><strong>E-commerce</strong></h2>
                    <div className="badges flex flex-row items-center gap-2 mb-4 justify-center">
                        <Badge label="React" bgColor='#61dafb' />
                        <Badge label="SASS" bgColor='#c69' />
                        <Badge label="Responsive" bgColor='#61dafb' />
                    </div>
                    <div className="text-sm">
                        One of the last projects I&apos;ve done in this platform, this e-commerce website was initially built with vanilla JavaScript and CSS. I then decided to refactor the code using React and SASS, which allowed me to implement a more efficient and scalable design.
                    </div>
                    <div className={`mt-4 flex gap-4 flex-wrap h-[60px] items-center justify-center`}>
                        <NewButton icon={<GithubIcon />} label="GitHub Repository" url='https://github.com/unimibYNGX/fe10-ecommerce' />
                        <NewButton icon={<IoIosShareAlt />} label="View Site" url='https://yangxdev.github.io/fe10-ecommerce/' />
                        {/* {isDesktop && (
                            <>
                                <div className="mx-2"></div>
                                <div className={`${isMobileView1 ? 'hidden' : 'visible'}`}>
                                    <Button type="main" content="Show Mobile View" onClick={() => setIsMobileView1(true)} />
                                </div>
                                <div className={`${(isMobileView1 && isDesktop) ? 'visible' : 'hidden'}`}>
                                    <Button type="main" content="Show Desktop View" onClick={() => setIsMobileView1(false)} />
                                </div>
                            </>
                        )} */}
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-lg">
                Want to see more? Check out my <strong>Frontend Mentor</strong> profile!
            </div>
            <div className="mt-4 flex gap-4 flex-wrap h-[60px] items-center justify-center">
                {/* <Button type="main" content="View Profile" onClick={() => window.open('https://www.frontendmentor.io/profile/yangxdev')} /> */}
                <NewButton icon={<IoIosShareAlt />} label="Frontend Mentor" url='https://www.frontendmentor.io/profile/yangxdev' />
            </div>
        </div >
    );
}

export default withFadeIn(FrontendMentor);