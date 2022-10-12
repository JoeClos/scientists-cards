import "./App.css";
import Profiles from "./components/Profiles";
import Navbar from "./components/Navbar";
import React from 'react';
import Carousel from "./components/Carousel";

export default function Gallery() {
  return (
    <div>
      
      <Navbar />
      <Profiles />
      {/* <Carousel /> */}
      {/* <Footer /> */}
    </div>
  );
}
