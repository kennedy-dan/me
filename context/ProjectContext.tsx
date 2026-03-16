"use client";

import React, { createContext, useState, ReactNode } from "react";
import { ProjectDetails, ProjectContextType } from "@/types/project.types";
import { projectsData } from "@/data/projects";

export const ProjectContext = createContext<ProjectContextType>({
  projects: [],
  fetchProject: () => {},
  isLoading: false,
});

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<ProjectDetails[]>(projectsData);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProject = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      setProjects(projectsData);
      setIsLoading(false);
    }, 500);
  };

  return (
    <ProjectContext.Provider value={{ projects, fetchProject, isLoading }}>
      {children}
    </ProjectContext.Provider>
  );
};