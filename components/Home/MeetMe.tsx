import React from "react";

// 🚨 assets
import greenIcon from "@/assets/svg/green-arrow.svg";
import  Link  from "next/link";
export default function Meetme() {
  return (
    <section className={`bg-black-700  py-10 rounded-t-2xl `}>
      <section className="w-[95%] mx-auto bg-black-800 rounded-2xl [ lg:px-20 px-4 ] [ lg:py-20 py-4 ] gap-y-10 flex justify-between items-center [ lg:flex-row flex-col ]">
        <article className="text-black-2000 lg:w-[40%] w-full ">
          <h2 className="font-thin  text-[58px]">
            Meet <span className="font-bold text-white">Me</span>
          </h2>

          <section className="[ lg:text-size20 text-base ] [ lg:space-y-10 space-y-7 ] ">
            <div className="">
              I'm habeeb, an experienced product designer who speaks fluent
              Design and design with business goals at heart . In the last 4
              years, I helped businesses in industries like Fintech, Oil &Gas
              and Artificial intelligence(AI), turn blank pages into bold
              identities and dull interfaces into delightful experiences.
            </div>

            <div className="">
              Whether it's a web Application, a sleek mobile application, or a
              complete design system, I bring clarity, consistency, and a bit of
              clever charm to the game.
            </div>

            <div className="">
              But beyond pixels and color palettes, I care about people
              especially users, team members and people who have my best
              interest at heart.
            </div>

            <div>
              I do always say this to people I work with <br />
              <b>
                “Great design isn't just how it looks, it's how it works, and
                how it makes people feel”.
              </b>
            </div>

            <Link href="/about">
              <button className="flex items-center gap-x-3 cursor-pointer">
                <p className="text-green-100 font-semibold">Read more </p>
                <img src={'/svg/green-arrow.svg'} alt="" />
              </button>
            </Link>
          </section>
        </article>

        <div className=" my-auto">
          <div className=" lg:h-[500px]  w-full">
            <img
              src={'/images/myself.png'}
              alt=""
              className="rounded-4xl w-full  h-full object-cover"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
