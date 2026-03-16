"use client"
import React, { useState } from "react";
import Link from "next/link";
import ProgressBar from "../UI/ProgressBar";
import useWindowSize from "@/hooks/useWindowSize";

export default function Expertise() {
  const [active, setActive] = useState(0);
  const { isLargeScreen } = useWindowSize();
  
  const expertiseAreas = [
    {
      skill: "Front-End Architecture",
      writeUp: "Building scalable, maintainable component systems with React, Next.js, and TypeScript. Focused on code reusability and performance optimization.",
      icon: '⚛️',
      metrics: '95% code reusability',
    },
    {
      skill: "Performance Optimization",
      writeUp: "Optimizing web applications for speed and efficiency. Implementing lazy loading, code splitting, and Core Web Vitals optimization for exceptional user experiences.",
      icon: '⚡',
      metrics: '40% faster load times',
    },
    {
      skill: "Responsive Development",
      writeUp: "Creating seamless experiences across all devices with mobile-first approaches. Ensuring pixel-perfect implementations that adapt gracefully to any screen size.",
      icon: '📱',
      metrics: '100% responsive',
    },
    {
      skill: "Interactive Experiences",
      writeUp: "Building engaging interfaces with smooth animations and transitions. Leveraging Framer Motion and CSS animations to create delightful user interactions.",
      icon: '✨',
      metrics: '60% higher engagement',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Minimalist */}
        <div className="mb-20">
          <span className="text-sm font-mono text-gray-400 tracking-wider mb-4 block">
            (01) — Expertise
          </span>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-5xl lg:text-7xl font-light tracking-tight">
              Technical
              <span className="block font-medium text-gray-900 mt-2">
                capabilities
              </span>
            </h2>
            
            <p className="text-gray-500 max-w-md leading-relaxed">
              Specialized in modern web technologies and best practices 
              to deliver high-performance, accessible applications.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column - Interactive List */}
          <div className="lg:w-2/5 space-y-4">
            {expertiseAreas.map(({ skill, writeUp, icon, metrics }, index) => {
              const isActive = active === index;
              
              return (
                <div key={index} className="relative">
                  {/* Expertise Card */}
                  <div
                    onClick={() => setActive(index)}
                    className={`
                      cursor-pointer transition-all duration-500
                      ${!isLargeScreen && !isActive ? 'hidden' : 'block'}
                      ${isActive 
                        ? 'bg-gray-50' 
                        : 'hover:bg-gray-50/50'
                      }
                    `}
                  >
                    <div className="p-8">
                      {/* Header with Icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl">{icon}</span>
                        <h3 className={`
                          font-mono text-sm tracking-wider
                          ${isActive ? 'text-gray-900' : 'text-gray-400'}
                        `}>
                          {(index + 1).toString().padStart(2, '0')}
                        </h3>
                      </div>

                      {/* Skill Title */}
                      <h4 className={`
                        text-2xl font-medium mb-3 transition-colors
                        ${isActive ? 'text-gray-900' : 'text-gray-600'}
                      `}>
                        {skill}
                      </h4>

                      {/* Description - Animated */}
                      <div className={`
                        overflow-hidden transition-all duration-500 ease-out
                        ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                      `}>
                        <p className="text-gray-500 mb-4 leading-relaxed">
                          {writeUp}
                        </p>
                        
                        {/* Metrics Badge */}
                        <span className="inline-flex items-center gap-2 text-xs font-mono text-gray-400">
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          {metrics}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0">
                      <ProgressBar
                        isActive={isActive}
                        expertiseAreas={expertiseAreas}
                        setActive={setActive}
                        durationTime={8}
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {/* CTA Button */}
            <div className="pt-8">
              <Link href="/works">
                <button className="group inline-flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors">
                  <span>View projects</span>
                  <span className="w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Display */}
          <div className="lg:w-3/5 bg-gray-50 min-h-[500px] flex items-center justify-center p-12">
            <div className="text-center space-y-8">
              {/* Dynamic Icon Display */}
              <div className="text-8xl transform hover:scale-105 transition-transform duration-300">
                {expertiseAreas[active].icon}
              </div>
              
              {/* Tech Stack Visualization */}
              <div className="space-y-6">
                <h5 className="text-xs font-mono text-gray-400 tracking-wider">
                  CURRENT FOCUS
                </h5>
                
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  {active === 0 && (
                    <>
                      <TechBadge text="React" />
                      <TechBadge text="Next.js" />
                      <TechBadge text="TypeScript" />
                      <TechBadge text="Tailwind" />
                    </>
                  )}
                  {active === 1 && (
                    <>
                      <TechBadge text="Lazy Loading" />
                      <TechBadge text="Code Splitting" />
                      <TechBadge text="Core Web Vitals" />
                      <TechBadge text="Image Opt." />
                    </>
                  )}
                  {active === 2 && (
                    <>
                      <TechBadge text="Mobile First" />
                      <TechBadge text="Flex/Grid" />
                      <TechBadge text="Media Queries" />
                      <TechBadge text="Touch Events" />
                    </>
                  )}
                  {active === 3 && (
                    <>
                      <TechBadge text="Framer Motion" />
                      <TechBadge text="CSS Animations" />
                      <TechBadge text="GSAP" />
                      <TechBadge text="Micro-interactions" />
                    </>
                  )}
                </div>

                {/* Stats */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="text-3xl font-light text-gray-900">
                    {expertiseAreas[active].metrics}
                  </div>
                  <div className="text-xs text-gray-400 mt-2 font-mono">
                    ACHIEVED WITH {expertiseAreas[active].skill.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tech Badge Component
type TechBadgeProps = { text: string };

const TechBadge: React.FC<TechBadgeProps> = ({ text }) => (
  <div className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-colors">
    {text}
  </div>
);