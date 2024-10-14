// Home.js
import React from 'react';
import { InterfaceButton, MapIcon, NewsIcon, QuestionIcon, TourIcon } from '../'
import '../styles/Home.css'
import Background from '../images/Interface5.png';

function Home() {
    return (
        <div className="home d-sm-flex" >
            <img
            src={Background}
            useMap="#workmap"
          alt="Plan"
          style={{ position: 'absolute', top: '5.2vh', left: 0, zIndex: 0, pointerEvents: 'none', width: '100vw', height: '100vh' }} />
            <div className='main container col-8 d-flex  align-items-center justify-content-around g-lg-2'>
                <div className='row justify-content-sm-around w-100 me-5' >
                    <InterfaceButton to="/map" icon={MapIcon} label="Mapa Budynku" />
                    <InterfaceButton to="/news" icon={NewsIcon} label="Aktualności" />
                    <InterfaceButton to="/faq" icon={QuestionIcon} label="FAQ" />
                </div>
                <div className='row justify-content-sm-center w-100 me-5' >
                    <InterfaceButton to="/vtour" icon={TourIcon} label="Wirtualna wycieczka" />
                </div>
            </div>
        </div>
    );
}

export default Home;
