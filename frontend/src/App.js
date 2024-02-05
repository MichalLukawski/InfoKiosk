import React from 'react';
import './App.css'
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Map from './components/pages/Map'
import News from './components/pages/News'
import FAQ from './components/pages/FAQ'
import VTour from './components/pages/VTour'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>  
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isVTour = location.pathname === "/vtour";

  const navbarClass = isVTour ?  '0px' : '110px';

  return (
    <div className='margin' style={{marginTop: navbarClass}}>
      <div className='border border-primary-subtle' style={{height: '100vh', backgroundColor: '#D3D3D3'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/vtour" element={<VTour/>} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;