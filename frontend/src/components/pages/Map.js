import React, { useState } from 'react';

function Map() {
    const [mainImage, setMainImage] = useState('BG.jpg');

    const handleAreaClick = (imageName) => {
        setMainImage(imageName);
    }

    const handleImageClick = (event) => {
      //  var rect = event.target.getBoundingClientRect();
        var x = event.clientX ; //x position within the element.
        var y = event.clientY ;  //y position within the element.
        console.log("Left coordinates: " + x + ", Top coordinates: " + y);
    }

    return (
        <div className='container d-flex align-items-center justify-content-center'>
         
              
                <div >
             <img src={require(`../images/${mainImage}`)} useMap="#workmap" alt="Plan" onClick={handleImageClick} width="1000" height="1000"/>
         <map name="workmap">
                   
         <area shape="rect" coords="-15,550,105,775" alt="Pomieszczenie 1" onClick={() => handleAreaClick('BG10.jpg')&&handleImageClick} />
         <area shape="rect" coords="-15,775,105,1000" alt="Pomieszczenie 2" onClick={() => handleAreaClick('BG11.jpg')&&handleImageClick} />
     </map>
     </div>
            </div>
        
       
    );
}

export default Map;
