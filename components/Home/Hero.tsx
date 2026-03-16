"use client"
import React, { useRef } from "react";

// 🚨 assets
import arrowUp from "@/public/svg/arrow-up.svg";
import whiteArrow from "@/public/svg/white-right-arrow.svg";

import avatar from "@/public/svg/hero-avatar.svg";

import  Link  from "next/link";

export default function Hero() {
  const targetRef = useRef(null);

  return (
    <section>
      {/* 🚨 Hero  */}
      <section
        ref={targetRef}
        className=" [ lg:h-screen h-[100vh] ]  hero  w-full bg-[url(@/public/svg/hero-bg.svg)] bg-cover  space-y-4 [ lg:mt-[-10px] ]"
      >
        <section className="pt-10 items-center  flex flex-col justify-center h-full w-[90%] mx-auto">
          <section className="flex items-center gap-x-3 w-fit mb-4 py-2 rounded-full bg-black-600 px-4">
            <img
              src='/images/myself.png'
              alt="A profile picture of Kennedy"
              className="[ w-[1.75rem] ] rounded-full"
            />

            <p className="text-black-200 font-medium [ lg:text-base text-xs ]">
              Hi, I am Kennedy, Your product design expert!
            </p>
          </section>

          <section className="space-y-4 text-center intro">
            <h1 className=" [ text-[40px] lg:text-[72px] ] [ lg:leading-20 leading-12 ] font-bold font-public title">
              I help turn web & apps experiences <br /> into business success.
            </h1>
            <h2 className=" [ lg:text-size20 text-sm ] text-black-400 [  lg:w-[70%]  w-[90%] my-4 ]  mx-auto  short-desc">
              I've helped over 25+ founders across SaaS, AI, Fintech,
              e-Commerce, OilTech and more create web & apps that secure
              funding, convert users, and drive growth.
            </h2>

            <div className="flex gap-x-4 items-center w-fit mx-auto">
              <Link href={`/about`}>
                <button className=" cursor-pointer border [ lg:flex hidden  ]  items-center gap-x-2 rounded-full py-4 px-6 border-black-300 font-medium text-black-300">
                  <span> About me</span>
                  <img src={'svg/arrow-up.svg'} alt="A link to the about page" />
                </button>
              </Link>

              <Link href={`/works`}>
                <button className=" cursor-pointer border  flex items-center gap-x-2 rounded-full py-4 px-6 border-black font-medium text-white bg-black">
                  <span> See projects</span>
                  <img src={'svg/white-right-arrow.svg'} alt="A link to the projects page" />
                </button>
              </Link>
            </div>
          </section>
        </section>
      </section>
      {/*  */}
    </section>
  );
}
