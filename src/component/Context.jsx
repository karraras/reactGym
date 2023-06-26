import { useState, createContext, useContext } from "react";

const AppContext = createContext();
function AppProvide(prop) {
  const [hight, setHight] = useState(0);
  const [home, setHome] = useState(0);
  const [schedule, setSchedule] = useState(0);
  const [classes, setClasses] = useState(0);
  const [Priceing, setPriceing] = useState(0);
  const [testimonials, setTestimonials] = useState(0);
  const values = {
    hight,
    setHight,
    home,
    setHome,
    schedule,
    setSchedule,
    classes,
    setClasses,
    Priceing,
    setPriceing,
    testimonials,
    setTestimonials,
  };

  const reSize = () => {
    setHight(window.scrollY);
  };
  window.onscroll = function () {
    reSize();
  };

  return (
    <AppContext.Provider value={values}>{prop.children}</AppContext.Provider>
  );
}
function useGlobalContext() {
  return useContext(AppContext);
}
export { AppProvide, AppContext, useGlobalContext };
