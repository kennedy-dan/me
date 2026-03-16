import React from "react";

interface ProjectSnippetProps {
  snippet: string; // The imported image (SVG or other format)
  name: string;
  year: string;
}

export default function ProjectSnippet({ snippet, name, year }: ProjectSnippetProps) {
  return (
    <section className="[ lg:w-[426px] lg:h-[310px] ] [ w-[300px] h-[230px] ] bg-white-600 rounded ">
      <section className="wrapper py-4">
        <div className="w-full [ lg:h-[250px] h-[180px] ] m-auto">
          <img src={snippet} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-between items-center text-black-1000 text-sm font-semibold mt-2">
          <p>{name}</p>
          <p>{year}</p>
        </div>
      </section>
    </section>
  );
}