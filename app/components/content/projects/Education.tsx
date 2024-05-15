import React from "react";
import withFadeIn from "@functional/withFadeIn";
import NewButton from "../../ui/NewButton";
import { IoIosShareAlt } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import Badge from "../../ui/Badge";

function Education() {
    return (
        <div
            id="Education"
            className="education max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        "
        >
            <h1 className="text-3xl text-left text-[#f0f0f0] font-bold">Education</h1>
            <h3 className="text-lg text-left text-[#f0f0f0] mt-2">📚 From 2015</h3>
            {/* <br />
            My educational journey in the Software Development field started since I was in high school, where I learned the fundamentals of programming and computer science. Coupled with my passion for technology and self-learning, I was able to build a solid foundation for my career. */}
            <div className="cards flex ml-auto my-2 mr-auto flex-col max-w-3xl">
                <div className="card text-left border border-[#fdfdfd] text-[#0f0f0f] bg-[#fdfdfd] rounded-lg p-4 mt-4">
                    <div className="gap-2 flex flex-col">
                        <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                            <div className="font-bold">🎓 University of Milan-Bicocca, Milan, Italy</div>
                            <div className="border rounded-xl">
                                <NewButton url="https://www.unimib.it/" icon={<IoIosShareAlt />} label={`Visit website`} light />
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="font-bold">Degree: </div>
                            <div>BSc in Computer Science</div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="font-bold">Time: </div>
                            <div>September 2020 - July 2023</div>
                        </div>
                        <div className="font-bold">Projects: </div>
                        <div className="md:ml-6 ">
                            <div className="border p-3 rounded-lg">
                                <div className="font-bold">Mobile Devices Programming</div>
                                <div>Developed, managed the front-end side of an Android application in a team of 4.</div>
                                <div className="badges h-fit items-center my-2 flex flex-row flex-wrap gap-3">
                                    <Badge label="Android Studio" bgColor="#A4C639" />
                                    <Badge label="Java" bgColor="#E11E22" />
                                    <Badge label="GitHub" bgColor="#2b3137" />
                                    <NewButton label="Go to project" icon={<FaArrowDown />} light small scrollTo="mobileDevicesProgrammingProject" />
                                </div>
                                <div className="flex items-center"></div>
                            </div>
                            <div className="border p-3 rounded-lg mt-2">
                                <div className="font-bold">Distributed Systems</div>
                                <div>Developed the front-end side of a Python Flask website in a team of 2.</div>
                                <div className="badges h-fit items-center my-2 flex flex-row flex-wrap gap-3">
                                    <Badge label="Python" bgColor="#3776ab" />
                                    {/* <Badge label="Flask" bgColor="#367E8E" /> */}
                                    <Badge label="Javascript" bgColor="#f7df1e" />
                                    <Badge label="GitHub" bgColor="#2b3137" />
                                    <NewButton label="Go to project" icon={<FaArrowDown />} light small scrollTo="distributedSystemsProject" />
                                </div>
                            </div>
                        </div>
                        <div className="font-bold">Thesis:</div>
                        <div className="md:ml-6">
                            <div className="border p-3 rounded-lg">
                                <div className="font-bold">The transition from monolithic to microservices architecture</div>
                                <div>Investigated the advantages of microservices architecture over monolithic architecture, with a case study in the tourism sector of a e-commerce platform.</div>
                                <div className="badges h-fit items-center my-2 flex flex-row gap-3 flex-wrap">
                                    {/* <Badge label="Monolithic architecture" bgColor="#2b3137" /> */}
                                    <Badge label="E-commerce" bgColor="#FFA500" />
                                    <Badge label="Microservices" bgColor="#069AF3" />
                                    <NewButton label="Go to thesis" url="university/Thesis.pdf" icon={<IoIosShareAlt />} light small />
                                    {/* <NewButton url="cv/XIANG_CV.pdf" icon={<IoIosShareAlt />} label="View CV" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="font-bold">Certifications:</div>
                        <div className="md:ml-6">
                            <Badge label="Open Badge Bbetween English: C1" bgColor="#A71E3B" />
                        </div>
                    </div>
                </div>
                <div className="card text-left border border-[#fdfdfd] text-[#0f0f0f] bg-[#fdfdfd] rounded-lg p-4 mt-4">
                    <div className="gap-3 flex flex-col">
                        <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                            <div className="font-bold">🏫 ITTS "Belluzzi - Da Vinci", Rimini, Italy</div>
                            <div className="border rounded-xl">
                                <NewButton url="https://www.ittsrimini.edu.it/" icon={<IoIosShareAlt />} label="Visit website" light />
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="font-bold">Degree: </div>
                            <div>High School Diploma in Information Technology</div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="font-bold">Time: </div>
                            <div>September 2015 - July 2020</div>
                        </div>
                        <div className="font-bold">Relevant courses:</div>
                        <div className="md:ml-6">
                            <div className="border p-3 rounded-lg">
                                <div className="font-bold">Web Technology</div>
                                <div>Learned the basics of web development, including HTML, CSS, and JavaScript.</div>
                            </div>
                            <div className="border p-3 rounded-lg mt-2">
                                <div className="font-bold">Computer Networking</div>
                                <div>Studied the principles of computer networking and network security.</div>
                            </div>
                            <div className="border p-3 rounded-lg mt-2">
                                <div className="font-bold">Programming</div>
                                <div>Developed Windows Forms applications in C#.</div>
                            </div>
                        </div>
                        <div className="font-bold">Certifications:</div>
                        <div className="md:ml-6">
                            <Badge label="OLS (Erasmus+ English Test): C1" bgColor="#003399" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withFadeIn(Education);
