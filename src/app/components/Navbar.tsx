"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(24);

  useEffect(() => {
    const handleScroll = () => {
      const currentOpacity = window.scrollY > 50 ? 1 : 0;
      const currentHeight = window.scrollY > 50 ? 20 : 24;
      setNavbarOpacity(currentOpacity);
      setNavbarHeight(currentHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full h-${navbarHeight} transition-height duration-500 ease-in-out flex items-center top-0 text-white`}
    >
      <div
        className={`fixed w-full h-${navbarHeight} h-24 bg-slate-500 -z-10 transition-height transition-opacity duration-500 ease-in-out opacity-${navbarOpacity}`}
      ></div>
      <div className="container flex justify-between align-middle">
        <h2>&lt;KT /&gt;</h2>
        <ul className="flex">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Projects</li>
          <li className="px-2">Resume</li>
          <li className="px-2">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
