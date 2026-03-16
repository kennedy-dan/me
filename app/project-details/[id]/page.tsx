// app/project-details/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

import Loader from "@/components/Loader";
import ProjectIntro from "@/components/ProjectDetails/ProjectIntro";
import Snippet from "@/components/ProjectDetails/Snippet";
import Tagline from "@/components/ProjectDetails/Tagline";
import Architecture from "@/components/ProjectDetails/Architecture";
import MasterLayout from "@/components/layout/Layout";

// Types & Data
import { ProjectDetails as ProjectDetailsType } from "@/types/project.types";
import { projectsData } from "@/data/projects";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ProjectDetailsPage(): React.ReactElement {
  const { id } = useParams();
  const [details, setDetails] = useState<ProjectDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    
    const projectId = Array.isArray(id) ? id[0] : id;
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const project = projectsData.find((p) => p._id === projectId);
      setDetails(project || null);
      setIsLoading(false);
    }, 800);
  }, [id]);

  // Text animations
  useGSAP(() => {
    if (isLoading || !details) return;

    // Animate title
    const titleSplit = new SplitText(".project-title", { type: "words, chars" });
    gsap.from(titleSplit.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    });

    // Animate sections on scroll
    const sections = gsap.utils.toArray<HTMLElement>(".animate-section");
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

  }, [isLoading, details]);

  if (!details && !isLoading) {
    return (
      <MasterLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-400 font-mono">Project not found</p>
        </div>
      </MasterLayout>
    );
  }

  return (
    <MasterLayout>
      {isLoading && <Loader />}

      {!isLoading && details && (
        <main className="bg-white">
          <ProjectIntro details={details} />
          
          <div className="space-y-32 lg:space-y-40 pb-32">
            <Tagline details={details} />

            {/* Extra Images */}
            {details.extraImages && details.extraImages.length > 0 && (
              <section className="max-w-7xl mx-auto px-6 lg:px-12 animate-section">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {details.extraImages.map((image, index) => {
                    const imageUrl = image.url || "/images/placeholder.jpg";
                    return (
                      <div
                        key={index}
                        className="aspect-[4/3] bg-gray-50 border border-gray-100 overflow-hidden"
                      >
                        <img
                          src={imageUrl}
                          alt={`${details.name} screenshot ${index + 1}`}
                          className="w-full h-full object-cover transition-all duration-700"
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Architecture Section */}
            {details.architecture && (
              <section className="animate-section">
                <Architecture architecture={details.architecture} />
              </section>
            )}

            {/* Snippet/Next Project */}
            <section className="animate-section">
              <Snippet details={details} />
            </section>
          </div>
        </main>
      )}
    </MasterLayout>
  );
}