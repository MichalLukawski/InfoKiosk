// Map.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomList, { rooms } from '../inc/RoomList';
import '../styles/Map.css';
import MapWithButtons from '../inc/MapWithButtons';

function Map() {
 
  const [highlightedRoom, setHighlightedRoom] = useState('');
  const [currentFloor, setCurrentFloor] = useState(1);
  const [roomDescription, setRoomDescription] = useState('');

  const handleRoomButtonClick = (roomID) => { // Zmienione tutaj
    const selectedRoom = rooms.find(room => room.roomID === roomID); // Zmienione tutaj
    setHighlightedRoom(selectedRoom.name); // Zmienione tutaj
    if (selectedRoom.floor !== currentFloor) {
      setCurrentFloor(selectedRoom.floor);
    }
    fetchRoomDescription(selectedRoom.roomID);
  }

  const fetchRoomDescription = async (roomID) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/roominfo/${roomID}`);
      setRoomDescription(response.data);
    } catch (error) {
      console.error("Error fetching room description", error);
    }
  }

  useEffect(() => {
    // Fetch initial room description when component mounts
    fetchRoomDescription('1'); // Dodaj '1' tutaj
  }, []);

  return (
    <div className='d-flex justify-content-around text-center'>
      <div className='col-2'>
        <p>{roomDescription} sss {console.log(roomDescription)}</p>
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