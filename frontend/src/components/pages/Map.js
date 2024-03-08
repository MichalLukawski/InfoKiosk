// Map.js
import React, { useState, useEffect } from 'react';
import { RoomList, rooms, MapWithButtons} from '../'
import axios from 'axios';
import '../styles/Map.css';
import RoomImg from '../inc/RoomImg'



function Map() {
 
  const [highlightedRoom, setHighlightedRoom] = useState('start');
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


  function insertNbsp(text) {
    const singleLetterWords = [' a ', ' i ', ' o ', ' u ', ' w ', ' z '];
    singleLetterWords.forEach(word => {
        const regex = new RegExp(word, 'g'); // 4. RegExp
        text = text.replace(regex, ` ${word.trim()}&nbsp;`);
    });
    return text;
}
  
useEffect(() => {
  fetchRoomInfo('start'); // Zmień nazwę funkcji na fetchRoomInfo
}, []);

 
  return (
    <div className='d-flex col-12 me-1' >
      <div className='rounded-5 col-2 text-center bg-white mt-2 ms-3 border border-3 border-black'>
      <div className='me-3 ms-3'style={{textAlign: 'justify'}}><p dangerouslySetInnerHTML={{ __html: roomInfo.description ? insertNbsp(roomInfo.description) : ''}} style={{ height: '48.2vh'}}/> </div>{/* 2. dangerouslySetInnerHTML*/}
        <RoomImg roomID={roomInfo.roomID} />
      </div>
      <div className='map col-6 mt-1 ms-2'>
        <MapWithButtons highlightedRoom={highlightedRoom} onRoomButtonClick={handleRoomButtonClick} currentFloor={currentFloor} className='ms-5'/>
      </div>
      <div className='col-4 ms-2 d-flex mt-2 ' style={{width : '31vw', height: '89vh'}}>
        <RoomList highlightedRoom={highlightedRoom} onRoomClick={handleRoomButtonClick} />   
      </div>
    </div>
  );
}

export default Map;
