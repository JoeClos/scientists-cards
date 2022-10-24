import "./App.css";
import Profiles from "./components/Profiles";
import Navbar from "./components/Navbar";
import {React, useState} from 'react';
import Modal from "./components/Modal";
import FirstPage from "./components/FirstPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
            <Route path="/profiles" element={<Profiles />}/>
            {/* <Route path="/profile/:id" /> */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
