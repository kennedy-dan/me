"use client"
import React, { useEffect, useState } from "react";
import ProjectSnippet from "../UI/Cards/ProjectSnippet";
import useWindowSize from "@/hooks/useWindowSize";

// Define TypeScript interfaces
interface ProjectShot {
  snippet: string;
  name: string;
  year: string;
  category?: string;
  tech?: string[];
}

interface ShowcaseDocument {
  shots: ProjectShot;
}

export default function Showcase(): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shots, setShots] = useState<ShowcaseDocument[] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { isLargeScreen } = useWindowSize();

  // Local shots data array with enhanced info
  const localShotsData: ShowcaseDocument[] = [
    {
      shots: {
        snippet: '/images/shot1.png',
        name: "Epump",
        year: "2025",
        category: "Fintech Dashboard",
        tech: ["React", "D3.js", "Tailwind"]
      },
    },
    {
      shots: {
        snippet: '/images/shot2.png',
        name: "Project Alpha",
        year: "2024",
        category: "E-commerce Platform",
        tech: ["Next.js", "TypeScript", "Stripe"]
      },
    },
    {
      shots: {
        snippet: '/images/weoutproject.png',
        name: "Project Beta",
        year: "2024",
        category: "Social Media App",
        tech: ["React Native", "Firebase"]
      },
    },
    {
      shots: {
        snippet: '/images/shot3.png',
        name: "Project Gamma",
        year: "2023",
        category: "Analytics Dashboard",
        tech: ["Vue.js", "Chart.js", "Node"]
      },
    },
    {
      shots: {
        snippet: '/images/cloverleafproject.png',
        name: "Project Delta",
        year: "2023",
        category: "CRM Platform",
        tech: ["Angular", "NgRx", "Material"]
      },
    },
    {
      shots: {
        snippet: '/images/shot4.png',
        name: "Project Epsilon",
        year: "2022",
        category: "Portfolio Website",
        tech: ["HTML5", "CSS3", "JavaScript"]
      },
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay (optional)
    setTimeout(() => {
      setShots(localShotsData);
      setIsLoading(false);
    }, 500);
  }, []);

  let top: ShowcaseDocument[] | undefined;
  let bottom: ShowcaseDocument[] | undefined;
  let allBottoms: ShowcaseDocument[] | undefined;

  if (shots && !isLoading) {
    let images = [...shots];
    let half = Math.floor(images.length / 2);
    top = images.splice(0, half);
    bottom = images;
  }
  
  bottom && (allBottoms = [...bottom, ...bottom]);

  return (
    <section className="bg-white py-24 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-sm font-mono text-gray-400 tracking-wider block">
              (06) — Visual Showcase
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 max-w-2xl leading-relaxed">
              Recent
              <span className="font-medium block mt-2">work snapshots</span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-sm max-w-xs font-mono leading-relaxed">
            A glimpse into recent projects and UI explorations
          </p>
        </div>

        {/* Showcase Carousels */}
        {!isLoading && top && top.length > 0 && allBottoms && (
          <div className="space-y-8 relative">
            
            {/* Top Row - Right to Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-reverse">
                {[...top, ...top].map((data, index) => {
                  let item = data?.shots;
                  return (
                    <div 
                      key={`top-${index}`}
                      className="flex-none mx-3 lg:mx-4"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <ProjectSnippet 
                        {...item} 
                        isHovered={hoveredIndex === index}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Row - Left to Right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {allBottoms.map((data, index) => {
                  let item = data?.shots;
                  return (
                    <div 
                      key={`bottom-${index}`}
                      className="flex-none mx-3 lg:mx-4"
                      onMouseEnter={() => setHoveredIndex(index + (top?.length || 0))}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <ProjectSnippet 
                        {...item} 
                        isHovered={hoveredIndex === index + (top?.length || 0)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-40">
            <div className="flex gap-2">
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150" />
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-300" />
            </div>
          </div>
        )}

        {/* View All Link */}
        <div className="text-center pt-8">
          <button className="group inline-flex items-center gap-4 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors">
            <span>View all projects</span>
            <span className="w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all" />
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        
        @keyframes scroll-reverse {
          0% {
            transform: translateX(calc(-100% / 2));
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
          width: fit-content;
        }
        
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}