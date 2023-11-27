import React from "react";
import Button from "./Button";

export default function Biography() {

    const biographyButtons: { type: 'main'; content: string; onClick?: () => void }[] = [
        { type: 'main', content: 'LinkedIn Profile', onClick: () => window.open('https://www.linkedin.com/in/yangxng/', '_blank') },
    ];

    return (
        <div id="Biography" className="biography max-w-5xl mx-40 py-20 h-full select-none border-b border-slate-700">
            <div className="biography-text flex flex-row">
                <div className="biography-text-col1 text-xl mr-8">
                    <p>
                        <strong>Academic Journey</strong>
                        After completing my high school education in Information Technology, I pursued my passion for computers and technology and enrolled in a Computer Science program at University of Milan-Bicocca. During my time there, I gained a solid foundation in programming, algorithm, and software development methodologies
                    </p>
                    
                    <p>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At perspiciatis officiis dolores eaque, non consequuntur esse ad architecto odio incidunt quod? Ex unde quidem tempore obcaecati impedit expedita atque accusamus.
                    </p>

                    <div className="text-base mt-4">
                        {biographyButtons.map((button, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <span className="divider mx-1 opacity-50 select-none">/</span>}
                                <Button type={button.type} content={button.content} onClick={button.onClick} />
                            </React.Fragment>
                        ))}
                    </div>

                </div>
                <div className="biography-text-col2 text-sm">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aspernatur officiis minus voluptatum repellat delectus magnam repellendus similique unde optio laboriosam neque assumenda, illo, ducimus iste expedita ratione ad adipisci.</p>

                    <p><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam corrupti ea dignissimos modi quisquam rerum aspernatur ipsum rem officia repellat, vitae nisi, enim quibusdam soluta saepe laudantium laborum ad.</p>

                    <p><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam corrupti ea dignissimos modi quisquam rerum aspernatur ipsum rem officia repellat, vitae nisi, enim quibusdam soluta saepe laudantium laborum ad.</p>
                </div>
            </div>
        </div>
    );
}
