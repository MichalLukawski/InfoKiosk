import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo_WAT.png';

function Navbar() {
    return (
        <div className='navbar-dark bg-dark shadow'>
           
            <nav class="navbar navbar-expand-lg ms-5">
                <div class="container-fluid">
                <img src={Logo} alt="Logo" width="80" height="100" class="d-inline-block align-text-top"/>
                    <Link to="/" class="navbar-brand text-white fs-1 mt-lg-2 mb-lg-2 ms-auto">Biblioteka Główna WAT</Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li class="nav-item me-5">
                        <Link to="/" class="nav-link active text-white fs-3">Home</Link>
                        </li>
                        <li class="nav-item me-5">
                        <Link to="/about" class="nav-link active text-white fs-3">About</Link>
                        </li>
                        <li class="nav-item me-5">
                        <Link to="/contact" class="nav-link active text-white fs-3">Contact</Link>
                        </li>
                </ul>
                </div>
                </div>
            </nav>
            
        </div>
    );
}

export default Navbar;
