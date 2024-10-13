import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="px-4 flex justify-between items-center w-full h-20 text-white fixed bg-zinc-900">
      <div className="">
        <h1 className="text-3xl font-bold ml-2 tracking-widest">
          Adam<span className="text-purple-500 font-bold">.</span>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 duration-200 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 hover:text-purple-600"
          >
            <Link to={link.link} smooth duration={500}>{link.link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer me-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-20 right-0 w-2/5 h-[450px] rounded-b-xl duration-300
        bg-gradient-to-b from-zinc-900 to-zinc-500 text-white"
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer duration-200 hover:scale-105 capitalize py-6 text-2xl hover:text-purple-600"
            >
              <Link onClick={()=> setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
