//Map.js
import React, { useState } from 'react';
import RoomList from '../inc/RoomList';
import '../styles/Map.css';

function Map() {
  const [mainImage] = useState('BG0.png');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [highlightedRoom, setHighlightedRoom] = useState('');



 

  const handleImageLoad = () => {
    setImageLoaded(true);
  }

  const handleImageClick = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    console.log("Left coordinates: " + x + ", Top coordinates: " + y);
  }

  const handleRoomButtonClick = (roomName) => {
    setHighlightedRoom(roomName);
  }

  return (
         
    <div className='d-flex justify-content-around text-center'>
<div className='col-2'><p>Biblioteka, to miejsce, które emanuje ciszą i spokojem. Przy wejściu, zapach starych książek miesza się z nutą świeżego papieru nowych wydań. Wielkie, drewniane regały wypełnione są książkami od podłogi aż po sufit. Każdy rząd książek jest starannie uporządkowany według systemu klasyfikacji, co ułatwia odnalezienie poszukiwanej pozycji.

Naturalne światło wpada przez duże okna, tworząc ciepłą atmosferę. Czytelnicy siedzą przy długich, drewnianych stołach, zanurzeni w swoich lekturach. Niektórzy korzystają z komputerów, przeglądając katalogi online lub pracując nad swoimi projektami.

W jednym z kątów znajduje się wygodna strefa wypoczynkowa z miękkimi fotelami i niskim stolikiem. Tu czytelnicy mogą zrelaksować się z kubkiem kawy i dobrą książką. Na ścianach wiszą obrazy i plakaty promujące literaturę i kulturę.

Biblioteka jest miejscem, które łączy pokolenia - od studentów po emerytów. Każdy znajdzie tu coś dla siebie, niezależnie od zainteresowań.
</p></div>
      <div className='map col' style={{ position: 'relative' }}>

        <img
          src={require(`../images/${mainImage}`)}
          useMap="#workmap"
          alt="Plan"
          onClick={handleImageClick}
          onLoad={handleImageLoad}
          width="1000"
          height="1000"
          className={imageLoaded ? "map-image loaded" : "map-image"}
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, pointerEvents: 'none' }}
        />
        <button
          className={highlightedRoom === 'Pomieszczenie 1' ? 'highlighted' : ''}
          style={{ position: 'absolute', top: '394px', left: '32px', width: '154.5px', height: '509px'}}
          onClick={() => handleRoomButtonClick('Pomieszczenie 1')}
        >
          Pomieszczenie 1
        </button>
        
        <button
          className={highlightedRoom === 'Pomieszczenie 2' ? 'highlighted' : ''}
          style={{position: 'absolute', top: '95px', left: '20px', width: '160px', height: '290px',}}
          onClick={() => handleRoomButtonClick('Pomieszczenie 2')}
        >
          Pomieszczenie 2
        </button>
      </div>
      <div >
      <RoomList onRoomClick={handleRoomButtonClick} />   
      </div>
    </div>
  );
}

export default Map;
