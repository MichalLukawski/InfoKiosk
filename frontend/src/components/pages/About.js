import React, { useState } from 'react';

function AboutUs() {
    const [mainImage, setMainImage] = useState('BG.jpg');

    const handleAreaClick = (imageName) => {
        setMainImage(imageName);
    }

    const handleImageClick = (event) => {
        var rect = event.target.getBoundingClientRect();
        var x = event.clientX ; //x position within the element.
        var y = event.clientY ;  //y position within the element.
        console.log("Left coordinates: " + x + ", Top coordinates: " + y);
    }

    return (
        <div className='container'>
            <div className='card mt-4'> 
                <div className='card-body'>
                    <h2>About Page</h2>
                    <img src={require(`../images/${mainImage}`)} useMap="#workmap" alt="Plan" onClick={handleImageClick} width="1000" height="1000"/>
                    <map name="workmap">
                    <div onClick={handleImageClick}/>
                        <area shape="rect" coords="0,400,150,600" alt="Pomieszczenie 1" onClick={() => handleAreaClick('BG10.jpg')} />
                        <area shape="rect" coords="0,600,150,800" alt="Pomieszczenie 2" onClick={() => handleAreaClick('BG11.jpg')} />
                    </map>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
