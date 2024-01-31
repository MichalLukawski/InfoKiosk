//Home.js
import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css'
import MapButton from '../images/MapButton.png'
import NewsButton from '../images/NewsButton.png'
import QuestionIon from '../images/QuestionIcon.png'
import MapIcon from '../images/MapIcon.png'
import NewsIcon from '../images/NewsIcon.png'

//import Slider from '../inc/Slider';

function Home() {
    return (
    <div className="home d-flex" style={{ height: '100vh', width: '99vw'}}>
      <div className='container d-flex align-items-center justify-content-around g-lg-3' style={{position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <div className='col mx-5'>
                <Link to="/map">
                <div style={{position: 'relative'}}>
                    <a class="button-news" href="#" style={{ 
            '--before-background': `url(${MapIcon}) no-repeat left center transparent`}}>Mapa Budynku</a>
                    </div>
                </Link>
            </div>
            <div className='col mx-5'>
                <Link to="/news">
                <div style={{position: 'relative'}}>
                    <a class="button-news" href="#" style={{ 
            '--before-background': `url(${NewsIcon}) no-repeat left center transparent`}}>Aktualności</a>
                    </div>
                </Link>
            </div>
            <div className='col mx-5'>
                <Link to="/faq">
                    <div style={{position: 'relative'}}>
                    <a class="button-news" href="#" style={{ 
            '--before-background': `url(${QuestionIon}) no-repeat left center transparent`}}>FAQ</a>
                    </div>
                </Link>
            </div>
            </div>
        {/* <Slider /> */} 
    </div>
    
    );
}

export default Home;
