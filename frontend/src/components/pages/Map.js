// Map.js
import React, { useState, useEffect } from 'react';
import { RoomList, rooms, MapWithButtons} from '../'
import axios from 'axios';
import '../styles/Map.css';

function Map() {
 
  const [highlightedRoom, setHighlightedRoom] = useState('');
  const [currentFloor, setCurrentFloor] = useState(1);
  const [roomDescription, setRoomDescription] = useState('');

  const handleRoomButtonClick = (roomID) => { 
    const selectedRoom = rooms.find(room => room.roomID === roomID); 
    setHighlightedRoom(selectedRoom.name); 
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
        fetchRoomDescription('1'); 
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