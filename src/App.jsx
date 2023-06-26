import Classes from "./component/Classes";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Priceing from "./component/Priceing";
import Schedule from "./component/Schedule";
import Testimonials from "./component/Testimonials";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Schedule />
      <Classes />
      <Priceing />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
