import useWindowSize from "@/hooks/useWindowSize";
import { trimText } from "@/utils";
import React from "react";
import Link from "next/link";

type Project = {
  image?: { asset?: { url?: string } } | { url?: string } | null;
  name?: string;
  _id?: string;
  tag?: string;
  overview?: string;
  appLogo?: { asset?: { url?: string } } | { url?: string } | null;
  industry?: string | string[]; // 👈 Allow both string and array
  client?: string;
  title?: string;
  description?: string;
};

export default function ProjectCard({ project }: { project?: Project }) {
  console.log(project);
  const { isLargeScreen } = useWindowSize();

  const { image, name, _id, tag, overview, appLogo, client, title, description, industry } =
    project ?? {};
  console.log(image);

  // 🚨 Direct image URLs instead of urlFor
  const getUrl = (media?: { asset?: { url?: string } } | { url?: string } | null) => {
    if (!media) return undefined;
    if ("asset" in media && media.asset?.url) return media.asset.url;
    if ("url" in media && media.url) return media.url;
    return undefined;
  };

  const logo = getUrl(appLogo) ?? "/default-logo.png";
  const images = getUrl(image) ?? "/default-image.jpg";

  const bgStyle = {
    backgroundImage: `url(${images})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // 🚨 Convert industry to array if it's a string
  const industryArray = industry 
    ? Array.isArray(industry) 
      ? industry 
      : [industry]
    : [];

  return (
    <article
      key={_id}
      className="overflow-hidden h-[570px] shadow-lg hover:border-green-100 border-black-2000 rounded-xl border-2 space-y-4 transition-all duration-300 hover:shadow-xl"
    >
      {/* 🚨 background image  */}
      <Link href={`/project-details/${_id}`}>
        <div style={bgStyle} className="lg:h-[340px] h-[339px]"></div>
      </Link>

      {/*  */}
      <section className="px-4 space-y-4">
        {logo && (
          <img 
            src={logo} 
            alt={name || "Project logo"} 
            className="h-[60px] object-contain" 
          />
        )}
        
        {/* 🚨 industries  */}
        <div className="flex flex-wrap items-center gap-2">
          {industryArray.map((item, index) => (
            <p
              key={index}
              className="w-fit px-3 uppercase text-xs py-2 text-white bg-black rounded-full"
            >
              {item}
            </p>
          ))}
        </div>

        {/* 🚨 overview  */}
        <div className="space-y-2 text-sm">
          {title && <h2 className="font-bold text-black-400">{title}</h2>}
          {description && (
            <p className="text-white-900">
              {trimText(description, isLargeScreen ? 100 : 80)}
            </p>
          )}
        </div>
      </section>
    </article>
  );
}