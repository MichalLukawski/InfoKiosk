// MapWithButtons.js
import React, { useState, useEffect } from 'react';
import RoomButton from './buttons/RoomButton';
import Room1Button from './buttons/Room1Button';
import Room2Button from './buttons/Room2Button';
import Room3Button from './buttons/Room3Button';

function MapWithButtons({ highlightedRoom, onRoomButtonClick, currentFloor }) {
    const [mainImage, setMainImage] = useState(`BG1.png`);
    const [imageLoaded, setImageLoaded] = useState(false);
  
    const rooms = [Room1Button, Room2Button, Room3Button];

    useEffect(() => {
      setMainImage(`BG${currentFloor}.png`);
    }, [currentFloor]);
  
    const handleImageLoad = () => {
      setImageLoaded(true);
    }
  
    const handleImageClick = (event) => {
      var x = event.clientX;
      var y = event.clientY;
      console.log("Left coordinates: " + x + ", Top coordinates: " + y);
    }
  
    const handleRoomButtonClick = (roomName) => {
      onRoomButtonClick(roomName);
      const selectedRoom = rooms.find(room => room.name === roomName);
      if (selectedRoom.floor !== currentFloor) {
        setMainImage(`BG${selectedRoom.floor}.png`);
      }
    }
  
    return (
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
        {rooms.filter(room => room.floor === currentFloor).map(room => (
          <RoomButton
            room={room}
            highlightedRoom={highlightedRoom}
            handleRoomButtonClick={handleRoomButtonClick}
          />
        ))}
      </div>
    );
  }
  
  export default MapWithButtons;
