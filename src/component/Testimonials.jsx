import slide1 from "../assets/avatar01.png";
import { useEffect } from "react";
import slide2 from "../assets/avatar02.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import { useGlobalContext } from "./Context";
import { useInView } from "react-intersection-observer";

function Testimonials() {
  const { setTestimonials } = useGlobalContext();
  const { ref, entry } = useInView();
  useEffect(() => {
    entry && setTestimonials(entry.target.offsetTop);
  }, [entry, setTestimonials]);

  return (
    <section ref={ref} className="h-[90vh] px-32  ">
      <div className="flex flex-col pt-6 gap-10">
        <h1 className="text-3xl text-center">Testimonials</h1>
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            slidesPerView={1}
            className=" w-[300px] "
          >
            <SwiperSlide className="w-[300px] bg-white">
              <div className="flex flex-col gap-4 p-4 cursor-pointer">
                <img
                  src={slide1}
                  alt=""
                  className="w-[300px] bg-purple-300 rounded"
                />
                <h1 className="text-xs font-semifont">Jesica Fernandes</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore cumque quod corporis incidunt, repudiandae perspiciatis
                  nam ex ipsam vel aspernatur!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[300px] bg-white">
              <div className="flex flex-col gap-4 p-4 cursor-pointer">
                <img
                  src={slide2}
                  alt=""
                  className="w-[300px] bg-purple-300 rounded"
                />
                <h1 className="text-xs font-semifont">Jesica Fernandes</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore cumque quod corporis incidunt, repudiandae perspiciatis
                  nam ex ipsam vel aspernatur!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
