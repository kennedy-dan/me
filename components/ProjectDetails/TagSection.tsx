import React from "react";

interface TagSectionProps {
  title: string;
  subtitle: string;
  excerpt?: string;
  listArr?: string[];
}

export default function TagSection({
  title,
  subtitle,
  excerpt,
  listArr,
}: TagSectionProps) {
  const titleWords = title.split(" ");
  const isShort = titleWords.length <= 2;

  return (
    <section>
      <section className="border-b border-b-black-200 lg:pb-10 pb-4">
        <div className={`${isShort ? "w-fit" : "lg:w-[50%] w-[70%]"}`}>
          <h1
            className={`header-style flex gap-x-4 ${
              isShort ? "flex-nowrap" : "flex-wrap"
            }`}
          >
            {titleWords?.map((word) => {
              const isConjunction =
                word.includes("and") || word.includes("or");
              return (
                <span key={word} className={isConjunction ? "font-thin" : ""}>
                  {word}
                </span>
              );
            })}
          </h1>
        </div>
      </section>

      <div className="py-10 flex justify-between flex-col lg:flex-row">
        <div className="lg:w-[25%] w-full lg:font-medium font-semibold">
          <p className="uppercase text-md lg:w-[60%] w-full">{subtitle}</p>
        </div>

        <div className="lg:w-[75%] w-full space-y-4 lg:text-size24 text-base">
          <p>{excerpt}</p>
          {listArr && listArr.length > 0 && (
            <ul className="pl-10 space-y-4">
              {listArr.map((item, index) => (
                <li
                  key={index}
                  className="list-disc font-light lg:text-xl text-md lg:w-9/12"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}