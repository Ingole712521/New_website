import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function CobeGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.1, 0.1],
            markerColor: [0.1, 0.8, 1],
            glowColor: [0.1, 0.1, 0.1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [12.9716, 77.5946], size: 0.1 }, // Bangalore
                { location: [23.0225, 72.5714], size: 0.05 }, // Ahmedabad
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <canvas
                ref={canvasRef}
                style={{
                    width: 600,
                    height: 600,
                    maxWidth: "100%",
                    aspectRatio: "1",
                    pointerEvents: "none"
                }}
            />
        </div>
    );
}
