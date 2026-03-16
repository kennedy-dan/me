"use client"
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const targetRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Subtle parallax effect on the background
  useEffect(() => {
    interface MousePosition {
      x: number;
      y: number;
    }

    type MouseMoveHandler = (e: MouseEvent) => void;

    const handleMouseMove: MouseMoveHandler = (e) => {
      const pos: MousePosition = {
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
      };
      setMousePosition(pos);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="" ref={targetRef}>
      {/* Hero Section with Minimalist Design */}
      <section className="relative md:pt-40 w-full bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        
        {/* Subtle Geometric Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #9CA3AF 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 lg:px-12 max-w-7xl mx-auto">
          
     

          {/* Main Heading */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900">
                Crafting
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 mt-2">
                digital experiences
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-500 mt-2">
                with code.
              </span>
            </h1>

        

            {/* Stats/Highlights - Minimalist Approach */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 opacity-0 animate-fade-in-up max-w-2xl"
                 style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div>
                <div className="text-3xl font-light text-gray-900">3+</div>
                <div className="text-sm text-gray-500 mt-1">Years Building</div>
              </div>
              <div>
                <div className="text-3xl font-light text-gray-900">20+</div>
                <div className="text-sm text-gray-500 mt-1">Projects Delivered</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-light text-gray-900">100%</div>
                <div className="text-sm text-gray-500 mt-1">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons - Clean and Minimal */}
            <div className="flex flex-wrap gap-4 pt-8 opacity-0 animate-fade-in-up"
                 style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <Link href="/works">
                <button className="group relative px-8 py-4 bg-gray-900 text-white text-sm font-medium overflow-hidden transition-all hover:bg-gray-800">
                  <span className="relative z-10">View work</span>
                  <span className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
              </Link>
              
              <Link href="/contact">
                <button className="px-8 py-4 border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-300 hover:text-gray-900 transition-all bg-white/50 backdrop-blur-sm">
                  Let's talk
                </button>
              </Link>
            </div>

            {/* Tech Stack Icons - Subtle Addition */}
            <div className="flex items-center gap-6 pt-12 opacity-0 animate-fade-in-up"
                 style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <span className="text-xs text-gray-400 tracking-wider uppercase">Tech stack</span>
              <div className="flex gap-4 text-gray-300">
                <span className="text-sm hover:text-gray-600 transition-colors cursor-default">React</span>
                <span className="text-sm hover:text-gray-600 transition-colors cursor-default">Next.js</span>
                <span className="text-sm hover:text-gray-600 transition-colors cursor-default">TypeScript</span>
                <span className="text-sm hover:text-gray-600 transition-colors cursor-default">Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Decorative Elements */}
        <div className="absolute bottom-12 right-12 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-gray-200 rounded-full opacity-20" />
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="w-[1px] h-16 bg-gradient-to-b from-gray-300 to-transparent mx-auto" />
          <p className="text-xs text-gray-400 mt-2 tracking-widest uppercase">Scroll</p>
        </div>
      </section>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}