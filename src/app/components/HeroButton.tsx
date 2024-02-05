"use client";

export default function HeroButton() {
  return (
    <button
      className="text-white relative border-2 p-3 m-5 hover:bg-teal-600"
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
      Check out my work
      <span className="inline-block ml-2 align-middle transform transition-transform duration-200 ease-in-out origin-center">
        ➔
      </span>
    </button>
  );
}
