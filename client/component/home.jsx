import React from "react";
import Navbar  from './subcomp/Navbar';
import Slider from "./subcomp/Slider";
import CardSlides from './subcomp/cardSlide'
import Footer from "./subcomp/Footer";
export default function Home(){
    return(
        <>
      {/* <Navbar /> */}
      <Slider />
      <CardSlides />
      <Footer />
      </>
    );
}