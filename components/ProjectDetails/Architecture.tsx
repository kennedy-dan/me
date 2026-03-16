// components/ProjectDetails/Architecture.tsx
"use client";

import React from "react";
import { ProjectArchitecture } from "@/types/project.types";

interface ArchitectureProps {
  architecture: ProjectArchitecture;
}

export default function Architecture({ architecture }: ArchitectureProps): React.ReactElement {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
      
      {/* Header */}
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <p className="text-xs font-mono text-gray-400 tracking-wider">
            ARCHITECTURE
          </p>
        </div>
        
        <div className="lg:col-span-9 space-y-6">
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
            Technical Architecture
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            {architecture.overview}
          </p>
        </div>
      </div>

      {/* Architecture Diagram */}
      {architecture.image && (
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <p className="text-xs font-mono text-gray-400 tracking-wider">
              DIAGRAM
            </p>
          </div>
          
          <div className="lg:col-span-9">
            <div className="bg-gray-50 border border-gray-100 p-8 overflow-hidden">
              <img
                src={architecture.image.url}
                alt={architecture.image.caption || "Architecture diagram"}
                className="w-full h-auto"
              />
              {architecture.image.caption && (
                <p className="text-sm text-gray-400 font-mono mt-4 text-center">
                  {architecture.image.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Technology Stack */}
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <p className="text-xs font-mono text-gray-400 tracking-wider">
            TECH STACK
          </p>
        </div>
        
        <div className="lg:col-span-9 space-y-12">
          {architecture.stack.map((tech, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                {tech.category}
              </h3>
              <p className="text-gray-500 text-sm">
                {tech.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.technologies.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-50 text-xs font-mono text-gray-500 border border-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {index < architecture.stack.length - 1 && (
                <hr className="border-gray-100 mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Components */}
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <p className="text-xs font-mono text-gray-400 tracking-wider">
            COMPONENTS
          </p>
        </div>
        
        <div className="lg:col-span-9 space-y-12">
          {architecture.keyComponents.map((component, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                {component.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {component.description}
              </p>
              <ul className="space-y-2 mt-4">
                {component.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm">
                    <span className="text-gray-300">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {index < architecture.keyComponents.length - 1 && (
                <hr className="border-gray-100 mt-8" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Data Flow */}
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <p className="text-xs font-mono text-gray-400 tracking-wider">
            DATA FLOW
          </p>
        </div>
        
        <div className="lg:col-span-9">
          <div className="grid md:grid-cols-2 gap-8">
            {architecture.dataFlow.map((flow, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-mono">
                    {index + 1}
                  </span>
                  <h4 className="text-sm font-medium text-gray-900">
                    {flow.step}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 pl-9">
                  {flow.flow}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}