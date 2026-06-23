'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import Logo from '@logos/logo_transparent.png';

// Full-screen maintenance overlay. Sits above all page content, blocks every
// interaction (scroll, clicks, keyboard navigation) so the out-of-date site
// underneath is never reachable while it's being rebuilt.
export default function Maintenance() {
    useEffect(() => {
        // Lock scrolling on both html and body for cross-browser coverage.
        const { documentElement, body } = document;
        const prev = {
            htmlOverflow: documentElement.style.overflow,
            bodyOverflow: body.style.overflow,
        };
        documentElement.style.overflow = 'hidden';
        body.style.overflow = 'hidden';

        // Swallow keyboard-driven scrolling/navigation (space, arrows, page keys, tab).
        const blockKeys = (e: KeyboardEvent) => {
            const keys = [
                ' ', 'Spacebar', 'PageUp', 'PageDown', 'Home', 'End',
                'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab',
            ];
            if (keys.includes(e.key)) {
                e.preventDefault();
            }
        };
        window.addEventListener('keydown', blockKeys, { passive: false });

        return () => {
            documentElement.style.overflow = prev.htmlOverflow;
            body.style.overflow = prev.bodyOverflow;
            window.removeEventListener('keydown', blockKeys);
        };
    }, []);

    return (
        <div
            role="dialog"
            aria-label="Site under maintenance"
            aria-modal="true"
            onWheelCapture={(e) => e.preventDefault()}
            onTouchMoveCapture={(e) => e.preventDefault()}
            className="fixed inset-0 z-[99999] flex select-none items-center justify-center overflow-hidden px-6 text-center"
            style={{
                backgroundColor: 'var(--palette-darkest, #0e0e0e)',
                color: 'var(--palette-white, #fdfdfd)',
                touchAction: 'none',
                overscrollBehavior: 'none',
                // The site's custom animated cursor renders behind this overlay
                // and hides the native cursor (`body { cursor: none }`), so make
                // sure a normal cursor is visible on the maintenance screen.
                cursor: 'default',
            }}
        >
            {/* Subtle radial glow for depth */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(60% 60% at 50% 40%, rgba(253,253,253,0.06) 0%, rgba(253,253,253,0) 70%)',
                }}
            />

            <div className="relative flex max-w-xl flex-col items-center">
                <Image
                    src={Logo.src}
                    alt="YX Logo"
                    width={72}
                    height={72}
                    draggable={false}
                    className="mb-10 h-auto w-[3.25rem] opacity-95"
                    style={{ animation: 'maintenance-breathe 4s ease-in-out infinite' }}
                />

                <div className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] opacity-60">
                    <span
                        className="inline-block h-2 w-2 rounded-full bg-white"
                        style={{ animation: 'maintenance-pulse 2s ease-in-out infinite' }}
                    />
                    Under Maintenance
                </div>

                <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    We&apos;ll be back soon.
                </h1>

                <p className="mt-5 max-w-md text-sm font-light leading-relaxed opacity-60 sm:text-base">
                    This site is currently being rebuilt. Thanks for your patience —
                    something new is on the way.
                </p>

                <a
                    href="mailto:yangxdev@gmail.com"
                    className="mt-10 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-white/60 hover:bg-white hover:text-black"
                    style={{ cursor: 'pointer' }}
                >
                    Get in touch
                </a>
            </div>

            <style jsx>{`
                @keyframes maintenance-pulse {
                    0%,
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.35;
                        transform: scale(0.8);
                    }
                }
                @keyframes maintenance-breathe {
                    0%,
                    100% {
                        opacity: 0.95;
                        transform: translateY(0);
                    }
                    50% {
                        opacity: 0.65;
                        transform: translateY(-4px);
                    }
                }
            `}</style>
        </div>
    );
}
