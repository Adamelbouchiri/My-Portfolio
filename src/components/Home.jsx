import React from "react";
import heroImg from "../assets/heroImage.png";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-zinc-900 to-zinc-800 via-zinc-900"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Hi I'm <span className="text-purple-600">Adam</span>, <br /> I'm a
            Full Stack Developer
          </h2>
          <p className="text-zinc-500 max-w-md py-6">
            As a seasoned full-stack developer, I have honed my skills in a
            variety of programming languages and frameworks. My foundation lies
            in C++ and C#, but I have expanded my expertise to include web
            development technologies such as HTML, CSS, JavaScript, and React.
            To further enhance my capabilities, I have also gained experience
            with Vue.js and the Laravel framework for the full stack Work.
          </p>
          <div>
            <Link to="projects" smooth duration={500}
              className="group w-fit text-white px-6 py-3 my-2 flex items center
            rounded-md bg-gradient-to-r from-purple-400 to-violet-400 cursor-pointer"
            >
              Portfolio{" "}
              <span className="pt-[2px] ps-2 group-hover:rotate-90 duration-300">
                <TiArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            className="hidden md:block w-2/3 md:w-full mx-auto"
            src={heroImg}
            alt="programmer"
          />
        </div>
      </div>
    </div>
  );
};
