// VTour.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VTour.css'

function VTour() {
    return (
        <div style={{ position: "relative", height: "100%" }}>
            <iframe 
                src="https://bg.wat.edu.pl/wycieczka_wirtualna/index.html"  // URL strony, którą chcesz wyświetlić
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
            />
            <Link to="/">
              <div style={{position: 'absolute', marginTop: '10px'}}>
                <a class="button-vtour" href="#" >Powrót</a>
              </div>
            </Link>
        </div>
    );
}

export default VTour;