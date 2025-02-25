import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hairstyle" element={<HairStyle />} />
        <Route path="/location" element={<Location />} />
        <Route path="/coloring" element={<Coloring />} />
        <Route
          path="/facial-massage"
          element={<FacialMassage
          />}
        />      

      </Routes>
      <Footer
        title="Sundaram Salon"
        description="© 2021 Sundaram Salon. All rights reserved."
      />
    </Router>
  );
};

export default App;
