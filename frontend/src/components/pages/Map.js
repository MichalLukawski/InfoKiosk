import React, { useState } from 'react';
import './Map.css';

function Map() {
    const [mainImage, setMainImage] = useState('BG.jpg');
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleAreaClick = (imageName) => {
        setMainImage(imageName);
    }

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    const handleImageClick = (event) => {
        var x = event.clientX;
        var y = event.clientY;
        console.log("Left coordinates: " + x + ", Top coordinates: " + y);
    }

    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <div>
                <img
                    src={require(`../images/${mainImage}`)}
                    useMap="#workmap"
                    alt="Plan"
                    onClick={handleImageClick}
                    onLoad={handleImageLoad}
                    width="1000"
                    height="1000"
                    className={imageLoaded ? "map-image loaded" : "map-image"}
                />
                <map name="workmap">
                    <area shape="rect" coords="-15,550,105,775" alt="Pomieszczenie 1" onClick={() => handleAreaClick('BG10.jpg')} />
                    <area shape="rect" coords="-15,775,105,1000" alt="Pomieszczenie 2" onClick={() => handleAreaClick('BG11.jpg')} />
                </map>
            </div>
        </div>
    );
}

export default Map;
