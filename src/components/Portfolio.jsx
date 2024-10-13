import React from "react";

import vueImg from "../assets/portfolio/vue.png";
import reactImg from "../assets/portfolio/react.png";
import laravelImg from "../assets/portfolio/laravel.png";
import htmlCssJs from "../assets/portfolio/htmlCssJs.png";
import githubReact from "../assets/portfolio/GithubReact.png";

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: vueImg,
    },
    {
      id: 2,
      src: reactImg,
    },
    {
      id: 3,
      src: laravelImg,
    },
    {
      id: 4,
      src: htmlCssJs,
    },
    {
      id: 5,
      src: githubReact,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-zinc-900 to-zinc-800
    w-full text-zinc-50 md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 pb-2 w-fit tracking-widest border-purple-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 ">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="shadow-md shadow-zinc-600 rounded-lg overflow-hidden"
            >
              <img
                src={portfolio.src}
                alt="vue img"
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
