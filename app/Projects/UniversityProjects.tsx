import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../Button';

export default function UniversityProjects() {

    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [isMobileView1, setIsMobileView1] = useState(isMobile);
    const [isMobileView2, setIsMobileView2] = useState(isMobile);
    const [isMobileView3, setIsMobileView3] = useState(isMobile);

    return (
        <div id="University Projects" className="university-projects max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-3xl text-left text-white font-bold">University Projects</h1>
            {/* <h3 className='text-lg text-left text-white mt-2'>From September 2020 to July 2023</h3> */}
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum sapiente quam facilis, ipsum voluptas dicta error illo, dolorum et, voluptates minus! Eos libero illum deleniti facere! Assumenda officia facilis inventore.
            <br/>
            <br/>

            <div className="fm-row flex flex-col">
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? (
                        <div className={`img-desktop max-w-2xl`}>
                            {/* <Image
                                src={}
                                alt="Frontend Mentor FAQ Accordion"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            /> */}
                        </div>
                    ) : (
                        <div className={`img-mobile max-w-full`}>
                            {/* <Image
                                src={}
                                width={5000}
                                height={0}
                                alt="Frontend Mentor FAQ Accordion"
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            /> */}
                        </div>
                    )}
                </div>
                <div className="fm-col1 flex-1 text-start mt-4">
                    <h2 className="mb-1 text-2xl font-bold text-white">
                        Distributed Systems Course Project: Flask Banking System
                    </h2>
                    <h3 className="mb-4 text-lg text-white">June 2022</h3>
                    <div className="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi quo quisquam ullam sed, molestiae dolorem, voluptatum rerum obcaecati autem, maiores doloribus numquam doloremque culpa iure dicta dolores minima explicabo?
                    </div>
                    <div className="row mt-4 flex flex-nowrap justify-left">
                        <Button type="main" content="View Code"
                            onClick={() => window.open('https://github.com/washedDragonyx/flask-banking-system')
                            } />
                        {/* <div className="mx-2"></div>
                        <Button type="main" content="Preview Site"
                            onClick={() => window.open('https://yangxdev.github.io/fe2-faq-accordion/')}
                        /> */}
                    </div>
                </div>
            </div>
            <br /><br />

            <div className="fm-row flex flex-col">
                <div className="fm-col2 flex-1 flex justify-center">
                    {!isMobile ? (
                        <div className={`img-desktop max-w-2xl`}>
                            {/* <Image
                                src={}
                                alt="Frontend Mentor FAQ Accordion"
                                width={5000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            /> */}
                        </div>
                    ) : (
                        <div className={`img-mobile max-w-full`}>
                            {/* <Image
                                src={}
                                width={5000}
                                height={0}
                                alt="Frontend Mentor FAQ Accordion"
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            /> */}
                        </div>
                    )}
                </div>
                <div className="fm-col1 flex-1 text-start mt-4">
                    <h2 className="mb-1 text-2xl font-bold text-white">
                        Mobile Devices Programming Project: Smoovie
                    </h2>
                    <h3 className="mb-4 text-lg text-white">August 2022 to September 2022</h3>
                    <div className="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione modi quo quisquam ullam sed, molestiae dolorem, voluptatum rerum obcaecati autem, maiores doloribus numquam doloremque culpa iure dicta dolores minima explicabo?
                    </div>
                    <div className="row mt-4 flex flex-nowrap justify-left">
                        <Button type="main" content="View Code"
                            onClick={() => window.open('https://github.com/Enkosz/smoovie')
                            } />
                        <div className="mx-2"></div>
                        <Button type="main" content="Preview PDF (Italian)"
                            onClick={() => window.open('https://pdfhost.io/v/CxM7lb3n2_Smoovie')}
                        />
                    </div>
                </div>
            </div>

            {/* <div className="text-sm text-left">
                <ul style={{ listStyleType: 'square' }} className="ml-6">
                    <li>
                        <div className="text-base font-bold mt-4">
                            University of Milan-Bicocca, Milan, Italy
                        </div>
                        <div className="text-base font-bold mt-4">
                            Degree:
                        </div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>BSc in <strong>Computer Science</strong></li>
                        </ul>
                        <div className="text-base font-bold mt-4">
                            Time period:
                        </div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>September 2020 - July 2023</li>
                        </ul>
                        <div className="text-base font-bold mt-4">Projects: </div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li><strong>Mobile Devices Programming</strong></li>
                            <ul style={{ listStyleType: 'circle' }} className="ml-6">
                                <li>Developed, managed the front-end side of an Android application in a team of 4</li>
                                <li>Android Studio (Java)</li>
                                <li>Version Control (GitHub)</li>
                            </ul>
                            <li><strong>Distributed Systems</strong></li>
                            <ul style={{ listStyleType: 'circle' }} className="ml-6">
                                <li>Developed the front-end side of a Python Flask website</li>
                                <li>Managed server-side data (REST) and frontend-backend communication</li>
                            </ul>
                        </ul>
                        <div className="text-base font-bold mt-4">Certifications:</div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li><strong>Open Badge Bbetween English</strong>: C1</li>
                            <li><strong>OLS (Erasmus+ English Test)</strong>: C1</li>
                        </ul>
                    </li>
                    <hr className="mt-4 border-slate-400" />
                    <li>
                        <div className="text-base font-bold mt-4">
                            ITTS &quot;Belluzzi - Da Vinci&quot;, Rimini, Italy
                        </div>
                        <div className="text-base font-bold mt-4">
                            Degree:
                        </div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>High School Diploma in <strong>Information Technology</strong></li>
                        </ul>
                        <div className="text-base font-bold mt-4">
                            Time period:
                        </div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>September 2015 - July 2020</li>
                        </ul>
                        <div className="text-base font-bold mt-4">
                            Relevant courses:
                        </div>
                        <ul style={{ listStyleType: 'disc' }} className="ml-6">
                            <li>Web Technology</li>
                            <li>Computer Networking</li>
                        </ul>
                    </li>
                </ul>
            </div> */}
            <br />
        </div>
    );
}