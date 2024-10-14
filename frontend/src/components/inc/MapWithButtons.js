//MapWithButton.js
import React, { useState, useEffect } from 'react';
import * as Buttons from '../inc/buttons/roomButtons/';
import { MapBackground } from '../../components';
import { RoomButton } from '../';

function MapWithButtons({ highlightedRoom, onRoomButtonClick, currentFloor }) {
  const [mainImage, setMainImage] = useState(`BG1.png`);
  const [imageLoaded, setImageLoaded] = useState(false);

  const rooms = Object.values(Buttons);

  useEffect(() => {
    setMainImage(`BG${currentFloor}.png`);
  }, [currentFloor]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleRoomButtonClick = (roomID) => {
    onRoomButtonClick(roomID);
    const selectedRoom = rooms.find(room => room.roomID === roomID);
    if (selectedRoom.floor !== currentFloor) {
      setMainImage(`BG${selectedRoom.floor}.png`);
    }
  };

  return (
    <div className='map-container'>
      <div className='map-background'>
        <img
          src={MapBackground}
          useMap="#workmap"
          alt="Plan"
          onLoad={handleImageLoad}
          className={imageLoaded ? "map-image loaded" : "map-image"}
        />
      </div>
      <div className='map-floor'>
        <img
          src={require(`../images/${mainImage}`)}
          useMap="#workmap"
          alt="Plan"
          onLoad={handleImageLoad}
          className={imageLoaded ? "map-image loaded" : "map-image"}
        />
      </div>
      <div className='map-buttons'>
      {rooms.filter(room => room.floor === currentFloor).map(room => (
          <RoomButton
            room={room}
            highlightedRoom={highlightedRoom}
            handleRoomButtonClick={() => handleRoomButtonClick(room.roomID)} // Zmienione tutaj
          />
        ))}
      </div>
    </div>
  );
}

export default MapWithButtons;
