//Home.js
import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css'
import MapButton from '../images/MapButton.png'
import NewsButton from '../images/NewsButton.png'
//import Slider from '../inc/Slider';

function Home() {
    return (
    <div className="home d-flex" style={{ height: '100vh', width: '99vw'}}>
      <div className='container d-flex align-items-center justify-content-around g-lg-3' style={{position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <div className='col mx-5'>
                <Link to="/map">
                    <div style={{position: 'relative'}}>
                        <img src={MapButton} alt="Mapa" style={{width: '100%', height: 'auto'}}/>
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center'}}>
                        <p class="h2"> Mapa <br/> Budynku</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='col mx-5'>
                <Link to="/news">
                    <div style={{position: 'relative'}}>
                        <img src={NewsButton} alt="Aktualności" style={{width: '100%', height: 'auto'}}/>
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>
                        <p class="h2">Aktualności</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='col mx-5'>
                <Link to="/faq">
                    <div style={{position: 'relative'}}>
                        <img src={MapButton} alt="FAQ" style={{width: '100%', height: 'auto'}}/>
                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>
                            FAQ
                        </div>
                    </div>
                </Link>
            </div>
            </div>
        {/* <Slider /> */} 
    </div>
    
    );
}

export default Home;
