import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Baianalista from './pages/Baianalista/Baianalista';
import Sociais from './pages/Sociais/Sociais';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";

function MainRouter() {
 return (
  <>
  <NavBar />
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/sobre" element={<About />} />
   <Route path="/baianalista" element={<Baianalista />} />
   <Route path="/sociais" element={<Sociais />} />
  </Routes>
  <Footer />
  </>
 );
}

export default MainRouter;