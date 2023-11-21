import { useRef, useState, useEffect } from "react";
import Button from "../Button";
import React from "react";
import toast from "react-hot-toast";

export default function CoverLetterMaker() {
    const inputField = "text-white bg-transparent focus:outline-none border-r border-slate-500 mt-4 text-center";

    const [cvText, setCvText] = useState("");
    const inputName = useRef<HTMLInputElement>(null);
    const inputCompany = useRef<HTMLInputElement>(null);
    const inputRole = useRef<HTMLInputElement>(null);
    const inputDegree = useRef<HTMLInputElement>(null);
    const inputCourse = useRef<HTMLInputElement>(null);
    const inputSchool = useRef<HTMLInputElement>(null);
    const inputExperience1 = useRef<HTMLInputElement>(null);
    const inputExperience2 = useRef<HTMLInputElement>(null);

    const getCvText = () => {
        const name = inputName.current?.value;
        const company = inputCompany.current?.value;
        const role = inputRole.current?.value;
        const degree = inputDegree.current?.value;
        const course = inputCourse.current?.value;
        const school = inputSchool.current?.value;
        const experience1 = inputExperience1.current?.value;
        const experience2 = inputExperience2.current?.value;

        const updatedCvText = `Dear Recruiter of ${company},\nNice to meet you! My name is ${name} and I’m writing to you to express my interest in the position as a ${role} at this company. With nearly two years of experience in full-stack development (with great focus on the front-end technologies) at work, during university and on various personal projects, and having just completed my studies for the ${degree} in ${course} at ${school}, I’m enthusiastic about the opportunity to join your innovative team.\nWith a strong foundation in full-stack technologies, including extensive experience with JavaScript (jQuery, React / NextJS) and Java (JSP), I am confident in my ability to contribute effectively to your company. My background in full-stack development in an Scrum Agile team of 10 for an international e-commerce platform, coupled with my academic achievements in Computer Science, positions me well to thrive in a dynamic and innovative environment like yours. Additionally, my goal to work internationally aligns perfectly with the global nature of your company, and I am eager to bring my skills and enthusiasm to your esteemed team.\nLooking forward to hearing from you, I wish you a nice day!\nSincerely,\n${name}`;

        toast("Cover letter generated!",
            {
                icon: '✔️',
                duration: 2000,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
        setCvText(updatedCvText);
    };

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const allElemsAreEmpty = (elems: NodeListOf<HTMLInputElement> | { value: string; }[] | undefined) => {
        let status = false;
        elems?.forEach((input: { value: string; }) => {
            if (input.value === "") {
                status = true;
            }
        });
        return status;
    }

    const clmRef = useRef<HTMLElement>(null);
    const inputRefs = Array.from(clmRef.current?.querySelectorAll('input') || []).map((input) => React.createRef<HTMLInputElement>());
    const dependencies = inputRefs.map((ref) => ref.current?.value);

    useEffect(() => {
            const inputs = clmRef.current?.querySelectorAll('input');
            let status = allElemsAreEmpty(inputs);
            setIsButtonDisabled(status);
        }, [...dependencies]
    );

    const handleInputChange = () => {
        const inputs = clmRef.current?.querySelectorAll('input');
        let status = allElemsAreEmpty(inputs);
        setIsButtonDisabled(status);
    };

    const cvTextRef = useRef<HTMLElement>(null);
    return (
        <div id="CLM" ref={clmRef as React.RefObject<HTMLDivElement>} className="landing max-w-5xl mx-40 select-none py-20 border-b border-slate-700">
            <h1 className="text-5xl text-center text-white">Cover Letter Maker</h1>
            <br />
            <p className="text-center text-white">Fill in the fields below and click on Generate to create your own cover letter!</p>
            <br /> <br />
            <div className="flex justify-center max-w-6l flex-wrap">
                <input type="text" className={inputField} ref={inputName} placeholder="Enter your name" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputCompany} placeholder="Enter company name" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputRole} placeholder="Enter role" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputDegree} placeholder="Enter your degree" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputCourse} placeholder="Enter your course" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputSchool} placeholder="Enter your school" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputExperience1} placeholder="Enter your 1st experience" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputExperience2} placeholder="Enter your 2nd experience" onChange={handleInputChange} />
            </div>
            <div className="flex justify-center mt-4">
                <Button type="generate" content="Generate" onClick={getCvText} disabled={isButtonDisabled}/>
                <Button type="copy" content="Copy" onClick={() => {
                        navigator.clipboard.writeText(cvTextRef.current?.innerText || '')
                        toast("Cover letter copied!",
                            {
                                icon: '📝',
                                duration: 2000,
                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            }
                        );      
                    }}
                    disabled={isButtonDisabled} />
            </div>
            <br /> <br />
            <div className="mx-20 select-text" ref={cvTextRef as React.RefObject<HTMLDivElement>}>
                {cvText.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /><br /></React.Fragment>)}
            </div>
        </div>
    );
}

