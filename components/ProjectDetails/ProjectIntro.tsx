"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProjectDetails } from "@/types/project.types";
import { getImageUrl } from "@/utils";
import leftArrow from "@/public/svg/left-arrow.svg";

interface ProjectIntroProps {
  details: ProjectDetails;
}

export default function ProjectIntro({ details }: ProjectIntroProps) {
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

  const appImage = getImageUrl(bgImage);
  const thumbnail = getImageUrl(overviewThumbnail);

  const desc = [
    {
      title: "ROLE / SERVICES",
      body: roles,
    },
    {
      title: "CLIENT",
      body: client ? [client] : [],
    },
    {
      title: "INDUSTRY",
      body: industry ? [industry] : [],
    },
    {
      title: "DURATION",
      body: [duration],
    },
  ];

  return (
    <section className="lg:py-10 pt-10 space-y-20">
      <section className="wrapper lg:space-y-10 space-y-4">
        <div
          onClick={() => router.back()}
          className="flex gap-x-2 cursor-pointer fixed top-10 z-40 bg-white w-fit px-4 py-1 rounded-md"
        >
          <Image src={leftArrow} alt="go back" width={20} height={20} />
          <p>Back</p>
        </div>

        <div className="text-black-400 space-y-8 mt-20">
          <h5 className="text-size20 font-medium tag">{tag}</h5>
          <h1 className="lg:text-size103 text-size40 lg:leading-28 leading-14 name">
            {name}
          </h1>
        </div>

        <section className="grid lg:grid-cols-4 lg:gap-x-10 gap-y-10">
          {desc.map(({ title, body }, index) => (
            <section key={index} className="text-base space-y-4">
              <div className="space-y-6 text-black-200 w-8/12">
                <h4>{title}</h4>
                <hr />
              </div>
              <div className="space-y-4 font-medium">
                {body.map((item, idx) => (
                  <h4 key={idx}>{item}</h4>
                ))}
              </div>
            </section>
          ))}
        </section>
      </section>

      <section className="lg:h-screen h-[60vh] w-screen">
        <img src={appImage} alt="" className="w-full h-full object-cover" />
      </section>

      <section className="wrapper space-y-20">
        <section className="flex justify-between flex-col lg:flex-row gap-y-4">
          <h3 className="w-[20%] uppercase">Overview</h3>
          <div className="space-y-10">
            <p className="text-black-400 lg:w-[80%]">{overview}</p>
            <div className="flex gap-x-10 items-center">
              {liveWebsite && (
                <a href={liveWebsite} target="_blank" rel="noopener noreferrer">
                  <p className="underline underline-offset-8">Live website</p>
                </a>
              )}
              {appStore && (
                <a href={appStore} target="_blank" rel="noopener noreferrer">
                  <p className="underline underline-offset-8">App store</p>
                </a>
              )}
              {googlePlay && (
                <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                  <p className="underline underline-offset-8">Google play</p>
                </a>
              )}
            </div>
          </div>
        </section>

        <div className="w-[80%] rounded-t-2xl mx-auto">
          <img src={thumbnail} alt="" />
        </div>
      </section>
    </section>
  );
}