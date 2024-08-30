import React, { useEffect } from 'react';
import { Navbar, Home, Map, News, FAQ, VTour } from './components/'
import NotFoundPage from './components/pages/NotFoundPage';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
          <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
