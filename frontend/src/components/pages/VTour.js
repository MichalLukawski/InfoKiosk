// VTour.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VTour.css'

function VTour() {
    return (
        <div style={{ position: "relative", height: "100%" }}>
            <iframe 
                title="Wirtualna wycieczka"
                src="https://bg.wat.edu.pl/wycieczka_wirtualna/index.html"  
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
            />
            <Link to="/" className="button-vtour" style={{position: 'absolute', marginTop: '5px'}}>
            Powrót
            </Link>
        </div>
    );
}

export default VTour;