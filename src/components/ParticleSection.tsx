import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

export function ParticleSection() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const { offsetWidth, offsetHeight } = canvasRef.current.parentElement!;
        setDimensions({ width: offsetWidth, height: offsetHeight });
        canvasRef.current.width = offsetWidth;
        canvasRef.current.height = offsetHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.from(".touch-data-text", {
             scrollTrigger: {
                 trigger: containerRef.current,
                 start: "top 80%",
             },
             opacity: 0,
             y: 20,
             duration: 1.5,
             ease: "power2.out"
         }) 
      }, containerRef);
      return () => ctx.revert();
  }, [])

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { 
        x: number; 
        y: number; 
        originX: number; 
        originY: number; 
        size: number;
        vx: number; 
        vy: number; 
        color: string;
    }[] = [];

    const spacing = 30;
    const rows = Math.ceil(canvas.height / spacing);
    const cols = Math.ceil(canvas.width / spacing);
    
    const colors = ['#3b82f6', '#06b6d4', '#6366f1'];

    particles = [];
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const size = Math.random() * 4 + 2;
            particles.push({
                x: i * spacing + spacing / 2,
                y: j * spacing + spacing / 2,
                originX: i * spacing + spacing / 2,
                originY: j * spacing + spacing / 2,
                size: size,
                vx: 0,
                vy: 0,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = 150;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * (isNaN(force) ? 0 : force) * 5;
            const directionY = forceDirectionY * (isNaN(force) ? 0 : force) * 5;

            if (distance < maxDistance) {
                p.vx -= directionX;
                p.vy -= directionY;
            } else {
                if (p.x !== p.originX) {
                    const dx = p.x - p.originX;
                    p.vx -= dx * 0.1;
                }
                if (p.y !== p.originY) {
                    const dy = p.y - p.originY;
                    p.vy -= dy * 0.1;
                }
            }

            p.vx *= 0.9;
            p.vy *= 0.9;
            p.x += p.vx;
            p.y += p.vy;

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dimensions]);

  return (
    <div className="w-full h-[400px] bg-gray-900 relative overflow-hidden" ref={containerRef}>
        <canvas ref={canvasRef} className="absolute inset-0 z-10" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <h2 className="touch-data-text text-4xl md:text-8xl font-black text-gray-800 select-none opacity-50 tracking-tighter">
                TOUCH DATA
             </h2>
        </div>
    </div>
  );
}
