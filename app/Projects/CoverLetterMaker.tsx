import { useRef, useState, useEffect } from "react";
import Button from "../Button";
import React from "react";

export default function CoverLetterMaker() {
    const inputField = "text-white bg-transparent focus:outline-none border-r border-slate-500 mt-4 text-center";

    const [cvText, setCvText] = useState("");
    const cvTextRef = useRef(null);
    const inputName = useRef(null);
    const inputCompany = useRef(null);
    const inputRole = useRef(null);

    const getCvText = () => {
        const name = inputName.current.value;
        const company = inputCompany.current.value;
        const role = inputRole.current.value;

        const updatedCvText = `Dear Recruiter of ${company},\nNice to meet you! My name is ${name} and I’m writing to you to express my interest in the position as a ${role} at this company. With nearly two years of experience in full-stack development (with great focus on the front-end technologies) at work, during university and on various personal projects, and having just completed my studies for the Bachelor Degree in Computer Science at the University of Milan-Bicocca, I’m enthusiastic about the opportunity to join your innovative team.\nWith a strong foundation in full-stack technologies, including extensive experience with JavaScript (jQuery, React / NextJS) and Java (JSP), I am confident in my ability to contribute effectively to your company. My background in full-stack development in an Scrum Agile team of 10 for an international e-commerce platform, coupled with my academic achievements in Computer Science, positions me well to thrive in a dynamic and innovative environment like yours. Additionally, my goal to work internationally aligns perfectly with the global nature of your company, and I am eager to bring my skills and enthusiasm to your esteemed team.\nLooking forward to hearing from you, I wish you a nice day!\nSincerely,\n${name}`;

        setCvText(updatedCvText);
    };

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const status = (inputName.current?.value === "" || inputCompany.current?.value === "" || inputRole.current?.value === "");
        setIsButtonDisabled(
            status
        );
    }, [inputName.current?.value, inputCompany.current?.value, inputRole.current?.value]);

    const handleInputChange = () => {
        const status = (inputName.current?.value === "" || inputCompany.current?.value === "" || inputRole.current?.value === "");
        setIsButtonDisabled(status);
    };

    return (
        <div id="CLM" className="landing max-w-5xl mx-40 select-none py-20 border-b border-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit provident iusto, eos a, ab culpa impedit incidunt aspernatur hic doloribus eveniet quia odit, expedita veniam non repudiandae soluta vero.
            <br /> <br />
            <div className="flex justify-center">
                <input type="text" className={inputField} ref={inputName} placeholder="Enter your name" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputCompany} placeholder="Enter company name" onChange={handleInputChange} />
                <input type="text" className={inputField} ref={inputRole} placeholder="Enter role" onChange={handleInputChange} />
            </div>
            <div className="flex justify-center mt-4">
                <Button type="send" content="Send" onClick={getCvText} disabled={isButtonDisabled}/>
                <Button type="copy" content="Copy" onClick={() => navigator.clipboard.writeText(cvTextRef.current?.innerText)} disabled={isButtonDisabled} />
            </div>
            {/* <input type="text" className={inputField} placeholder="Enter */}
            {/* <input type="text" className={inputField} placeholder="Enter tone of the letter" /> */}
            <br /> <br />
            <div className="mx-20 select-text" ref={cvTextRef}>
                {cvText.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /><br /></React.Fragment>)}
            </div>
        </div>
    );
}

