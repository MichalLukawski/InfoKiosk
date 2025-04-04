import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VTour.css';

function VTour() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        navigate('/');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoaded, navigate]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <iframe
        id="vtour-iframe"
        title="Wirtualna wycieczka"
        src="https://bg.wat.edu.pl/wycieczka_wirtualna/index.html"
        onLoad={() => setIsLoaded(true)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none"
        }}
      />
      <button
        className="button-vtour"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 10
        }}
        onClick={() => navigate('/')}
      >
        Powrót
      </button>
    </div>
  );
}

export default VTour;
