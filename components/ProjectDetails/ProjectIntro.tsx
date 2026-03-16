// components/ProjectDetails/ProjectIntro.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ProjectDetails } from "@/types/project.types";

interface ProjectIntroProps {
  details: ProjectDetails;
}

export default function ProjectIntro({ details }: ProjectIntroProps): React.ReactElement {
  const router = useRouter();
  const {
    name,
    tag,
    roles,
    industry,
    duration,
    bgImage,
    overview,
    overviewThumbnail,
    overviewLinks,
    client,
  } = details;

  const { appStore, googlePlay, liveWebsite } = overviewLinks;

  const appImage = bgImage?.url || "/images/placeholder.jpg";
  const thumbnail = overviewThumbnail?.url || "/images/placeholder.jpg";

  const desc = [
    {
      title: "Role",
      body: roles,
    },
    {
      title: "Client",
      body: client ? [client] : [],
    },
    {
      title: "Industry",
      body: industry ? [industry] : [],
    },
    {
      title: "Duration",
      body: [duration],
    },
  ];

  return (
    <article className="space-y-20">
      
      {/* Back Button */}
      <div className="fixed top-24 left-6 lg:left-12 z-40">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-all"
        >
          <span className="text-xs font-mono text-gray-400 group-hover:text-gray-600">←</span>
          <span className="text-xs font-mono text-gray-400 group-hover:text-gray-600">Back</span>
        </button>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32">
        <div className="space-y-8">
          <span className="text-sm font-mono text-gray-400 block">
            {tag}
          </span>
          
          <h1 className="project-title text-5xl lg:text-7xl font-light text-gray-900 max-w-4xl leading-tight">
            {name}
          </h1>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {desc.map(({ title, body }, index) => (
            <div key={index} className="space-y-3">
              <p className="text-xs font-mono text-gray-400 tracking-wider">
                {title}
              </p>
              <div className="space-y-1">
                {body.map((item, idx) => (
                  <p key={idx} className="text-sm text-gray-600">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[60vh] lg:h-screen bg-gray-50 ">
        <img
          src={appImage}
          alt={name}
          className="w-full h-full object-cover md:grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <p className="text-xs font-mono text-gray-400 tracking-wider">
              OVERVIEW
            </p>
          </div>
          
          <div className="lg:col-span-9 space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              {overview}
            </p>
            
            {/* Links */}
            <div className="flex flex-wrap gap-6">
              {liveWebsite && (
                <a
                  href={liveWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <span>Live Website</span>
                  <span className="w-6 h-[1px] bg-gray-300 group-hover:w-10 transition-all" />
                </a>
              )}
              {appStore && (
                <a
                  href={appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <span>App Store</span>
                  <span className="w-6 h-[1px] bg-gray-300 group-hover:w-10 transition-all" />
                </a>
              )}
              {googlePlay && (
                <a
                  href={googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-mono text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <span>Google Play</span>
                  <span className="w-6 h-[1px] bg-gray-300 group-hover:w-10 transition-all" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Thumbnail */}
        <div className="aspect-[16/9] mb-10 bg-gray-50 border border-gray-100 overflow-hidden">
          <img
            src={thumbnail}
            alt={`${name} overview`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}