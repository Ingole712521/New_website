import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function useSmoothScroll() {
    React.useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        // Synchronize Lenis scroll with GSAP's ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Use GSAP's responsive ticker to drive Lenis animations
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable GSAP's default lag smoothing to prevent stutters
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove((time) => { lenis.raf(time * 1000) });
            lenis.destroy();
        };
    }, []);
}
