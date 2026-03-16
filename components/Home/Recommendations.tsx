import React from "react";

// 🚨 assets
import Comment from "../UI/Cards/Comments";

export default function Recommendations({ isRounded = true }) {
  const comments = [
    {
      id: 1,
      name: "John Carter",
      position: "Product Manager at FintechX",
      text:
        "Kennedy is an exceptional frontend developer. His attention to detail and ability to translate designs into functional interfaces is impressive.",
      image: "/images/testimonials/john.jpg",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Founder at BuildLabs",
      text:
        "Working with Kennedy was a great experience. He communicates clearly and delivers high-quality work consistently.",
      image: "/images/testimonials/sarah.jpg",
    },
    {
      id: 3,
      name: "David Chen",
      position: "CTO at DevBridge",
      text:
        "Kennedy helped us ship a complex product UI on time. His knowledge of React and modern frontend tools is outstanding.",
      image: "/images/testimonials/david.jpg",
    },
    {
      id: 4,
      name: "Amaka Okafor",
      position: "Product Designer",
      text:
        "Kennedy brings designs to life beautifully. The UI interactions and animations he implemented were exactly what we envisioned.",
      image: "/images/testimonials/amaka.jpg",
    },
  ];

  return (
    <section
      className={`global-gap bg-[url(@/public/svg/noise.svg)] ${
        isRounded ? "lg:rounded-t-2xl rounded-t-xl" : ""
      }`}
    >
      <section className="w-11/12 mx-auto space-y-10">
        <div className="comment-tag">
          <h1 className="lg:text-[2.5rem] text-[2.1rem] text-black-400 font-semibold lg:leading-10 leading-10">
            Don’t take my words <br /> for it.
          </h1>
        </div>

        <section className="max-w-[100%] overflow-hidden py-4 carousel">
          <section className="comment-carousel w-fit flex gap-x-8">
            {[...comments, ...comments].map((comment, index) => {
              return <Comment {...comment} key={index} />;
            })}
          </section>
        </section>
      </section>
    </section>
  );
}