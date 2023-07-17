import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import { Route, Routes, useLocation } from 'react-router-dom/dist';
import { useState } from 'react';

function App() {
  let location = useLocation();
  const pathname = ['/contact'];

import Articles from '../Articles/Articles';
import { Route, Routes } from 'react-router-dom/dist';
import { useState } from 'react';
import Popup from '../Popup/Popup';
import NavigatePopup from '../NavigatePopup/NavigatePopup';

function App() {

  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="App">
      <Header openPopup={handlePopup} popup={popup} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
      <Popup
        openPopup={popup}
        children={<NavigatePopup handlePopup={handlePopup} />}
      />
    </div>
  );
}

export default App;
