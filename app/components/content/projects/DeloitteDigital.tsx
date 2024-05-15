import React from 'react';
import withFadeIn from '@functional/withFadeIn';
import NewButton from '../../ui/NewButton';
import { IoIosShareAlt } from 'react-icons/io';
import Badge from '../../ui/Badge';
import { FaArrowDown } from 'react-icons/fa6';
import { MdOutlineLaptop } from 'react-icons/md';

function DeloitteDigital() {
    return (
        <div id="Deloitte Digital" className="deloitte-digital w-full max-w-5xl py-20 border-b select-none border-slate-700 mx-6 md:mx-20 lg:mx-40">
            <h1 className="text-3xl text-center text-[#f0f0f0] font-bold">Work</h1>
            <h3 className="text-lg text-center text-[#f0f0f0] mt-2">From March 2023</h3>
            <div className="cards flex ml-auto my-2 mr-auto flex-col max-w-3xl">
                <div className="card text-left border border-[#fdfdfd] text-[#0f0f0f] bg-[#fdfdfd] rounded-lg p-4 mt-4">
                    <div className="gap-2 flex flex-col">
                        <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                            <div className="font-bold flex flex-row items-center gap-4"><MdOutlineLaptop size={32}/>
                                <div className="text-xl">Deloitte Digital</div>
                                </div>
                            <div className="border rounded-xl">
                                <NewButton url="https://www.deloittedigital.com/us/en.html" icon={<IoIosShareAlt />} disableZoom label={`Visit website`} light />
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="font-bold">Role: </div>
                            <div>Full-stack Developer</div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="font-bold">Time: </div>
                            <div>March 2023 - Present</div>
                        </div>
                        <div className="font-bold">Project: </div>
                        <div className="md:ml-6 ">
                            <div className="border p-3 rounded-lg">
                                <div className="font-bold">B2B Booking E-Commerce Platform</div>
                                <ul className="list-disc ml-6 my-1 text-sm">
                                    <li>Released graphical and functional updates to entire sections of the booking flow, used by 2000+ agencies worldwide to serve 1 million+ clients annually </li>
                                    <li>Communication with clients, PMs, UI/UX design and testing teams to understand requirements, provide feedback and propose solutions</li>
                                    <li>Planning, review and implementation of new designs, features, functionalities and bug fixes</li>
                                    <li>Ticket and incidents handling with ServiceNow</li>
                                    <li>Communication in English and Italian</li>
                                </ul>
                                <div className='badges flex flex-row gap-2 mt-2 flex-wrap'>
                                    <Badge label="JavaScript" bgColor='#FED93F' />
                                    <Badge label="jQuery" bgColor='#0768AC' />
                                    <Badge label="Bootstrap" bgColor='#7A43B6' />
                                    <Badge label="Java" bgColor='#E11E22' />
                                    <Badge label="SQL" bgColor='#F29111' />
                                    <Badge label="GitLab" bgColor='#fc6d26' />
                                    <Badge label="ServiceNow" bgColor='#0072C6' />
                                </div>
                            </div>
                        </div>
                        <div className="font-bold">Team:</div>
                        <div className="md:ml-6 ">
                            <div className="border p-3 rounded-lg">
                                <div className="font-bold">Deloitte</div>
                                <div className="text-sm">8 technical, 3 functional, 1 Scrum Master, 1 UX/UI designer</div>
                                <div className="font-bold">Client</div>
                                <div className="text-sm">1 Product Manager, 2 testers</div>
                                <div className="badges flex flex-row gap-2 mt-2 flex-wrap">
                                    <Badge label="Agile Scrum" bgColor='#61DAFB' />
                                    <Badge label="Jira" bgColor='#0052CC' />
                                    <Badge label="Confluence" bgColor='#0052CC' />
                                    <Badge label="Figma" bgColor='#F24E1E' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withFadeIn(DeloitteDigital);