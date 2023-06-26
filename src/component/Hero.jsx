import { useEffect, useRef } from "react";
import { IoMdFitness } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { RiHeartPulseFill } from "react-icons/ri";
import Gym from "../assets/gym-02.png";
import { ImPlay3 } from "react-icons/im";
import { useGlobalContext } from "./Context";
import { useInView } from "react-intersection-observer";

function Hero() {
  const gym = useRef(null);
  const loc = useRef(null);
  const heart = useRef(null);
  const watchV = useRef(null);
  const textH = useRef(null);
  const start = useRef(null);

  const { setHome } = useGlobalContext();
  const { ref, entry } = useInView();

  useEffect(() => {
    entry && setHome(entry.target.offsetTop);
  }, [entry, setHome]);

  useEffect(() => {
    const Reload = () => {
      gym.current.style.top = "40px";
      gym.current.style.opacity = "1";
      gym.current.style.transitionDelay = "1s";

      loc.current.style.right = "6px";
      loc.current.style.opacity = "1";
      loc.current.style.transitionDelay = "1s";

      heart.current.style.left = "12px";
      heart.current.style.opacity = "1";
      heart.current.style.transitionDelay = "0.6s";

      watchV.current.style.marginTop = "0px";
      watchV.current.style.opacity = "1";
      watchV.current.style.transitionDelay = "0.6s";

      textH.current.style.marginTop = "0px";
      textH.current.style.opacity = "1";
      textH.current.style.transitionDelay = "0.6s";

      start.current.style.marginTop = "0px";
      start.current.style.opacity = "1";
      start.current.style.transitionDelay = "0.6s";
    };

    window.addEventListener("reload", Reload());

    return () => {
      window.removeEventListener("reload", Reload());
    };
  }, []);

  return (
    <section
      ref={ref}
      className="h-[80vh]  bg-white md:pl-32 pt-[90px] md:pr-24 "
    >
      <div className="flex gap-8">
        <div className="  flex flex-col     flex-1 pt-10">
          <div className="flex flex-col relative  gap-10  ">
            <p
              ref={watchV}
              className=" font-semibold text-3xl  duration-500 mt-10 opacity-0"
            >
              Exercise is the key to a <br />
              <span className="text-purple-700"> Healty </span> Lifestyle
            </p>
            <p ref={textH} className="text-xs opacity-0 mt-4 duration-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Laboriosam asperiores placeat maxime ratione voluptas excepturi.
            </p>
            <div
              ref={start}
              className="flex gap-10 duration-900 opacity-0 mt-4 "
            >
              <button className="py-1 h-[30px] px-6 text-xs rounded text-white bg-purple-700">
                Get Started
              </button>
              <div className="flex h-[30px] bg-slate-200 gap-3 w-fit  items-center">
                <span className="text-purple-700  w-[30px] h-[30px] flex justify-center items-center rounded-full bg-white">
                  <ImPlay3 />
                </span>
                <p className="text-xs">Watch Video</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative  flex justify-end flex-1 ">
          <span className="absolute bg-slate-500"></span>
          <span
            ref={gym}
            className="left-0 top-0 opacity-0 duration-500  absolute  h-7 w-7  bg-rose-600 flex rounded drop-shadow-md text-slate-100 items-center justify-center  "
          >
            <IoMdFitness />
          </span>
          <img className="w-11/12 h-10/12" src={Gym} alt=".." />

          <div
            ref={loc}
            className="rounded  duration-500 opacity-0 -right-6 top-6 p-2 absolute w-[100px] h-[110px]  flex flex-col items-center justify-center gap-2 shadow-[#7e22ce]  drop-shadow-lg bg-white "
          >
            <span className="h-[30px] text-white bg-purple-700 w-[30px] rounded-full flex items-center justify-center ">
              <TiLocation size={20} />
            </span>
            <p className="text-xs  font-semibold text-center">
              Find a new gym near you
            </p>
          </div>
          <div
            ref={heart}
            className=" duration-500  opacity-0 -left-4 bottom-14 absolute w-[90px] h-[90px] flex flex-col items-center justify-center gap-2 shadow-[#7e22ce]  rounded drop-shadow-md bg-white "
          >
            <p className="text-xs text-center">Heart Rate</p>
            <span className="rounded text-rose-600 bg-purple-400 w-6 h-6 flex items-center justify-center">
              <RiHeartPulseFill size={12} />
            </span>
            <p className="text-xs font-semibold  text-center">2567 BPM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
