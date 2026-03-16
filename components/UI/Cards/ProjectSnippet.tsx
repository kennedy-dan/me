import React from "react";

interface ProjectSnippetProps {
  snippet: string;
  name: string;
  year: string;
  category?: string;
  tech?: string[];
  isHovered?: boolean;
}

export default function ProjectSnippet({ 
  snippet, 
  name, 
  year, 
  category, 
  tech = [],
  isHovered = false 
}: ProjectSnippetProps): React.ReactElement {
  return (
    <div className="group relative w-[300px] lg:w-[380px]">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden border border-gray-100 group-hover:border-gray-200 transition-all">
        <img 
          src={snippet} 
          alt={name}
          className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Overlay with Tech Tags - Appears on Hover */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          {tech && tech.length > 0 && (
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {tech.slice(0, 3).map((t, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-mono text-gray-600"
                >
                  {t}
                </span>
              ))}
              {tech.length > 3 && (
                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-mono text-gray-400">
                  +{tech.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-gray-900 font-medium text-sm lg:text-base">
            {name}
          </h3>
          {category && (
            <p className="text-xs text-gray-400 font-mono mt-1">
              {category}
            </p>
          )}
        </div>
        <span className="text-xs text-gray-300 font-mono">
          {year}
        </span>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 border border-gray-100 -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}