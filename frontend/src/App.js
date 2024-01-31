//App.js
import React from 'react';
import './App.css'
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Map from './components/pages/Map'
import News from './components/pages/News'
import FAQ from './components/pages/FAQ'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>  
        <Navbar />
        <div className='border border-primary-subtle' style={{height: '100vh', backgroundColor: '#D3D3D3', marginTop: '110px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
          <Route path="/news" element={<News/>} />
          <Route path="/faq" element={<FAQ/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
