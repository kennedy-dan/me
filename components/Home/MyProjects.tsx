"use client"
import React, { useState } from "react";
import Link from "next/link";
import { trimText } from "@/utils";
import useWindowSize from "@/hooks/useWindowSize";

export default function FeaturedWork() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const isLoading = false;
  const { isLargeScreen } = useWindowSize();

  const projects = [
    {
      _id: "geeftme-project",
      name: "GeeftMe",
      tag: "Social Wishlist & Gift Sharing Platform",
      role: "Front-End Developer",
      tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
      overview: "A social wishlist platform that simplifies gift-giving with real-time updates, social features, and seamless sharing capabilities.",
      challenges: "Built responsive UI components, implemented real-time updates, optimized image loading for product galleries.",
      outcome: "40% increase in user engagement, 25% faster page loads",
      imagePreview: "/images/geeftmeproject.png",
      appLogo: "/images/geeftme.png",
      industry: ["React", "Next.js", "Tailwind"],
      liveUrl: "https://geeftme.com",
      githubUrl: "https://github.com/yourusername/geeftme"
    },
    {
      _id: "cloverleaf-project",
      name: "Cloverleaf",
      tag: "Team Collaboration Platform",
      role: "Lead Front-End Developer",
      tech: ["TypeScript", "Redux", "Styled Components", "Webpack"],
      overview: "A comprehensive team collaboration tool with real-time messaging, task management, and performance analytics.",
      challenges: "Architected scalable component system, implemented real-time features, optimized for large data sets.",
      outcome: "50% reduction in bundle size, 99.9% test coverage",
      imagePreview: "/images/cloverleafproject.png",
      appLogo: "/images/cloverleaf.png",
      industry: ["TypeScript", "Redux", "Webpack"],
      liveUrl: "https://cloverleaf.com",
      githubUrl: "https://github.com/yourusername/cloverleaf"
    },
    {
      _id: "myartstock-project",
      name: "MyArtStock",
      tag: "Art Marketplace Platform",
      role: "Front-End Developer",
      tech: ["Next.js", "Context API", "CSS Modules", "Jest"],
      overview: "An online marketplace connecting artists with buyers, featuring virtual galleries and secure transactions.",
      challenges: "Built image-heavy gallery with lazy loading, implemented search filters, ensured mobile responsiveness.",
      outcome: "60% faster image loading, 4.8/5 user rating",
      imagePreview: "/images/myartstockproject.png",
      appLogo: "/images/myartstock.webp",
      industry: ["Next.js", "CSS Modules", "Jest"],
      liveUrl: "https://myartstock.com",
      githubUrl: "https://github.com/yourusername/myartstock"
    }
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-sm font-mono text-gray-400 tracking-wider mb-4 block">
            (03) — Featured Work
          </span>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-5xl lg:text-7xl font-light tracking-tight">
              Selected
              <span className="block font-medium text-gray-900 mt-2">
                projects
              </span>
            </h2>
            
            <p className="text-gray-500 max-w-md leading-relaxed">
              Real-world applications built with modern front-end technologies,
              focusing on performance, accessibility, and user experience.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        {!isLoading && (
          <div className="space-y-20">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={project._id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`
                  grid lg:grid-cols-2 gap-12 lg:gap-20 items-center
                  transition-opacity duration-500
                  ${hoveredProject !== null && hoveredProject !== index ? 'opacity-40' : 'opacity-100'}
                `}>
                  
                  {/* Project Image - Left Side (alternating) */}
                  <div className={`
                    ${index % 2 === 1 ? 'lg:order-2' : ''}
                  `}>
                    <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                      <img
                        src={project.imagePreview}
                        alt={project.name}
                        className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      
                      {/* Overlay with Quick Links */}
                      <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-all duration-300" />
                      
                      {/* Tech Tags - Overlay */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {project.tech.slice(0, 2).map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-mono text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 2 && (
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-mono text-gray-400">
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info - Right Side (alternating) */}
                  <div className={`
                    space-y-6
                    ${index % 2 === 1 ? 'lg:order-1' : ''}
                  `}>
                    {/* Project Number */}
                    <span className="text-sm font-mono text-gray-400">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>

                    {/* Title & Role */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-3">
                        {project.name}
                      </h3>
                      <p className="text-lg text-gray-400 font-mono">
                        {project.role}
                      </p>
                    </div>

                    {/* Tags */}
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.tag}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {trimText(project.overview, isLargeScreen ? 180 : 120)}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-50 text-xs font-mono text-gray-500 border border-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Outcome Metric */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-3 text-sm">
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="text-gray-400 font-mono">OUTCOME</span>
                        <span className="text-gray-900 font-medium">
                          {project.outcome}
                        </span>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 pt-4">
                      <Link href={`/project-details/${project._id}`}>
                        <button className="group/link inline-flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors">
                          <span>View case study</span>
                          <span className="w-6 h-[1px] bg-gray-300 group-hover/link:w-10 transition-all" />
                        </button>
                      </Link>
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors"
                        >
                          <span>GitHub</span>
                          <span className="w-6 h-[1px] bg-gray-300 group-hover/link:w-10 transition-all" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative Line */}
                {index < projects.length - 1 && (
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-gray-200" />
                )}
              </div>
            ))}

            {/* View All Button */}
            <div className="text-center pt-20">
              <Link href="/works">
                <button className="group inline-flex items-center gap-4 px-8 py-4 border border-gray-200 hover:border-gray-300 transition-all">
                  <span className="text-sm font-mono text-gray-400 group-hover:text-gray-600">
                    View all projects
                  </span>
                  <span className="w-6 h-[1px] bg-gray-300 group-hover:w-12 transition-all" />
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-40">
            <div className="inline-flex gap-2">
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150" />
              <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-300" />
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && projects.length < 1 && (
          <div className="text-center py-40 space-y-4">
            <p className="text-3xl font-light text-gray-300">
              No projects available
            </p>
            <p className="text-sm font-mono text-gray-400">
              Check back soon for updates
            </p>
          </div>
        )}
      </div>
    </section>
  );
}