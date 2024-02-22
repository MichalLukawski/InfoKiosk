// Map.js
import React, { useState, useEffect } from 'react';
import { RoomList, rooms, MapWithButtons} from '../'
import axios from 'axios';
import '../styles/Map.css';
import RoomImg from '../inc/RoomImg'



function Map() {
 
  const [highlightedRoom, setHighlightedRoom] = useState('');
  const [currentFloor, setCurrentFloor] = useState(1);
  const [roomInfo, setRoomInfo] = useState({}); // Zmień nazwę zmiennej stanu na roomInfo i ustaw jej początkową wartość na pusty obiekt

  const handleRoomButtonClick = (roomID) => { 
    const selectedRoom = rooms.find(room => room.roomID === roomID); 
    setHighlightedRoom(selectedRoom.roomID); 
    if (selectedRoom.floor !== currentFloor) {
      setCurrentFloor(selectedRoom.floor);
    }
    fetchRoomInfo(selectedRoom.roomID); // Zmień nazwę funkcji na fetchRoomInfo
  }

  const fetchRoomInfo = async (roomID) => { // Zmień nazwę funkcji na fetchRoomInfo
    try {
      const response = await axios.get(`http://localhost:4000/api/roominfo/${roomID}`);
      setRoomInfo(response.data); // Zapisz cały dokument pokoju do stanu
    } catch (error) {
      console.error("Error fetching room info", error); // Zmień wiadomość błędu na "Error fetching room info"
    }
  }

  useEffect(() => {
        fetchRoomInfo('10'); // Zmień nazwę funkcji na fetchRoomInfo
  }, []);

 
  return (
    <div className='d-flex col-12 me-1' style={{height: '100vh'}}>
      <div className='rounded-5 col-2 text-center bg-white mt-2 ms-3 border border-3 border-black'  style={{ height: '89vh'}}>
        <p dangerouslySetInnerHTML={{ __html: roomInfo.description }}/> {/* 2. dangerouslySetInnerHTML*/}
        <RoomImg roomID={roomInfo.roomID} />
      </div>
      <div className='map col-6 mt-1 ms-2' >
        <MapWithButtons highlightedRoom={highlightedRoom} onRoomButtonClick={handleRoomButtonClick} currentFloor={currentFloor} className='ms-5'/>
      </div>
      <div className='col-4 ms-2 d-flex mt-2 ' style={{width : '31vw', height: '89vh'}}>
        <RoomList onRoomClick={handleRoomButtonClick} />   
      </div>
    </div>
  );
}

export default Map;
