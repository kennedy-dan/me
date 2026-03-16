import React from "react";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import { trimText } from "@/utils";

// Types
interface ImageField {
  url: string;
}

interface Project {
  _id: string;
  title: string;
  name?: string;
  description: string;
  client?: string;
  tag?: string;
  category: string;
  year?: string;
  image: ImageField;
  appLogo?: ImageField;
  industry?: string | string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps): React.ReactElement {
  const { isLargeScreen } = useWindowSize();

  const {
    _id,
    title,
    name,
    description,
    tag,
    image,
    appLogo,
    industry,
    year
  } = project;

  // Get image URL safely
  const getImageUrl = (img?: ImageField): string => {
    return img?.url || "/images/placeholder.jpg";
  };

  const projectImage = getImageUrl(image);
  const logo = getImageUrl(appLogo);

  // Convert industry to array if needed
  const industryArray: string[] = industry 
    ? Array.isArray(industry) 
      ? industry 
      : [industry]
    : [];

  return (
    <article className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all">
      
      {/* Image Container */}
      <Link href={`/project-details/${_id}`}>
        <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
          <img
            src={projectImage}
            alt={title}
            className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          
          {/* Year Badge */}
          {year && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-mono text-gray-400">
              {year}
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4">
        
        {/* Logo and Title */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            {logo && (
              <img 
                src={logo} 
                alt={title}
                className="h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            )}
            <h3 className="text-lg font-medium text-gray-900">
              {name || title}
            </h3>
          </div>
          
          {/* Tag */}
          {tag && (
            <span className="text-xs font-mono text-gray-300">
              {tag}
            </span>
          )}
        </div>

        {/* Industry Tags */}
        {industryArray.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {industryArray.slice(0, 2).map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 text-xs font-mono text-gray-400 border border-gray-100"
              >
                {item}
              </span>
            ))}
            {industryArray.length > 2 && (
              <span className="px-3 py-1 text-xs font-mono text-gray-300">
                +{industryArray.length - 2}
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {trimText(description, isLargeScreen ? 120 : 80)}
        </p>

        {/* View Link */}
        <div className="pt-4">
          <Link href={`/project-details/${_id}`}>
            <span className="group/link inline-flex items-center gap-3 text-xs font-mono text-gray-400 hover:text-gray-900 transition-colors cursor-pointer">
              <span>View case study</span>
              <span className="w-6 h-[1px] bg-gray-300 group-hover/link:w-10 transition-all" />
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-gray-100 -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  );
}