// InterfaceButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/InterfaceButton.css'

function getStyles(label, icon) {
    const isVirtualTour = label === "Wirtualna wycieczka"; // Waruneki stylizowania przycisku 'Wirtualna wycieczka
    const lineHeight = isVirtualTour ? '1.2' : '';
    const paddingTop = isVirtualTour ? '60px' : '';

    return {
        '--before-background': `url(${icon}) no-repeat left center transparent`, // Niestandartowa zmienna użyta w .css
        lineHeight: lineHeight, paddingTop: paddingTop //Realizacja stylizwoania przycisku 'Wirtualna wycieczka
    };
}

function InterfaceButton({ to, icon, label }) {
    return (
        <div className='col-3 mx-5' style={{position: 'relative'}}>
            <Link to={to} style={getStyles(label, icon)} className="interfaceButton">
                    {label}    
            </Link>
        </div>
    );
}

export default InterfaceButton;

