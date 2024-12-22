import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
