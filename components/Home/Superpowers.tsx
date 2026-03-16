"use client"
import React, { useState } from "react";
import  Link  from "next/link";

// 🚨 assets

import arrow from "@/public/svg/left-arrow.svg";
import superPower from "@/public/svg/superPower.svg";
import travelApp from "@/public/svg/travel-app.svg";
import brand from "@/public/svg/brand-graphics.svg";
import ProgressBar from "../UI/ProgressBar";


import useWindowSize from "@/hooks/useWindowSize";
export default function Superpowers() {
  const [active, setActive] = useState(0);
  const {isLargeScreen} = useWindowSize()
  const clipNotes = [
    {
      skill: "Product design",
      writeUp:
        "I design websites and apps that help businesses grow and connect with their audience.",
      img: '/svg/superPower.svg',
    },
    {
      skill: "Brand & identity design",
      writeUp:
        "I help brands discover their essence and shape identities that grow, stand out, and connect, creating experiences that tell a bigger story.",
      img: '/svg/brand-graphics.svg',
    },
    {
      skill: "Package design & printing",
      writeUp:
        "I design packaging that grabs attention, strengthens your brand, and delivers a premium shelf-ready experience.",
      img: '/svg/superPower.svg',
    },
    {
      skill: "Social media management",
      writeUp:
        "I manage social media that grows your audience, strengthens your brand, and turns engagement into real results.",
      img: '/svg/travel-app.svg',
    },
  ];
  return (
    <section className="wrapper bg-black-600 rounded-2xl py-10  ">
      <section className="w-11/12 mx-auto space-y-20 ">
        {/* 🚨 header  */}
        <section>
          <h2 className="text-[40px] font-semibold">
            {" "}
            <span className="text-black-200 ">My</span> superpowers
          </h2>
          <div className="flex lg:items-center w-full  justify-between  [ lg:flex-row  flex-col gap-y-4 ]">
            <h3>
              The core abilities that power my approach <br /> to product
              thinking and design.
            </h3>

            <div className="w-fit">
              <Link href={`/works`}>
                <button className="border-2 rounded-full border-black-300 cursor-pointer text-black-300 flex gap-x-3 items-center px-4 py-4 font-semibold text-sm ">
                  {" "}
                  <span>See more about me</span>
                  <img
                    src={'/svg/left-arrow.svg'}
                    alt="view projects"
                    className="rotate-180 w-3"
                  />
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/*  */}

        <section className="flex gap-x-4 items-stretch [ lg:flex-row  flex-col-reverse gap-y-4 ]  ">
          {/* 🚨 clip notes  */}
          <section className="lg:w-[40%] space-y-4">
            {clipNotes.map(({ skill, writeUp }, index) => {
              const isActive = active === index;
              return (
                <section className="relative">
                  <div
                    onClick={() => setActive(index)}
                    className={`bg-white w-full py-10 cursor-pointer ${ !isLargeScreen && !isActive ? 'hidden' : 'block' }`}
                  >
                    <div className={` w-10/12 mx-auto space-y-3`}>
                      <h3
                        className={` capitalize font-semibold ${
                          isActive
                            ? "text-left text-[19.1px]"
                            : "text-center text-black-10 text-[19.4px]"
                        }`}
                      >
                        {skill}
                      </h3>

                      <p
                        className={` transition-all duration-500 ease-out ${
                          isActive ? "opacity-100 h-full" : "opacity-0  h-0"
                        } text-black-300 text-base w-10/12 `}
                      >
                        {writeUp}
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <div className=" ">
                      <ProgressBar
                        isActive={isActive}
                        clipNotes={clipNotes}
                        setActive={setActive}
                        durationTime={9}
                      />
                    </div>
                  )}
                </section>
              );
            })}
          </section>
          {/*  */}

          {/* 🚨 display section  */}
          <section className="bg-white lg:w-[60%] flex items-center justify-center">
            <div className="w-10/12 h-[400px] flex items-center justify-center ">
              <img
                src={clipNotes[active].img}
                alt={clipNotes[active].skill}
                className="max-w-full [ lg:max-h-full h-10/12 ] object-contain "
              />
            </div>
          </section>

          {/*  */}
        </section>
      </section>
    </section>
  );
}
