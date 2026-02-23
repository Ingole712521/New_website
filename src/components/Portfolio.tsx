import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';

import rupeshImg from '../assets/image/rupesh2.png';
import raviImg from '../assets/image/ravi2.png';

interface FounderCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

function FounderCard({ name, role, image, bio }: FounderCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bioRef.current, { opacity: 0, scale: 0.95, y: 10 });
      
      const tl = gsap.timeline({ paused: true });
      
      tl.to(imageRef.current, { 
        scale: 1.1, 
        filter: "blur(5px)", 
        opacity: 0.3,
        duration: 0.5, 
        ease: "power2.out" 
      })
      .to(infoRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      }, 0)
      .to(bioRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, 0.1);

      const onMouseEnter = () => tl.play();
      const onMouseLeave = () => tl.reverse();

      cardRef.current?.addEventListener('mouseenter', onMouseEnter);
      cardRef.current?.addEventListener('mouseleave', onMouseLeave);

      return () => {
        cardRef.current?.removeEventListener('mouseenter', onMouseEnter);
        cardRef.current?.removeEventListener('mouseleave', onMouseLeave);
      };
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="relative group bg-black aspect-[3/4] overflow-hidden cursor-pointer border border-white/5"
    >
      <div className="absolute top-2 left-2 z-30 text-white/40"><Plus size={16} /></div>
      <div className="absolute top-2 right-2 z-30 text-white/40"><Plus size={16} /></div>
      <div className="absolute bottom-2 left-2 z-30 text-white/40"><Plus size={16} /></div>
      <div className="absolute bottom-2 right-2 z-30 text-white/40"><Plus size={16} /></div>

      <img 
        ref={imageRef}
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-top transition-transform duration-700"
      />

      <div 
        ref={infoRef}
        className="absolute bottom-10 left-0 w-full text-center z-10 px-6"
      >
        <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-1">{role}</p>
        <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
      </div>

      <div 
        ref={bioRef}
        className="absolute inset-0 flex items-center justify-center z-20 px-8 text-center bg-black/40 backdrop-blur-sm"
      >
        <p className="text-sm md:text-base text-gray-200 leading-relaxed font-medium">
          {bio}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export function Portfolio() {
  const founders = [
    {
      name: "Rupesh",
      role: "Founder",
      image: rupeshImg,
      bio: `As a Graphic Designer and Fine Arts graduate specializing in Illustration, I bridge the gap between artistic storytelling and strategic brand communication. With extensive experience in digital and print platforms, my work centers on clarity, consistency, and precise brand alignment. I leverage deep proficiency in Adobe Photoshop and 2D illustration to transform complex marketing objectives into compelling visual assets for social media and creative campaigns. Beyond technical execution, I am a detail-oriented problem solver committed to continuous growth. My goal is to deliver sophisticated, professional visual solutions that elevate brand identity and drive tangible business results in a competitive market.`
    },
    {
      name: "Ravi",
      role: "Founder",
      image: raviImg,
      bio: `As a designer with a background in Information Technology, I blend technical logic with creative storytelling to build impactful marketing websites. Since starting my design career in December 2022, I have specialized in creating high-conversion digital content and precise print materials.

My journey is defined by a commitment to continuous learning and a drive to provide the best possible visual solutions for the industry.`
    }
  ];

}

  return (
    <section className="py-32 bg-black border-t border-white/5 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Our Architects</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            The visionary minds behind R Square Visuals, bridging the gap between technical precision and creative expression.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, idx) => (
            <FounderCard key={idx} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
