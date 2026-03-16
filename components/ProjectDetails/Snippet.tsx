"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ProjectDetails } from "@/types/project.types";
import { getImageUrl } from "@/utils";
import { ProjectContext } from "@/context/ProjectContext";

interface SnippetProps {
  details: ProjectDetails;
}

export default function Snippet({ details }: SnippetProps) {
  const { prototype, testimonial } = details;
  const prototypeImage = getImageUrl(prototype);
  const videoId = testimonial?.split("v=")[1]?.split("&")[0];

  const { projects } = useContext(ProjectContext);

  let nextProject: ProjectDetails | undefined;
  if (projects && projects.length > 0) {
    const availableProjects = projects.filter(
      (project) => project._id !== details._id
    );
    nextProject =
      availableProjects[Math.floor(Math.random() * availableProjects.length)];
  }

  return (
    <section className="space-y-10">
  


      {nextProject && (
        <section className="bg-black-700 w-full py-10 border-b border-[#F5F3F02D] mb-10">
          <section className="flex items-center flex-col wrapper text-center">
            <h4 className="text-black-500/20 text-size24">Next project</h4>
            <h1 className="lg:text-[4.5rem] text-[2rem] text-white">
              {nextProject.name}
            </h1>
            <div className="overflow-y-hidden lg:mt-10">
              <Link href={`/project-details/${nextProject._id}`}>
                <img
                  src={getImageUrl(nextProject.bgImage)}
                  alt=""
                  className="w-[37.5rem] lg:h-[30.75rem] h-[20rem] rounded-2xl object-fit lg:mt-0 mt-10"
                />
              </Link>
            </div>
          </section>
        </section>
      )}
    </section>
  );
}