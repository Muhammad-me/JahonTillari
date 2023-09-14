import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Special from "./Special";
import ArrowLongDown from "./assets/ArrowLongDown";

export default function Home() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <Navbar />
      <About />
      <div className="relative">
        <div
          onClick={() => scrollToTop()}
          className="rotate-180 fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-violet-700 flex justify-center items-center cursor-pointer">
          <ArrowLongDown />
        </div>
      </div>
      <Courses />
      <Special />
      <Contact />
      <Footer />
    </div>
  );
}
