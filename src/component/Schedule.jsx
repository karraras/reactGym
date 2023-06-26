import lunges from "../assets/lunges.png";
import extend from "../assets/extended.png";
import yoga from "../assets/yoga-pose.png";
import { useGlobalContext } from "./Context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Schedule() {
  const { setSchedule } = useGlobalContext();

  const { ref, entry } = useInView();
  useEffect(() => {
    entry && setSchedule(entry.target.offsetTop);
  }, [entry, setSchedule]);

  const exercise = [
    {
      img: lunges,
      name: "Exercise",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, perferendis.`,
    },
    {
      img: extend,
      name: "Healthy Life",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, perferendis.`,
    },
    {
      img: yoga,
      name: " Reducing Blood Pressure",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium, perferendis.`,
    },
  ];

  const { hight } = useGlobalContext();
  return (
    <section ref={ref} className="md:px-32   py-[10px]  gap-10 flex flex-col">
      <div className="w-full flex justify-center">
        <div className="w-[350px] text-center">
          <h1 className="text-xl font-bold mb-2">
            Benefits of <span className="text-purple-700">Exercise</span>
          </h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, perferendis.
          </p>
        </div>
      </div>
      <div className="p-10 gap-10 bg-purple-700 rounded flex">
        {exercise.map((item, index) => {
          return (
            <div
              className={`flex flex-row gap-4  duration-300 items-center ${
                hight > 150 ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              key={index}
            >
              <img
                className="h-12 w-12 bg-white rounded p-1 "
                src={item.img}
                alt="..."
              />
              <div>
                <p className="text-xs  text-white  font-semibold">
                  {item.name}
                </p>
                <p className="text-xs text-slate-200 ">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Schedule;
