import React from 'react';
import Button from '@ui/Button';
import { useMediaQuery } from 'react-responsive';
import withFadeIn from '@functional/withFadeIn';
import { useIsDesktop } from '@functional/useIsDesktop';

function CurriculumVitae() {

    const isDesktop = useIsDesktop();

    return (
        <div id="Curriculum Vitae" className="curriculum-vitae max-w-5xl py-20 border-b select-none border-slate-700
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-3xl text-left text-white mb-4 font-bold">Curriculum Vitae</h1>
            <div className="text-left text-sm mb-4">
                Not satisfied with online resume makers, I taught myself React and Next.js to craft a personalized CV tailored to my needs. The challenging yet fulfilling process not only enhanced my skills but also resulted in a unique tool showcasing my qualifications and experiences.
            </div>
            <div className="flex justify-start">
                {isDesktop ? (
                    <embed src="https://nextjs-cv-snowy.vercel.app/" style={{ width: '90vw', height: '111.6vh' }} />
                ) : (
                    <>
                        <Button type="main" content="View CV" onClick={() => window.open('cv/XIANG_CV.pdf')} />
                        <div className="mx-2"></div>
                        <Button type="main" content="View Repository" onClick={() => window.open('https://github.com/yangxdev/nextjs-cv/tree/develop')} />
                    </>
                )}
            </div>
            {isDesktop && (
                <div className="text-left text-md my-4 flex items-center">
                    <div className="mr-4">Interested in how I made this? Check out the GitHub project!</div>
                    <Button type="main" content="View Repository" onClick={() => window.open('https://github.com/yangxdev/nextjs-cv/tree/develop')} />
                </div>
            )}
        </div>
    );
}

export default withFadeIn(CurriculumVitae);
// export default CurriculumVitae;
