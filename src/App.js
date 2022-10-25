import "./App.css";
import {React} from 'react';
// import Modal from "./components/Modal";
import FirstPage from "./components/FirstPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilesList from "./components/ProfilesList";
import Profile from "./components/Profile";

export default function Gallery() {
  // const [modalOpen, setModalOpen] = useState(false);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
            <Route path="/profiles" element={<ProfilesList />}/>
            <Route path="/profile/:profileId" element={<Profile />} />
          
        </Routes>
      </BrowserRouter>
  );
}
