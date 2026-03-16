"use client"
import React, { useEffect, useState } from "react";
import ProjectSnippet from "../UI/Cards/ProjectSnippet";
import useWindowSize from "@/hooks/useWindowSize";

// Local image imports


// Define TypeScript interfaces
interface ProjectShot {
  snippet: string; // SVG import type
  name: string;
  year: string;
}

interface ShowcaseDocument {
  shots: ProjectShot;
}

export default function Showcase() {
  const [isLoading, setIsLoading] = useState(false);
  const [shots, setShots] = useState<ShowcaseDocument[] | null>(null);

  const { isLargeScreen } = useWindowSize();

  // Local shots data array
  const localShotsData: ShowcaseDocument[] = [
    {
      shots: {
        snippet: '/images/shot1.png',
        name: "Epump",
        year: "2025",
      },
    },
    {
      shots: {
        snippet: '/images/shot2.png',
        name: "Project Alpha",
        year: "2024",
      },
    },
    {
      shots: {
        snippet: '/images/weoutproject.png',
        name: "Project Beta",
        year: "2024",
      },
    },
    {
      shots: {
        snippet: '/images/shot3.png',
        name: "Project Gamma",
        year: "2023",
      },
    },
    {
      shots: {
        snippet: '/images/cloverleafproject.png',
        name: "Project Delta",
        year: "2023",
      },
    },
    {
      shots: {
        snippet: '/images/shot4.png',
        name: "Project Epsilon",
        year: "2022",
      },
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay (optional)
    setTimeout(() => {
      setShots(localShotsData);
      setIsLoading(false);
    }, 500);
  }, []);

  let top: ShowcaseDocument[] | undefined;
  let bottom: ShowcaseDocument[] | undefined;
  let allBottoms: ShowcaseDocument[] | undefined;

  if (shots && !isLoading) {
    let images = [...shots];
    let half = Math.floor(images.length / 2);
    top = images.splice(0, half);
    bottom = images;
  }
  
  bottom && (allBottoms = [...bottom, ...bottom]);

  return (
    <section className="global-gap">
      {/* 🚨 header  */}
      <section className="wrapper justify-between flex items-center project-shots">
        <h1 className="[ lg:text-[2.5rem] text-[2rem] ] leading-12 font-thin text-black-200">
          Shots from many other
          <br />
          <span className="font-bold"> Projects </span>
        </h1>
      </section>

      {/* 🚨showcase  */}
      {!isLoading && top && top.length > 0 && allBottoms && (
        <section className="space-y-4 py-10 w-full relative">
          {/* 🚨top */}
          <section className="w-full">
            <section className="overflow-hidden">
              <section className="top-carousel w-fit flex [ lg:gap-x-10 gap-x-4 ] ">
                {[...top, ...top].map((data, index) => {
                  let item = data?.shots;
                  return <ProjectSnippet key={`top-${index}`} {...item} />;
                })}
              </section>
            </section>
          </section>

          {/* 🚨bottom */}
          <section className="justify-center w-full">
            <section className="overflow-hidden">
              <section className="bottom-carousel w-fit flex [ lg:gap-x-16 gap-x-8 ] ">
                {allBottoms.map((data, index) => {
                  let item = data?.shots;
                  return <ProjectSnippet key={`bottom-${index}`} {...item} />;
                })}
              </section>
            </section>
          </section>

          {/* Alternative animation section (commented out in original)
          <section className="w-full">
            <section className="relative overflow-hidden [ lg:h-[310px] h-[260px] ] ">
              {allBottoms.map((data, index) => {
                let item = data?.shots;
                const arrLen = allBottoms.length;
                return (
                  <div
                    key={`animated-${index}`}
                    style={{
                      animationDelay: `calc(30s/${arrLen} * (8 - ${
                        index + 1
                      } ) * -1)`,
                      left: `${
                        isLargeScreen
                          ? `max(calc(400px * ${arrLen}),100%)`
                          : ` max(calc(260px * ${arrLen}),100%)`
                      } `,
                    }}
                    className="absolute left-[100%] showcase-img top-[50%] -translate-y-[50%]"
                  >
                    <ProjectSnippet {...item} />
                  </div>
                );
              })}
            </section>
          </section>
          */}
        </section>
      )}
    </section>
  );
}