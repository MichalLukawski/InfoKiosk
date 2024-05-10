import React from 'react';
import { Navbar, Home, Map, News, FAQ, VTour} from './components/'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>  
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isVTour = location.pathname === "/vtour"; // "1. Operator równości ścisłej"
  const navbarClass = isVTour ?  '0px' : '50px';

  return (
    <div className='margin' style={{marginTop: navbarClass}}>
      <div className='mian-background'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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