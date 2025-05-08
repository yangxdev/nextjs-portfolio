import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import withFadeIn from '@functional/withFadeIn';
import { useIsMobile } from '@functional/useIsMobile';
import Button from '@ui/Button';
// import LogoSmall from '@logos/logo_small_gray.jpg';
import Logo from '@logos/logo_transparent.png'; import { FaArrowUp, FaLinkedin, FaTelegramPlane } from "react-icons/fa"; import { SiLinktree } from "react-icons/si";


import NewButton from './NewButton';
import { IoIosMail } from 'react-icons/io';

function Footer() {

    const footerButtons = [
        { type: 'main', content: 'Email Me', onClick: () => window.open('mailto:yangxdev@gmail.com') },
        { testid: 'Telegram', type: 'main', content: 'Telegram', onClick: () => window.open('https://telegram.me/yangxng') },
        {
            type: 'main', content: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/yangxng/')
        }
    ];

    const isMobile = useIsMobile();

    return (
        <div id="Contact Me" className="footer pt-20 flex items-center flex-col justify-center select-none
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <div className="footer-text-title text-center text-3xl font-bold">
                LET&apos;S GET IN TOUCH
            </div>
            <div className="footer-text-subtitle flex text-center text-sm mt-6 md:w-[80%]">
                <p>
                    Let&apos;s talk about your project and how I can help you, or if you just want to chat about technology - shoot me an email, text me on Telegram, or write me on LinkedIn!
                </p>
            </div>
            <div data-testid="footer-text-buttons" className={`footer-text-buttons flex items-center text-sm gap-4 mt-8 justify-center flex-wrap md:h-[55px]`}>
                <a
                    draggable="false"
                    href="mailto:yangxdev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <NewButton label="Email Me" icon={<IoIosMail />} />
                </a>
                <NewButton label="Telegram" url='https://telegram.me/yangxng' icon={<FaTelegramPlane />
                } />
                <NewButton label="LinkedIn" url='https://www.linkedin.com/in/yangxng/' icon={<FaLinkedin />} />
                <NewButton label="Linktree" url='https://linktr.ee/yang.xng'
                    icon={<SiLinktree />
                    }
                />
            </div>
            <div className="footer-text-subsubtitle relative mt-8 mb-8 text-xs opacity-100 text-center">
                <div className="opacity-80">
                    <div data-testid="footer-copyright" className="mb-1">© 2025 YANGXDEV / YX STUDIO</div>
                    <div data-testid="footer-piva" className="mb-1">VAT 04774640405</div>
                    <div data-testid="footer-email" className="mb-1">yangxdev@gmail.com</div>
                    <div data-testid="footer-location" className="mb-1">Milan, Italy</div>
                </div>
                <Image
                    src={Logo.src}
                    alt="YX Logo"
                    width={1000}
                    height={0}
                    className='footer-logo w-[6rem] h-auto rounded-xl p-6 left-0 right-0 m-auto -z-50 cursor-pointer opacity-80 hover:opacity-100 transition-all hover:scale-110 duration-200 ease-in-out'
                    draggable={false}
                    priority={true}
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                />
                <div className="opacity-80 mt-1 flex flex-row items-center justify-center gap-1">
                    Press the logo to scroll to the top <FaArrowUp />

                </div>
            </div>
        </div>
    )
}

export default withFadeIn(Footer);