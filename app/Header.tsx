"use client";
import React from 'react';
import Button from './Button';
import { useMediaQuery } from 'react-responsive';
import { useIsMobile } from './useIsMobile';
import { useIsDesktop } from './useIsDesktop';

export default function Header() {
    const menuButtons: { type: 'header' | 'begin' | 'logo'; content: string; onClick?: () => void }[] = [
        { type: 'header', content: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/yangxng/', '_blank') },
        // { type: 'header', content: 'GitHub', onClick: () => window.open('https://github.com/yangxdev', '_blank') },
        { type: 'header', content: 'CV', onClick: () => window.open('/XIANG_CV.pdf')},
    ];

    // const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const isMobile = useIsMobile();
    const isDesktop = useIsDesktop();

    return (
        <div className={`header sticky
            ${isDesktop ? (
                'bg-gradient-to-b from-gray-950 to-transparent backdrop-blur backdrop-opacity-10'
                ) : (
                'bg-gradient-to-b from-black to-blue backdrop-blur backdrop-opacity-10 pb-20'
                )} 
            w-full top-0 py-5 px-6 z-10`}>
            <div className="row flex flex-nowrap justify-between items-center">
                <Button type="logo" content="YANGXDEV" onClick={() => { 
                    // window.location.reload(); window.scrollTo(0, 0); 
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }} />
                <div className="menu flex flex-nowrap">
                    {menuButtons.map((button, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <span className={`divider opacity-50 select-none`}>/</span>}
                            <Button type={button.type} content={button.content} onClick={button.onClick} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>

    );
}
