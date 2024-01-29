import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css'
//import Slider from '../inc/Slider';

function Home() {
    return (
        <div className="home container text-center d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', minWidth: '100vh'}}>
            <div className='row row-cols-2 row-cols-lg-3 g-lg-5'>
                
                <div className='col'>
                    <p className='p-5 card'><Link to="/map" class="nav-link active fs-3">Mapa</Link></p>
                </div>
                <div className='col'>
                <p className='p-5 card'><Link to="/news" class="nav-link active fs-3">Aktualności</Link></p>              
                </div>
                <div className='col'>
                    <p className="p-5 card">Wydarzenia</p>
                </div>        
                <div className='col'>
                    <p className="p-5 card">Nowości książkowe</p>
                </div>
                <div className='col'>
                    <p className="p-5 card">Kontakt</p>                    
                </div>
                <div className='col'>
                    <p className="p-5 card">FAQ</p>
                </div>
            </div>
             
           {/* <Slider /> */} 
        </div>
    );
}

export default Home;
