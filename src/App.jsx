import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Special from "./Special";
import ArrowLongDown from "./assets/ArrowLongDown";

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <div className="flex justify-center">
        <div className="relative">
          <div className="animate absolute bottom-8">
            <ArrowLongDown />
          </div>
        </div>
      </div>
      <Courses />
      <Special />
      <Contact />
      <Footer />
    </div>
  );
}
