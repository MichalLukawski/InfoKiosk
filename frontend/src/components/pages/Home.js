// Home.js
import React from 'react';
import { InterfaceButton, MapIcon, NewsIcon, QuestionIcon, TourIcon } from '../'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home d-flex">
            <div className='main container d-flex flex-column align-items-center justify-content-around g-lg-2 mt-5'>
                <div className='row justify-content-around w-100'>
                    <InterfaceButton to="/map" icon={MapIcon} label="Mapa Budynku" />
                    <InterfaceButton to="/news" icon={NewsIcon} label="Aktualności" />
                    <InterfaceButton to="/faq" icon={QuestionIcon} label="FAQ" />
                </div>
                <div className='row justify-content-center w-100 mt-5'>
                    <InterfaceButton to="/vtour" icon={TourIcon} label="Wirtualna wycieczka" />
                </div>
            </div>
        </div>
    );
}

export default Home;