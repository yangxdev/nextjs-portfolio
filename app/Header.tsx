"use client";
import React from 'react';
import Button from './Button';

export default function Header() {
    const menuButtons: { type: 'header' | 'begin' | 'logo'; content: string; onClick?: () => void }[] = [
        { type: 'header', content: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/yangxng/', '_blank') },
        // { type: 'header', content: 'GitHub', onClick: () => window.open('https://github.com/yangxdev', '_blank') },
        { type: 'header', content: 'CV', onClick: () => window.open('https://nextjs-enl5l81qm-yangxdev.vercel.app/')},
    ];

    return (
        <div className="header sticky bg-gradient-to-b from-gray-950 to-transparent backdrop-blur backdrop-opacity-10 w-full top-0 py-5 px-6">
            <div className="row flex flex-nowrap justify-between items-center">
                <Button type="logo" content="YANGXDEV" onClick={() => window.location.reload()} />
                <div className="menu flex flex-nowrap">
                    {menuButtons.map((button, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <span className="divider mx-1 opacity-50 select-none">/</span>}
                            <Button type={button.type} content={button.content} onClick={button.onClick} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>

    );
}
