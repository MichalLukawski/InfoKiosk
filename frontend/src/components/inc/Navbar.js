//Navbar.js
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from '../images/Logo_WAT.png';

function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isVTour = location.pathname === "/vtour";

  if (isVTour) {
    return null;
  }


    return (
        <div className='navbar-dark bg-dark shadow fixed-top'>
            <nav className="navbar navbar-expand-lg " >
                <div className="container-fluid">
                <img src={Logo} alt="Logo" width="80" height="100" className="d-inline-block align-text-top"/>
                    <Link to="/" className="navbar-brand text-white fs-1 mt-lg-2 mb-lg-2 ms-auto">Biblioteka Główna WAT</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        {!isHomePage && (
                            <li className="nav-item me-5">
                            <Link to="/" className="nav-link active text-white fs-3">Powrót</Link>
                            </li>
                        )}
                        {/*<li className="nav-item me-5">
                        <Link to="/about" className="nav-link active text-white fs-3">About</Link>
                        </li>
                        <li className="nav-item me-5">
                        <Link to="/contact" className="nav-link active text-white fs-3">Contact</Link>
    </li>*/}
                </ul>
                </div>
                </div>
            </nav>
        
        </div>
    );
}

export default Navbar;