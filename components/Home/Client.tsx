"use client"
import React from "react";

export default function Clients() {
  const clientList = [
    {
      name: 'Geeftme',
      logo: '/images/geeftme.png',
      project: 'Web Application',
      year: '2024'
    },
    {
      name: 'Cloverleaf',
      logo: '/images/cloverleaf.png',
      project: 'Dashboard UI',
      year: '2023'
    },
    {
      name: 'MyArtStock',
      logo: '/images/myartstock.webp',
      project: 'E-commerce Platform',
      year: '2024'
    },
    {
      name: 'TechFlow',
      logo: '/images/techflow.png',
      project: 'SaaS Dashboard',
      year: '2023'
    },
    {
      name: 'GrowthLabs',
      logo: '/images/growthlabs.png',
      project: 'Marketing Site',
      year: '2024'
    }
  ];

  // Duplicate for infinite scroll
  const allClients = [...clientList, ...clientList];

  return (
    <section className="bg-white py-24 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Minimalist */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-mono text-gray-400 tracking-wider block">
            (02) — Trusted By
          </span>
          
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Building digital solutions for 
            <span className="font-medium block mt-2">innovative companies</span>
          </h2>
          
          {/* Stats - Minimalist Approach */}
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900">8+</div>
              <div className="text-sm text-gray-400 mt-1 font-mono">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900">5+</div>
              <div className="text-sm text-gray-400 mt-1 font-mono">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900">100%</div>
              <div className="text-sm text-gray-400 mt-1 font-mono">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Section */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll">
            {allClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-none mx-8 group"
              >
                <div className="flex flex-col items-center space-y-3">
                  {/* Logo Container */}
                  <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center p-4 border border-gray-100 group-hover:border-gray-200 transition-all">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Client Info - Appears on Hover */}
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium text-gray-900">{client.name}</p>
                    <p className="text-xs text-gray-400 font-mono mt-1">
                      {client.project} • {client.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section - Minimal */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm font-mono mb-4">TESTIMONIAL</p>
          <blockquote className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
            "Exceptional front-end work. Delivered a performant, accessible 
            interface that our users love."
          </blockquote>
          <div className="mt-6">
            <p className="text-gray-900 font-medium">— Sarah Chen</p>
            <p className="text-sm text-gray-400 font-mono">CTO, TechFlow</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors">
            <span>View case studies</span>
            <span className="w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all"></span>
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
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}