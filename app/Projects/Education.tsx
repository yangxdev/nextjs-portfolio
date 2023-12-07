export default function Education() {
    return (
        <div id="Education" className="education max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-3xl text-left text-white font-bold">Education</h1>
            <h3 className='text-lg text-left text-white mt-2'>From 2015</h3>
            <br />
            My educational journey in the Software Development field started since I was in high school, where I learned the fundamentals of programming and computer science. Coupled with my passion for technology and self-learning, I was able to build a solid foundation for my career. Here are the highlights of my academic pursuits:
            <div className="text-sm text-left">
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
                                <li>Developed the front-end side of a Python Flask website in a team of 2</li>
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
            </div>
            <br />
        </div>
    );
}