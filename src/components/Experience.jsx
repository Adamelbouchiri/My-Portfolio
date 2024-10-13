import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import reactImg from "../assets/react.png";
import laravel from "../assets/laravel.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      title: "Html",
      shadow: "shadow-orange-700",
    },
    {
      id: 2,
      src: css,
      title: "Css",
      shadow: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      shadow: "shadow-yellow-600",
    },
    {
      id: 4,
      src: tailwind,
      title: "Talwind",
      shadow: "shadow-cyan-700",
    },
    {
      id: 5,
      src: reactImg,
      title: "React",
      shadow: "shadow-cyan-500",
    },
    {
      id: 6,
      src: laravel,
      title: "Laravel",
      shadow: "shadow-red-700",
    },
    {
      id: 7,
      src: sql,
      title: "Javascript",
      shadow: "shadow-zinc-600",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      shadow: "shadow-zinc-500",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-zinc-800 to-zinc-900 w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
      w-full h-full text-white"
      >
        <div className="">
          <p className="text-4xl font-bold border-b-4 pb-2 w-fit tracking-widest border-purple-500">
            Experience
          </p>
          <p className="py-6">These the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={
                "shadow-md " +
                exp.shadow +
                " hover:scale-105 duration-500 py-2 rounded-lg"
              }
            >
              <img src={exp.src} alt="technologie" className="w-20 mx-auto" />
              <p className="mt-4">{exp.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
