// NotFoundPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Zmień useHistory na useNavigate

function NotFoundPage() {
  const navigate = useNavigate(); // Zmień useHistory na useNavigate

  useEffect(() => {
    setTimeout(() => {
      navigate('/'); // Zmień history.push na navigate
    }, 5000); // Przekierowuje do strony głównej po 5 sekundach
  }, [navigate]); // Zmień history na navigate

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center', // Wyśrodkowanie tekstu w poziomie
      alignItems: 'center', // Wyśrodkowanie tekstu w pionie
      height: '100vh' // Ustawienie wysokości na 100% wysokości widoku
    }}>
      Ta strona nie istnieje, przekierowuje do strony głównej...
    </div>
  );
}

export default NotFoundPage;
