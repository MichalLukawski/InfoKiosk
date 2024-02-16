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

 let formattedDescription = roomDescription.replace(/\n/g, '<br/>');

  return (
    <div className='col-11 d-flex' style={{height: '100vh'}}>
      <div className='col-2 text-center bg-white ms-3' >
        <p dangerouslySetInnerHTML={{ __html: formattedDescription }}/> {/* 2. dangerouslySetInnerHTML*/}
      </div>
      <div className='map col-7 border border-primary-subtle ms-3 bg-white' style={{ position: 'relative' }}>
        <MapWithButtons highlightedRoom={highlightedRoom} onRoomButtonClick={handleRoomButtonClick} currentFloor={currentFloor} className='ms-5'/>
      </div>
      <div className='col-4 d-flex border border-primary-subtle' >
        <RoomList onRoomClick={handleRoomButtonClick} />   
      </div>
    </div>
  );
}

export default Map;
