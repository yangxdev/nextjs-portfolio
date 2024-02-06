'use client';
import { useState, useEffect } from 'react';

export function isUseTouchDevice() {
    // function that checks if the device is using touch input
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            if ('ontouchstart' in window) {
                setIsTouchDevice(true);
            } else {
                setIsTouchDevice(false);
            }
        };

        checkTouch();
    }, []);

    return isTouchDevice;
}

