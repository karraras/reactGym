import { useRef, useEffect, useState } from "react";
import { IoMdFitness } from "react-icons/io";
import { useGlobalContext } from "./Context";

function Navbar() {
  const { Priceing, classes, home, schedule, testimonials } =
    useGlobalContext();
  const [NavH, setNavH] = useState(0);
  const navHeight = useRef(null);

  useEffect(() => {
    setNavH(navHeight.current.getBoundingClientRect().height);
  }, [NavH]);

  const links = [
    {
      name: "Home",
    },
    {
      name: "Schedule",
    },
    {
      name: "Classes",
    },
    {
      name: "Pricing",
    },
    {
      name: "Testimonials",
    },
  ];
  function handleScroll(e) {
    let moveTop = e.target.innerText;
    if (moveTop === "Pricing") {
      window.scrollTo({
        top: Priceing - NavH,
        behavior: "smooth",
      });
    } else if (moveTop === "Classes") {
      window.scrollTo({
        top: classes - NavH,
        behavior: "smooth",
      });
    } else if (moveTop === "Home") {
      window.scrollTo({
        top: home - NavH,
        behavior: "smooth",
      });
    } else if (moveTop === "Schedule") {
      window.scrollTo({
        top: schedule - NavH,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: testimonials - NavH,
        behavior: "smooth",
      });
    }
  }
  return (
    <nav
      ref={navHeight}
      className={`md:px-32 z-10 py-3 bg-white fixed w-full ${
        window.scrollY > 0 && "shadow-md"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-1">
          <span className=" h-8 w-8  flex rounded drop-shadow-md text-slate-100 items-center justify-center bg-purple-700">
            <IoMdFitness />
          </span>
          <p className="font-semibold text-xl tracking-[-1px]">Fitbody</p>
        </div>
        <ul className="flex gap-6">
          {links.map((item, index) => {
            return (
              <li
                onClick={handleScroll}
                key={index}
                className="flex hover:text-purple-700 duration-300 cursor-pointer items-center justify-center"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <button className="py-1 px-4 text-white rounded bg-purple-700">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
