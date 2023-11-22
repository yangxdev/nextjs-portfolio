import fe2FaqAccordion from '../../public/fe2-faq-accordion-desktop.jpg';
import fe2FaqAccordionMobile from '../../public/fe2-faq-accordion-mobile.jpg';
import fe8RoomHomepage from '../../public/fe8-room-homepage-desktop.jpg';
import fe8RoomHomepageMobile from '../../public/fe8-room-homepage-mobile.jpg';
import fe10Ecommerce from '../../public/fe10-ecommerce-desktop.jpg';
import fe10EcommerceMobile from '../../public/fe10-ecommerce-mobile.jpg';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Button from '../Button';
import { useState } from 'react';

export default function FrontendMentor() {

    const [isMobileView1, setIsMobileView1] = useState(false);
    const [isMobileView2, setIsMobileView2] = useState(false);
    const [isMobileView3, setIsMobileView3] = useState(false);

    return (
        <div id='Project: Frontend Mentor' className="frontend-mentor max-w-5xl mx-40 py-20 border-b select-none border-slate-700">
            <h1 className="text-5xl text-center text-white">Frontend Mentor</h1>
            <h3 className='text-xl text-center text-white mt-2'>From 2022</h3>
            <br />
            <div className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore provident quae, iusto, earum illo dignissimos, illum esse adipisci voluptate quaerat voluptatibus nostrum autem ad ut veniam quia! Maiores, ratione quia?</div>
            <br /><br />

            <div className="fm-row flex">
                <div className="fm-col2 flex-1">
                    <div className={`img-desktop ${isMobileView3 ? 'hidden' : 'visible'}`}>
                        <Zoom>
                            <img
                                src={fe2FaqAccordion.src}
                                alt="Frontend Mentor FAQ Accordion"
                                width="500"
                                className='rounded-xl'
                                draggable={false}
                            />
                        </Zoom>
                    </div>
                    <div className={`img-mobile flex justify-end ${isMobileView3 ? 'visible' : 'hidden'}`}>
                        <Zoom>
                            <img
                                src={fe2FaqAccordionMobile.src}
                                alt="Frontend Mentor FAQ Accordion"
                                width="250"
                                className='rounded-xl'
                                draggable={false}
                            />
                        </Zoom>
                    </div>
                </div>
                <div className="fm-col1 flex-1 ml-10">
                    <h2 className="mb-4 text-3xl text-white">FAQ Accordion</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod rem ullam labore soluta explicabo dolores autem fugit recusandae unde. Non repellendus perferendis cum eos. Fuga alias quae magni laudantium!
                    <div className="row mt-4 flex flex-nowrap">
                        <Button type="main" content="View Code"
                            onClick={() => window.open('https://github.com/yangxdev/fe2-faq-accordion')
                            } />
                        <div className="mx-2"></div>
                        <Button type="main" content="Preview Site"
                            onClick={() => window.open('https://yangxdev.github.io/fe2-faq-accordion/')}
                        />
                        <div className="mx-2"></div>
                        <div className={`${isMobileView3 ? 'hidden' : 'visible'}`}>
                            <Button type="main" content="Show Mobile View" onClick={() => setIsMobileView3(true)} />
                        </div>
                        <div className={`${isMobileView3 ? 'visible' : 'hidden'}`}>
                            <Button type="main" content="Show Desktop View" onClick={() => setIsMobileView3(false)} />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="fm-row flex">
                <div className="fm-col1 flex-1 mr-10 text-right">
                    <h2 className="mb-4 text-3xl text-white">Room Homepage</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod rem ullam labore soluta explicabo dolores autem fugit recusandae unde. Non repellendus perferendis cum eos. Fuga alias quae magni laudantium!
                    <div className="row mt-4 flex flex-nowrap justify-end">
                        <Button type="main" content="View Code"
                            onClick={() => window.open('https://github.com/unimibYNGX/fe8-room-homepage')
                            } />
                        <div className="mx-2"></div>
                        <Button type="main" content="Preview Site"
                            onClick={() => window.open('https://yangxdev.github.io/fe8-room-homepage/')}
                        />
                        <div className="mx-2"></div>
                        <div className={`${isMobileView2 ? 'hidden' : 'visible'}`}>
                            <Button type="main" content="Show Mobile View" onClick={() => setIsMobileView2(true)} />
                        </div>
                        <div className={`${isMobileView2 ? 'visible' : 'hidden'}`}>
                            <Button type="main" content="Show Desktop View" onClick={() => setIsMobileView2(false)} />
                        </div>
                    </div>
                </div>
                <div className="fm-col2 flex-1">
                    <div className={`img-desktop ${isMobileView2 ? 'hidden' : 'visible'}`}>
                        <Zoom>
                            <img
                                src={fe8RoomHomepage.src}
                                alt="Frontend Mentor Room Homepage"
                                width="500"
                                className='rounded-xl'
                                draggable={false}
                            />
                        </Zoom>
                    </div>
                    <div className={`img-mobile flex justify-start ${isMobileView2 ? 'visible' : 'hidden'}`}>
                        <Zoom>
                            <img
                                src={fe8RoomHomepageMobile.src}
                                alt="Frontend Mentor Room Homepage"
                                width="250"
                                className='rounded-xl'
                                draggable={false}
                            />
                        </Zoom>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="fm-row flex">
                <div className="fm-col2 flex-1">
                    <div className={`img-desktop ${isMobileView1 ? 'hidden' : 'visible'}`}>
                        <Zoom>
                            <img
                                src={fe10Ecommerce.src}
                                alt="Frontend Mentor E-Commerce"
                                width="500"
                                className='rounded-xl'
                                draggable={false}
                            />
                        </Zoom>
                    </div>
                    <div className={`img-mobile flex justify-end ${isMobileView1 ? 'visible' : 'hidden'}`}>
                        <Zoom>
                            <img
                                src={fe10EcommerceMobile.src}
                                alt="Frontend Mentor E-Commerce"
                                width="250"
                                className='rounded-xl'
                                draggable={false}
                            />
                        </Zoom>
                    </div>
                </div>
                <div className="fm-col1 flex-1 ml-10 text-left">
                    <h2 className="mb-4 text-3xl text-white">E-commerce</h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod rem ullam labore soluta explicabo dolores autem fugit recusandae unde. Non repellendus perferendis cum eos. Fuga alias quae magni laudantium!
                    <div className="row mt-4 flex flex-nowrap justify-start">
                        <Button type="main" content="View Code"
                            onClick={() => window.open('https://github.com/unimibYNGX/fe10-ecommerce')
                            } />
                        <div className="mx-2"></div>
                        <Button type="main" content="Preview Site"
                            onClick={() => window.open('https://yangxdev.github.io/fe10-ecommerce/')}
                        />
                        <div className="mx-2"></div>
                        <div className={`${isMobileView1 ? 'hidden' : 'visible'}`}>
                            <Button type="main" content="Show Mobile View" onClick={() => setIsMobileView1(true)} />
                        </div>
                        <div className={`${isMobileView1 ? 'visible' : 'hidden'}`}>
                            <Button type="main" content="Show Desktop View" onClick={() => setIsMobileView1(false)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-xl">
                Want to see more? Check out my Frontend Mentor profile!
            </div>
            <div className="flex justify-center mt-4"><Button type="main" content="View Profile" onClick={() => window.open('https://www.frontendmentor.io/profile/yangxdev')} /></div>
        </div >
    );
}