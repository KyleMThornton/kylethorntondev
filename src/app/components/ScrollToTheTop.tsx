"use client";

import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export default function ScrollToTheTop() {
  const [arrowOpacity, setArrowOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOpacity = window.scrollY > 50 ? 1 : 0;
      setArrowOpacity(currentOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <span
      className="fixed bottom-0 right-0 p-10 text-6xl text-black transition-opacity duration-500 ease-in-out cursor-pointer z-20"
      style={{ opacity: `${arrowOpacity}` }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaRegArrowAltCircleUp />
    </span>
  );
}
