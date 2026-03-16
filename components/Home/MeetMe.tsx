import React from "react";
import Link from "next/link";

interface FactCardProps {
  label: string;
  value: string;
  description: string;
}

interface SocialLinkProps {
  href: string;
  label: string;
}

export default function AboutMe(): React.ReactElement {
  // Fact Card Component
  const FactCard = ({ label, value, description }: FactCardProps): React.ReactElement => (
    <div className="p-6 border border-gray-100 space-y-2">
      <p className="text-xs font-mono text-gray-400">{label}</p>
      <p className="text-3xl font-light text-gray-900">{value}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );

  // Social Link Component
  const SocialLink = ({ href, label }: SocialLinkProps): React.ReactElement => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors"
    >
      <span>{label}</span>
      <span className="w-4 h-[1px] bg-gray-300 group-hover:w-6 transition-all" />
    </a>
  );

  return (
    <section className="bg-white py-24 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm font-mono text-gray-400 tracking-wider block">
            (04) — About Me
          </span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            
            {/* Name & Title */}
            <div>
              <h2 className="text-6xl lg:text-7xl font-light tracking-tight text-gray-900">
                Kennedy
                <span className="block font-medium text-gray-400 mt-2 text-2xl lg:text-3xl">
                  Front-End Developer
                </span>
              </h2>
            </div>

            {/* Bio Sections */}
            <div className="space-y-8">
              
              {/* Section 1 - Experience */}
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  I'm a front-end developer with over 4 years of experience 
                  turning complex problems into elegant, performant web solutions. 
                  I've collaborated with startups and established companies across
                  <span className="text-gray-900 font-medium"> Fintech, AI, and E-commerce</span>, 
                  helping them build interfaces that users love.
                </p>
              </div>

              {/* Section 2 - Approach */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                  My Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether it's a complex dashboard, an interactive web app, or a 
                  component library, I focus on writing clean, maintainable code 
                  that scales. I believe in building experiences that are not just 
                  visually appealing, but accessible, performant, and a joy to use.
                </p>
              </div>

              {/* Section 3 - Philosophy */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">
                  Beyond Code
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I care about people — users, team members, and collaborators. 
                  Great software isn't just about technology; it's about solving 
                  real problems for real people. I bring this human-centered 
                  approach to every project I work on.
                </p>
              </div>

              {/* Quote */}
              <div className="pt-6">
                <blockquote className="text-xl lg:text-2xl text-gray-300 font-light italic border-l-2 border-gray-200 pl-6">
                  "Clean code isn't just about making computers happy — 
                  it's about making developers happy and users delighted."
                </blockquote>
                <p className="text-sm text-gray-400 mt-3 font-mono">
                  — Kennedy
                </p>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <Link href="/about">
                  <button className="group inline-flex items-center gap-4 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors">
                    <span>More about me</span>
                    <span className="w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Section */}
          <div className="space-y-8">
            
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
                <img
                  src="/images/myself.png"
                  alt="Kennedy - Front-End Developer"
className="w-full h-full object-cover grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-700"                />
              </div>
              
              {/* Minimal Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gray-200 -z-10" />
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              <FactCard 
                label="YEARS"
                value="4+"
                description="Front-End Development"
              />
              <FactCard 
                label="PROJECTS"
                value="25+"
                description="Shipped to production"
              />
              <FactCard 
                label="TECH"
                value="10+"
                description="Technologies mastered"
              />
              <FactCard 
                label="CLIENTS"
                value="15+"
                description="Startups & enterprises"
              />
            </div>

            {/* Current Focus */}
            <div className="bg-gray-50 p-8 space-y-4">
              <h4 className="text-xs font-mono text-gray-400 tracking-wider">
                CURRENT FOCUS
              </h4>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deepening expertise in WebAssembly and advanced animation 
                  techniques to create more immersive web experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-xs font-mono text-gray-500 border border-gray-200">
                    WebAssembly
                  </span>
                  <span className="px-3 py-1 bg-white text-xs font-mono text-gray-500 border border-gray-200">
                    Framer Motion
                  </span>
                  <span className="px-3 py-1 bg-white text-xs font-mono text-gray-500 border border-gray-200">
                    Three.js
                  </span>
                </div>
              </div>
            </div>

            {/* Social/Contact Links */}
            <div className="flex gap-6 pt-4">
              <SocialLink href="https://github.com/kennedy" label="GitHub" />
              <SocialLink href="https://linkedin.com/in/kennedy" label="LinkedIn" />
              <SocialLink href="https://twitter.com/kennedy" label="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}