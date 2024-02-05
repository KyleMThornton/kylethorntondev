"use client";

//TODO: underline on section change
//TODO: add smooth scroll to section change
//https://nikolasbarwicki.com/articles/highlight-currently-active-link-in-nextjs-13-with-app-router/

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
      className="fixed w-full transition-height duration-500 ease-in-out flex items-center top-0 text-white text-xl z-10"
    >
      <div
        style={{ height: `${navbarHeight}rem`, opacity: navbarOpacity }}
        className="fixed w-full transition-height transition-opacity duration-500 ease-in-out flex items-center top-0 bg-slate-400"
      ></div>
      <div className="container flex justify-between align-middle z-20">
        <h2>&lt;KT /&gt;</h2>
        <ul className="flex hover:cursor-pointer">
          <li className="px-2 animated-underline">
            <a
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("home");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Home
            </a>
          </li>
          <li className="px-2 animated-underline">
            <a
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("about");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              About
            </a>
          </li>
          <li className="px-2 animated-underline">
            <a
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Projects
            </a>
          </li>
          <li className="px-2 animated-underline">
            <a
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
