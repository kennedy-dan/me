// app/project-details/[id]/page.tsx (or wherever your ProjectDetails component is)
"use client";

import { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import { useGSAP } from "@gsap/react";
import Loader from "@/components/Loader";
import ProjectIntro from "@/components/ProjectDetails/ProjectIntro";
import Snippet from "@/components/ProjectDetails/Snippet";
import Tagline from "@/components/ProjectDetails/Tagline";
import Architecture from "@/components/ProjectDetails/Architecture"; // 🚀 NEW IMPORT
import { ProjectContext } from "@/context/ProjectContext";
import { animateText, splitWords } from "@/utils";
import { ProjectDetails as ProjectDetailsType } from "@/types/project.types";
import MasterLayout from "@/components/layout/Layout";

export default function ProjectDetails() {
  const { id } = useParams();
  const { fetchProject, isLoading } = useContext(ProjectContext);
  const [details, setDetails] = useState<ProjectDetailsType | null>(null);
  const [isDetailsLoading, setIsDetailsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    const projectId = Array.isArray(id) ? id[0] : id;
    fetchProject();
    setIsDetailsLoading(true);

    // Simulate API call with hardcoded data
    import("@/data/projects").then(({ projectsData }) => {
      const project = projectsData.find((p) => p._id === projectId);
      setTimeout(() => {
        setDetails(project || null);
        setIsDetailsLoading(false);
      }, 1500);
    });
  }, [id, fetchProject]);

  useGSAP(() => {
    if (isDetailsLoading) return;

    const tags = {
      tag: splitWords(".tag"),
      name: splitWords(".name"),
    };

    const { tag, name } = tags;
    animateText(tag, ".tag");
    animateText(name, ".name");
  }, [isDetailsLoading]);

  if (!details) return null;

  return (
    <MasterLayout>
      {isDetailsLoading && <Loader />}

      {!isDetailsLoading && (
        <section className="space-y-40 overflow-x-hidden">
          <ProjectIntro details={details} />
          <Tagline details={details} />

          {/* extra images */}
          {details?.extraImages && details.extraImages.length > 0 && (
            <section className="w-11/12 mx-auto grid lg:grid-cols-3 gap-x-5 overflow-x-hidden gap-y-4">
              {details.extraImages.map((image, index) => {
                const imageUrl = image.url || "/images/placeholder.jpg";
                return (
                  <div
                    key={index}
                    className="bg-gray-100 py-4 px-4 rounded-xl flex items-center justify-center"
                  >
                    <img src={imageUrl} className="h-[240px] object-cover" alt="" />
                  </div>
                );
              })}
            </section>
          )}

          {/* 🚀 NEW ARCHITECTURE SECTION */}
          {details.architecture && <Architecture architecture={details.architecture} />}

          {!isLoading && <Snippet details={details} />}
        </section>
      )}
    </MasterLayout>
  );
}