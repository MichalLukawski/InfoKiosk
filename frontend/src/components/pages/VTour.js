import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VTour.css';

function VTour() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            const iframe = document.getElementById("vtour-iframe");

            // Jeśli iframe się nie załadował, przekieruj do strony głównej
            if (!iframe || !iframe.contentDocument || iframe.contentDocument.readyState !== "complete") {
                navigate('/');
            }
        }, 3000); // Sprawdzenie po 5 sekundach

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={{ position: "relative", height: "100%" }}>
            <iframe
                id="vtour-iframe"
                title="Wirtualna wycieczka"
                src="https://bg.wat.edu.pl/wycieczka_wirtualna/index.html"
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
