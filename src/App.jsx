import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import HairStyle from './pages/HairStyle';
import Location from './pages/Location';
import FacialMassage from './pages/FacialMassage';
import Coloring from './pages/Coloring';
import BackButton from "./components/BackButton"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainRoutes />
      <BackButton /> {/* Global back button */}
    </Router>
  );
};

// This component manages routes and checks if we are on the About page
const MainRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hairstyle" element={<HairStyle />} />
        <Route path="/location" element={<Location />} />
        <Route path="/coloring" element={<Coloring />} />
        <Route path="/FacialMassage" element={<FacialMassage />} />
      </Routes>

      {/* Footer appears only when on the About page */}
      {location.pathname === "/about" && <Footer />}
    </>
  );
};

export default App;
