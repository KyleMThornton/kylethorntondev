"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(6);

  useEffect(() => {
    const handleScroll = () => {
      const currentOpacity = window.scrollY > 50 ? 1 : 0;
      const currentHeight = window.scrollY > 50 ? 5 : 6;
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
      style={{ height: `${navbarHeight}rem` }}
      className="fixed w-full transition-height duration-500 ease-in-out flex items-center top-0 text-white"
    >
      <div
        style={{ height: `${navbarHeight}rem`, opacity: navbarOpacity }}
        className="fixed w-full transition-height transition-opacity duration-1000 ease-in-out flex items-center top-0 bg-slate-400 -z-10"
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
