import Contact from "./components/Contact";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Overview/>
      <Education/>
      <Skills/>
      <Portfolio/>
      {/* <Experience/> */}
      <Contact/>
      <Footer/>
    </>
  )
}