import React, { useEffect, useState } from 'react';
import { Navbar, Home, Map, News, FAQ, VTour } from './components/';
import NotFoundPage from './components/pages/NotFoundPage';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let timeout;

    const resetTimeout = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setIsInactive(true);
      }, 45000);
    };

    resetTimeout(); // Initialize timeout on component mount

    window.addEventListener('click', resetTimeout);
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keypress', resetTimeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      window.removeEventListener('click', resetTimeout);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keypress', resetTimeout);
    };
  }, []);

  useEffect(() => {
    if (isInactive) {
      navigate('/');
      setIsInactive(false); // Reset isInactive state after navigation
    }
  }, [isInactive, navigate]);

  const isVTour = location.pathname === "/vtour";
  const navbarClass = isVTour ? '0px' : '50px';

  return (
    <div className='margin' style={{ marginTop: navbarClass }}>
      <div className='main-background'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/vtour" element={<VTour />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
