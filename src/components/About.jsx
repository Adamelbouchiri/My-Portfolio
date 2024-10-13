import React from "react";
// import { motion, useInView } from "framer-motion";

export const About = () => {

  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 pb-8
    text-zinc-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:px-20">
        <div className="pb-8">
          <p
            className="cursor-default text-4xl font-semibold tracking-widest pb-2
          border-b-4 border-purple-400 w-fit"
          >
            About <span className="text-purple-400">Me</span>
          </p>
        </div>
        <h1 className="cursor-default text-2xl text-zinc-50 text-center font-semibold tracking-wide pb-8">
          Fundamentals Of Programming<span className="text-purple-400">.</span>
        </h1>
        <p className="leading-7">
          Hi, I'm Adam El Bouchiri, a 20-year-old self-taught developer. <br />I
          embarked on my programming journey by diving deep into C++. I honed my
          problem-solving skills through countless algorithms and gained a solid
          foundation in functional programming, object-oriented programming, and
          data structures. To broaden my skillset, I delved into SQL Server,
          mastering database management. Building on this foundation, I
          transitioned to the backend world, starting with .NET C#. To complete
          the full-stack picture
        </p>
        <br />
        <br />
        <h1 className="cursor-default text-2xl text-zinc-50 text-center font-semibold tracking-wide pb-8">
          Fullstack web dev Journey<span className="text-purple-400">.</span>
        </h1>
        <p className="leading-7">
          I acquired proficiency in HTML, CSS, and JavaScript, including modern
          JavaScript features. I enhanced my web development capabilities with
          CSS frameworks like Bootstrap and Tailwind, while also mastering
          version control with Git and GitHub. Seeking to explore frontend
          frameworks, I began with Vue.js, implementing lightweight projects to
          solidify my understanding. Eager to delve further, I turned to
          React.js, creating more complex projects to showcase my abilities.
          Finally, to strengthen my backend expertise, I learned Laravel, a
          popular PHP framework.
        </p>
      </div>
    </div>
  );
};
