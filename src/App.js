import "./App.css";
import Profiles from "./components/Profiles";
import Navbar from "./components/Navbar";
import {React, useState} from 'react';
import Modal from "./components/Modal";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      
      <Navbar />
      <Profiles />
     

      {/* <Footer /> */}
    </div>
  );
}
