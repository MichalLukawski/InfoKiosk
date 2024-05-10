//MapWithButton.js
import React, { useState, useEffect } from 'react';
import * as Buttons from '../inc/buttons/roomButtons/';
import { MapBackground } from '../../components'
import{RoomButton}from '../'


function MapWithButtons({ highlightedRoom, onRoomButtonClick, currentFloor }) {
    const [mainImage, setMainImage] = useState(`BG1.png`);
    const [imageLoaded, setImageLoaded] = useState(false);
  
    const rooms = Object.values(Buttons); // 3. Object.values(Buttons);

    useEffect(() => {
      setMainImage(`BG${currentFloor}.png`);
    }, [currentFloor]);
  
    const handleImageLoad = () => {
      setImageLoaded(true);
    }
  

  
    const handleRoomButtonClick = (roomID) => { // Zmienione tutaj
      onRoomButtonClick(roomID); // Zmienione tutaj
      const selectedRoom = rooms.find(room => room.roomID === roomID); // Zmienione tutaj
      if (selectedRoom.floor !== currentFloor) {
        setMainImage(`BG${selectedRoom.floor}.png`);
      }
    }
  
    return (
      <div className='map col-6' style={{ position: 'relative' }}>
         <img
          src={MapBackground}
          useMap="#workmap"
          alt="Plan"
          onLoad={handleImageLoad}
          width="960vw"
          height="960vh"
          className={imageLoaded ? "map-image loaded" : "map-image"}
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}
        />
       
        <img
          src={require(`../images/${mainImage}`)}
          useMap="#workmap"
          alt="Plan"
          onLoad={handleImageLoad}
          width="960vw"
          height="960vh"
          className={imageLoaded ? "map-image loaded" : "map-image"}
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 3, pointerEvents: 'none' }}
        />
         
        {rooms.filter(room => room.floor === currentFloor).map(room => (
          <RoomButton
            room={room}
            highlightedRoom={highlightedRoom}
            handleRoomButtonClick={() => handleRoomButtonClick(room.roomID)} // Zmienione tutaj
           />
        ))}
      </div>
    );
  }
  
  export default MapWithButtons;
