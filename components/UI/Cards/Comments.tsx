import React from "react";



type CommentProps = {
  image: string; // now a string URL
  text: string;
  name: string;
  role?: string;
  company?: string;
  link?: string;
};

export default function Comment({
  image,   // now a string URL
  text,
  name,
  role,
  company,
  link,
}: CommentProps) {
  return (
    <section className="relative rounded-xl bg-black-1000 lg:h-[530px] h-[430px] lg:w-[420px] w-[350px]">
      <img src={'/svg/quote.svg'} alt="" className="absolute top-10 right-4" />
      <section className="wrapper pt-20 pb-8 flex flex-col h-full justify-between">
        <div className="text-black-2000 pl-4 w-11/12 font-medium lg:text-base text-sm">
          {text}
        </div>

        <section className="flex justify-between items-center">
          <div className="flex gap-x-4 items-center">
            <div>
              <img
                src={image}   // directly use image string
                alt={name}
                className="w-[2.875rem] h-[2.875rem] rounded-full"
              />
            </div>

            <div className="font-medium text-base">
              <p className="text-white">{name}</p>
              <p className="text-green-1000">{company}</p>
              <p className="text-sm text-black-50">{role}</p>
            </div>
          </div>

          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-1">
            <img src={'/svg/white-linkedin.svg'} alt="open in linkedin" className="w-6" />
            <img src={'/svg/white-arrow.svg'} alt="open in linkedin" className="w-6" />
          </a>
        </section>
      </section>
    </section>
  );
}