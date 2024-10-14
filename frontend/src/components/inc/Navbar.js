//Navbar.js
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from '../images/library-logo.png';

function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isVTour = location.pathname === "/vtour";

    if (isVTour) {
        return null;
    }

    return (
        <div className='navbar-dark bg-secondary shadow fixed-top navbar-expand-lg'style={{width: '100vw'}}>
            <nav className="navbar"  >
                <div className="container-fluid ms-5" >
                    <img src={Logo} alt="Logo" style={{width: '3.125vw', height: 'auto'}} className="d-inline-block align-text-top"/>
                    <Link to="/" className="navbar-brand text-white" style={{fontSize: '1.5625vw', width:'50vw'}}>Biblioteka Główna Wojskowej Akademii Technicznej</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5">
                            {!isHomePage && (
                                <li className="nav-item me-5">
                                    <Link to="/" className="nav-link active text-white fs-3">Powrót</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
