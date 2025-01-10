import Contact from "./components/Contact";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Tech";
import Education from "./components/Education";
import Tech from "./components/Tech";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Overview/>
      <Education/>
      <Tech/>
      <Portfolio/>
      {/* <Experience/> */}
      <Contact/>
      <Footer/>
    </>
  )
}