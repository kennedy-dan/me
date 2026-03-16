// components/ProjectDetails/Architecture.tsx
"use client";

import React from "react";
import { ProjectArchitecture } from "@/types/project.types";

interface ArchitectureProps {
  architecture: ProjectArchitecture;
}

export default function Architecture({ architecture }: ArchitectureProps) {
  return (
    <section className="wrapper space-y-30">
      {/* Architecture Header - Matching Tagline style */}
      <section className="border-b border-b-black-200 pb-10">
        <div className="lg:w-[50%] w-[70%]">
          <h1 className="header-style flex gap-x-4 flex-wrap">
            Architecture Overview
          </h1>
        </div>
      </section>

      {/* Architecture Description - Matching Tagline description style */}
      <section>
        <div className="py-10 flex justify-between flex-col lg:flex-row">
          <div className="lg:w-[25%] w-full lg:font-medium font-semibold">
            <p className="uppercase text-md lg:w-[60%] w-full">Overview</p>
          </div>
          <div className="lg:w-[75%] w-full space-y-4 lg:text-size24 text-base">
            <p className="text-black-400">{architecture.overview}</p>
          </div>
        </div>
      </section>

      {/* 🚀 NEW ARCHITECTURE IMAGE SECTION */}
      {architecture.image && (
        <section>
          <div className="py-10 flex justify-between flex-col lg:flex-row">
            <div className="lg:w-[25%] w-full lg:font-medium font-semibold">
              <p className="uppercase text-md lg:w-[60%] w-full">
                Architecture Diagram
              </p>
            </div>
            <div className="lg:w-[75%] w-full">
              <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center border border-black-200">
                <img 
                  src={architecture.image.url} 
                  alt={architecture.image.caption || "Architecture diagram"}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
              {architecture.image.caption && (
                <p className="text-sm text-black-300 mt-3 text-center italic">
                  {architecture.image.caption}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Technology Stack Section */}
      <section>
        <section className="border-b border-b-black-200 lg:pb-10 pb-4">
          <div className="lg:w-[50%] w-[70%]">
            <h1 className="header-style flex gap-x-4 flex-wrap">
              Technology Stack
            </h1>
          </div>
        </section>
        
        <section>
          <div className="py-10 flex justify-between flex-col lg:flex-row">
            <div className="lg:w-[25%] w-full lg:font-medium font-semibold">
              <p className="uppercase text-md lg:w-[60%] w-full">
                Tools & Technologies
              </p>
            </div>
            <div className="lg:w-[75%] w-full space-y-8">
              {architecture.stack.map((tech, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-size20 font-medium text-black-400">{tech.category}</h4>
                  <p className="text-black-300 text-base">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="w-fit px-3 uppercase text-xs py-2 text-white bg-black rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {index < architecture.stack.length - 1 && (
                    <hr className="border-black-200 mt-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Key Components Section */}
      <section>
        <section className="border-b border-b-black-200 lg:pb-10 pb-4">
          <div className="lg:w-[50%] w-[70%]">
            <h1 className="header-style flex gap-x-4 flex-wrap">
              Key Components
            </h1>
          </div>
        </section>
        
        <section>
          <div className="py-10 flex justify-between flex-col lg:flex-row">
            <div className="lg:w-[25%] w-full lg:font-medium font-semibold">
              <p className="uppercase text-md lg:w-[60%] w-full">
                Core Features
              </p>
            </div>
            <div className="lg:w-[75%] w-full space-y-8">
              {architecture.keyComponents.map((component, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-size20 font-medium text-black-400">{component.name}</h4>
                  <p className="text-black-300 text-base">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="text-black-300 text-base flex items-start gap-2">
                        <span className="text-green-500 text-xl leading-5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {index < architecture.keyComponents.length - 1 && (
                    <hr className="border-black-200 mt-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Data Flow Section */}
      <section>
        <section className="border-b border-b-black-200 lg:pb-10 pb-4">
          <div className="lg:w-[50%] w-[70%]">
            <h1 className="header-style flex gap-x-4 flex-wrap">
              Data Flow
            </h1>
          </div>
        </section>
        
        <section>
          <div className="py-10 flex justify-between flex-col lg:flex-row">
            <div className="lg:w-[25%] w-full lg:font-medium font-semibold">
              <p className="uppercase text-md lg:w-[60%] w-full">
                User Journey
              </p>
            </div>
            <div className="lg:w-[75%] w-full">
              <div className="grid lg:grid-cols-2 gap-8">
                {architecture.dataFlow.map((flow, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-black-400 text-size20">
                        {flow.step}
                      </h4>
                    </div>
                    <p className="text-black-300 text-base ml-11">
                      {flow.flow}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}