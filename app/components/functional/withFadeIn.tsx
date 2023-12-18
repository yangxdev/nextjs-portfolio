import React, { ComponentType, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const withFadeIn = (WrappedComponent: ComponentType<any>) => {
    const HOC = (props: any) => {
        const [ref, inView] = useInView({
            triggerOnce: true,
        });

        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            if (inView) {
                setIsVisible(true);
            }
        }, [inView]);

        return (
            <div
                ref={ref}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s, transform 0.8s',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <WrappedComponent {...props} />
            </div>
        );
    };

    return HOC;
};

export default withFadeIn;
