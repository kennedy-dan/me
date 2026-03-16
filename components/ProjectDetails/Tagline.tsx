"use client";

import React from "react";
import TagSection from "./TagSection";
import { ProjectDetails } from "@/types/project.types";
import { getImageUrl } from "@/utils";

interface TaglineProps {
  details: ProjectDetails;
}

export default function Tagline({ details }: TaglineProps) {
  const { problems, goals, target, role, accessibility } = details;

  const problemsObj = {
    title: "Problems and pain points",
    subtitle: "Problems and pain points",
    excerpt: problems?.description,
    listArr: problems?.lists,
  };

  const goalsObj = {
    title: "Goals and Objectives",
    subtitle: "Goals and Objectives",
    excerpt: goals?.description,
    listArr: goals?.lists,
  };

  const targetObj = {
    title: "Target Audience",
    subtitle: "WHO ARE THE PRODUCT FOR",
    excerpt: target?.description,
    listArr: target?.lists,
  };

  const roleObj = {
    title: "My role",
    subtitle: "Role played",
    excerpt: role?.description,
    listArr: role?.lists,
  };

  return (
    <section>
      <section className="wrapper lg:space-y-30 space-y-8">
        <TagSection {...problemsObj} />

        <section>
          <section className="border-b border-b-black-200 lg:pb-10 pb-4">
            <div className="lg:w-[50%] w-[70%]">
              <h1 className="header-style flex gap-x-4 flex-wrap">
                Accessibility compliance
              </h1>
            </div>
          </section>
          <section>
            <div className="py-10 flex justify-between flex-col lg:flex-row">
              <div className="lg:w-[25%] w-full lg:font-medium font-semibold">
                <p className="uppercase text-md lg:w-[60%] w-full">
                  Accessibility
                </p>
              </div>
              <div className="lg:w-[75%] w-full space-y-4 lg:text-size24 text-base">
                <p>{accessibility?.description}</p>
                <ul className="space-y-4 bg-[#fdebdf] w-fit flex flex-wrap items-stretch lg:flex-row gap-x-2 flex-col">
                  {accessibility?.images?.map((image, index) => {
                    const imageUrl = getImageUrl(image);
                    return (
                      <div
                        key={index}
                        className=" py-4 px-4 rounded-xl flex items-center justify-center"
                      >
                        <img src={imageUrl} className="h-[540px]" alt="" />
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </section>

        <TagSection {...goalsObj} />
        <TagSection {...targetObj} />
        <TagSection {...roleObj} />
      </section>
    </section>
  );
}