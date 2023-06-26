import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "./Context";
function Priceing() {
  const { hight, setPriceing } = useGlobalContext();

  const { ref: TopPrice, entry } = useInView();

  useEffect(() => {
    entry && setPriceing(entry.target.offsetTop);
  }, [entry, setPriceing]);

  const priceing = [
    {
      head: "Regular Member",
      price: "$50 ",
      detail: [
        "Unlimited access to the gym",
        "Customer support",
        "Personal trainer",
        "Standard options",
        "5 classes per week",
      ],
    },
    {
      head: "Premium Member",
      price: "$70 ",
      detail: [
        "Unlimited access to the gym",
        "Customer support",
        "Personal trainer",
        "Standard options",
        "5 classes per week",
      ],
    },

    {
      head: "Standard Member",
      price: "$100 ",
      detail: [
        "Unlimited access to the gym",
        "Customer support",
        "Personal trainer",
        "Standard options",
        "5 classes per week",
      ],
    },
  ];
  return (
    <section
      ref={TopPrice}
      className="md:px-32   pb-[20px] pt-[10px] overflow-hidden gap-10 flex flex-col"
    >
      <div className="w-full flex justify-center ">
        <div className="w-[350px] text-center">
          <h1 className="text-xl font-bold mb-2">
            Gym <span className="text-purple-700">Pricing</span>
          </h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, perferendis.
          </p>
        </div>
      </div>
      <div
        className={`flex duration-300 ${
          hight > 950
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-50"
        }  gap-4 `}
      >
        {priceing.map((item, i) => {
          return (
            <div
              key={i}
              className=" rounded  flex-1 flex flex-col shadow-md overflow-hidden bg-white "
            >
              <div
                className={` ${
                  i === 1 && "bg-purple-700 text-white"
                } border-b  py-6 flex items-center flex-col justify-center border-solid border-slate-400`}
              >
                <h1 className="font-semibold">{item.head}</h1>
                <p className="font-semibold">
                  {item.price}{" "}
                  <span className={`text-xs ${i === 1 && "text-slate-200"}`}>
                    /month
                  </span>
                </p>
              </div>
              <div
                className={` marker:text-base p-6 ${
                  i === 1 && "marker:text-purple-700  "
                }`}
              >
                {item.detail.map((ie, i) => {
                  return (
                    <li className={`text-xs  `} key={i}>
                      {ie}
                    </li>
                  );
                })}
              </div>
              <div className="flex justify-center items-center py-4">
                <button className="bg-purple-700  rounded text-white  py-1 px-4">
                  Join Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Priceing;
