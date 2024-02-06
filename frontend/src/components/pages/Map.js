// Map.js
import React, { useState } from 'react';
import RoomList, { rooms } from '../inc/RoomList';
import '../styles/Map.css';
import MapWithButtons from '../inc/MapWithButtons';

function Map() {
 
  const [highlightedRoom, setHighlightedRoom] = useState('');
  const [currentFloor, setCurrentFloor] = useState(1);

  const handleRoomButtonClick = (roomName) => {
    setHighlightedRoom(roomName);
    const selectedRoom = rooms.find(room => room.name === roomName);
    if (selectedRoom.floor !== currentFloor) {
      setCurrentFloor(selectedRoom.floor);
    }
  }

  return (
    <div className='d-flex justify-content-around text-center'>
      <div className='col-2'>
        <p>Biblioteka, to miejsce, które emanuje ciszą i spokojem. Przy wejściu, zapach starych książek miesza się z nutą świeżego papieru nowych wydań.</p>
      </div>
      <div className='map col' style={{ position: 'relative' }}>
        <MapWithButtons highlightedRoom={highlightedRoom} onRoomButtonClick={handleRoomButtonClick} currentFloor={currentFloor}/>
      </div>
      <div>
        <RoomList onRoomClick={handleRoomButtonClick} />   
      </div>
    </div>
  );
}

export default Map;
