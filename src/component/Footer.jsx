import { IoMdFitness } from "react-icons/io";

function Footer() {
  const foot = [
    { head: "Company", links: ["Our program", "Our plan", "Become a member"] },
    { head: "Quicks Links", links: ["About us", "Contact us", "Support"] },
    { head: "Quicks Links", links: ["About us", "Contact us", "Support"] },
  ];
  return (
    <footer className="px-32 h-[40vh] py-8 bg-purple-300">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-4 ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 ">
              <span className=" h-6 w-6  flex rounded drop-shadow-md text-slate-100 items-center justify-center bg-purple-700">
                <IoMdFitness size={15} />
              </span>
              <p className="font-semibold text-base tracking-[-1px]">Fitbody</p>
            </div>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              tempora!
            </p>
          </div>

          {foot.map((item, ind) => {
            return (
              <div key={ind} className="flex flex-col gap-4">
                <p className="text-xs font-semibold ">{item.head}</p>
                {
                  <ul>
                    {item.links.map((ie, index) => {
                      return (
                        <li className="text-xs py-[2px] " key={index}>
                          {ie}
                        </li>
                      );
                    })}
                  </ul>
                }
              </div>
            );
          })}
        </div>
        <p className="text-[10px] text-center">
          {`
          Copyright - ${new Date().getFullYear()}  developed by Muhib.All rights reserved.
            
            
            `}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
