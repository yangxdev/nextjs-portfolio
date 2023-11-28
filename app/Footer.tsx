import React from "react";
import Button from "./Button";

export default function Footer() {

    const footerButtons = [
        { type: 'main', content: 'Email Me', onClick: () => window.open('mailto:yangxdev@gmail.com') },
        { type: 'main', content: 'Telegram', onClick: () => window.open('https://telegram.me/yangxng') },
    ];

    return (
        <div id="Contact Me" className="footer pt-20 flex items-center flex-col justify-center select-none
            mx-6
        ">
            <div className="footer-text-title text-center text-3xl font-bold">
                GET IN TOUCH
            </div>
            <div className="footer-text-subtitle flex text-center text-sm mt-6">
                <p>
                    Let&apos;s talk about your project and how I can help you, or if you just want to chat about technology - shoot me a message at 
                    <a className="select-text"> yangxdev@gmail.com </a>
                    or Telegram.
                </p>
            </div>
            <div className="footer-text-buttons flex text-sm mt-8">
                {footerButtons.map((button, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <span className="divider mx-2"></span>}
                            {button.content === "Email Me" ? (
                                <div className="footer-button-email w-fit py-2 px-4 font-light border border-slate-500 cursor-pointer hover:bg-accent hover:text-background ease-in-out duration-200">
                                    <a
                                        draggable="false"
                                        href="mailto:yangxdev@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Email Me
                                    </a>
                                </div>
                            ) : (
                                <Button type={button.type as 'main'} content={button.content} onClick={button.onClick} />
                            )}
                        </React.Fragment>
                    ))}
            </div>
            <div className="footer-text-subsubtitle mt-16 mb-8 text-xs opacity-80 text-center">
                <p>
                    © 2023 YANGXDEV <br /> yangxdev@gmail.com <br /> Milan, Italy
                </p>
            </div>
        </div>
    )
}