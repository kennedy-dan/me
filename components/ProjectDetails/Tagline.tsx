// components/ProjectDetails/Tagline.tsx
"use client";

import React from "react";
import TagSection from "./TagSection";
import { ProjectDetails } from "@/types/project.types";

interface TaglineProps {
  details: ProjectDetails;
}

export default function Tagline({ details }: TaglineProps): React.ReactElement {
  const { problems, goals, target, role, accessibility } = details;

  const sections = [
    {
      title: "Problems & Challenges",
      subtitle: "Initial challenges",
      excerpt: problems?.description,
      listArr: problems?.lists,
    },
    {
      title: "Goals & Objectives",
      subtitle: "What we aimed to achieve",
      excerpt: goals?.description,
      listArr: goals?.lists,
    },
    {
      title: "Target Audience",
      subtitle: "Who we built this for",
      excerpt: target?.description,
      listArr: target?.lists,
    },
    {
      title: "My Role",
      subtitle: "How I contributed",
      excerpt: role?.description,
      listArr: role?.lists,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
      {sections.map((section, index) => (
        <TagSection key={index} {...section} />
      ))}

      {/* Accessibility Section */}
      {accessibility && (
        <section>
          <div className="grid lg:grid-cols-12 gap-8 border-t border-gray-100 pt-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-mono text-gray-400 tracking-wider">
                ACCESSIBILITY
              </p>
            </div>
            
            <div className="lg:col-span-9 space-y-8">
              <p className="text-gray-600 leading-relaxed">
                {accessibility.description}
              </p>
              
              {accessibility.images && accessibility.images.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {accessibility.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] bg-gray-50 border border-gray-100 "
                    >
                      <img
                        src={image.url || "/images/placeholder.jpg"}
                        alt={`Accessibility feature ${index + 1}`}
                        className="w-full h-[full] object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </section>
  );
}