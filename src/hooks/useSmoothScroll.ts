import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function useSmoothScroll() {
    React.useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenis.on('scroll', ScrollTrigger.update);

        function raf(time: number) {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(raf);

        gsap.ticker.lagSmoothing(0);

        (window as any).lenis = lenis;

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
            delete (window as any).lenis;
        };
    }, []);
}
