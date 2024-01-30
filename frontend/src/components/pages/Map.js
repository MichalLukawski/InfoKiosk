import React, { useState } from 'react';
import RoomList from '../inc/RoomList';
import '../styles/Map.css';

function Map() {
  const [mainImage, setMainImage] = useState('BG0.png');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [highlightedRoom, setHighlightedRoom] = useState('');

  const rooms = [
    { name: 'Pomieszczenie 1', image: 'BG10.jpg' },
    { name: 'Pomieszczenie 2', image: 'BG11.jpg' },
    // Dodaj więcej pomieszczeń tutaj
  ];

  const handleAreaClick = (roomName) => {
    setHighlightedRoom(roomName);
  }

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
         
    <div className='container d-flex align-items-center justify-content-center'>

      <div className='map container' style={{ position: 'relative' }}>

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
      <RoomList rooms={rooms} onRoomClick={handleRoomButtonClick} />   
    </div>
  );
}

export default Map;
