import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Sociais from './pages/Sociais/Sociais';
import NavBar from "./components/NavBar/NavBar";

function MainRouter() {
 return (
  <>
  <NavBar />
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/sobre" element={<About />} />
   <Route path="/projetos" element={<Projects />} />
   <Route path="/sociais" element={<Sociais />} />
  </Routes>
  </>
 );
}

export default MainRouter;