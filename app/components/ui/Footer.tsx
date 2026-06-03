import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import withFadeIn from '@functional/withFadeIn';
import { useIsMobile } from '@functional/useIsMobile';
import Button from '@ui/Button';
// import LogoSmall from '@logos/logo_small_gray.jpg';
import Logo from '@logos/logo_transparent.png';

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
            <div className="footer-text-subtitle flex text-center text-sm mt-6">
                <p>
                    Let&apos;s talk about your project and how I can help you, or if you just want to chat about technology - shoot me an email, text me on Telegram, or write me on LinkedIn!
                </p>
            </div>
            <div data-testid="footer-text-buttons" className={`footer-text-buttons flex text-sm mt-8 ${isMobile ? 'flex-col items-center' : ''}`}>
                {footerButtons.map((button, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <span className="divider mx-2"></span>}
                        <div className={`button-mobile-wrapper ${isMobile ? 'mb-2' : ''}`}>
                            {button.content === "Email Me" ? (
                                <div data-testid="Email Me" className={`footer-button-email w-fit py-2 px-4 font-[400px] border border-slate-500 rounded-xl hover:bg-accent hover:text-background ease-in-out duration-200}`}>
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
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className="footer-text-subsubtitle relative mt-8 mb-8 text-xs opacity-100 text-center">
                <div className="opacity-80">
                    <div data-testid="footer-copyright" className="mb-1">© 2025 YANGXDEV</div>
                    <div data-testid="footer-email" className="mb-1">yangxdev@gmail.com</div>
                    <div data-testid="footer-location" className="mb-1">Milan, Italy → What&apos;s next?</div>
                </div>
                <Image
                    src={Logo.src}
                    alt="YX Logo"
                    width={1000}
                    height={0}
                    className='footer-logo w-[6rem] h-auto rounded-xl p-6 left-0 right-0 m-auto -z-50 absolute cursor-pointer opacity-80 hover:opacity-100 transition-all'
                    draggable={false}
                    priority={true}
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                />
            </div>
        </div>
    )
}

export default withFadeIn(Footer);