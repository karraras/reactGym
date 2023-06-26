import trainer from "../assets/trainer.png";
import { useGlobalContext } from "./Context";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Classes() {
  const { hight, setClasses } = useGlobalContext();

  const { ref, entry } = useInView();
  useEffect(() => {
    entry && setClasses(entry.target.offsetTop);
  }, [entry, setClasses]);

  return (
    <section ref={ref} className=" h-[80vh] px-32">
      <div className="flex gap-8 ">
        <div
          className={`flex-1 border-l-orange-100 duration-300  ${
            hight > 250 ? "translate-x-0" : "-translate-x-16"
          }`}
        >
          <img src={trainer} alt="..." />
        </div>
        <div className="flex-1">
          <div
            className={`flex-col w-full  h-full duration-300 
            ${
              hight > 500
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-16"
            }
             py-8 flex justify-center`}
          >
            <h1 className="text-3xl">
              Ready to make a <span className="text-purple-700">change?</span>
            </h1>
            <p className="mt-8 mb-10 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              eius cumque amet accusantium blanditiis commodi sint vitae,
              dolorem necessitatibus est ipsam at libero neque quaerat vel iure
              mollitia rem enim.
            </p>
            <button className="py-1 w-[150px] h-[30px] px-6 text-xs rounded text-white bg-purple-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Classes;
