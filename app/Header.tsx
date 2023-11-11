import React from 'react';
import Button from './Button';

type ButtonType = 'header' | 'begin' | 'logo';

export default function Header() {
    const menuButtons: { type: "header" | "begin" | "logo"; content: string }[] = [
        { type: 'header', content: 'LinkedIn' },
        { type: 'header', content: 'GitHub' },
        { type: 'header', content: 'Resume' },
    ];

    return (
        <div className="header w-full mb-auto py-5 px-6">
            <div className="row flex flex-nowrap justify-between items-center">
                <Button type="logo" content="YANGXDEV" />
                <div className="menu flex flex-nowrap">
                    {menuButtons.map((button, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <span className="divider mx-1 opacity-50 select-none">/</span>}
                            <Button type={button.type} content={button.content} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
