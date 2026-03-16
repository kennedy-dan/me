// components/ProjectDetails/Snippet.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ProjectDetails } from "@/types/project.types";
import { projectsData } from "@/data/projects";

interface SnippetProps {
  details: ProjectDetails;
}

export default function Snippet({ details }: SnippetProps): React.ReactElement {
  // Get random next project
  const getNextProject = (): ProjectDetails | undefined => {
    const otherProjects = projectsData.filter(p => p._id !== details._id);
    if (otherProjects.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * otherProjects.length);
    return otherProjects[randomIndex];
  };

  const nextProject = getNextProject();

  return (
    <section className="space-y-16">
      


      {/* Next Project */}
      {nextProject && (
        <div className="border-t border-gray-100 mt-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <div className="text-center space-y-8">
              <p className="text-xs font-mono text-gray-300 tracking-wider">
                NEXT PROJECT
              </p>
              
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
                {nextProject.name}
              </h2>
              
              <Link
                href={`/project-details/${nextProject._id}`}
                className="group inline-flex items-center gap-4 mt-8"
              >
                <span className="text-sm font-mono text-gray-400 group-hover:text-gray-900 transition-colors">
                  View project
                </span>
                <span className="w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all" />
              </Link>

              {/* Next Project Image */}
              <div className="mt-12 max-w-3xl mx-auto">
                <Link href={`/project-details/${nextProject._id}`}>
                  <div className="aspect-[16/9] bg-gray-50 border border-gray-100 overflow-hidden group/image">
                    <img
                      src={nextProject.bgImage?.url || "/images/placeholder.jpg"}
                      alt={nextProject.name}
                      className="w-full h-full object-cover md:grayscale group-hover/image:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}