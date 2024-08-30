import React, { useState, useEffect } from 'react';
import { RoomList, rooms, MapWithButtons } from '../';
import axios from 'axios';
import '../styles/Map.css';
import RoomImg from '../inc/RoomImg';

function Map() {
  const [highlightedRoom, setHighlightedRoom] = useState('start');
  const [currentFloor, setCurrentFloor] = useState(1);
  const [roomInfo, setRoomInfo] = useState({});

  const handleRoomButtonClick = (roomID) => {
    const selectedRoom = rooms.find(room => room.roomID === roomID);
    setHighlightedRoom(selectedRoom.roomID);
    if (selectedRoom.floor !== currentFloor) {
      setCurrentFloor(selectedRoom.floor);
    }
    fetchRoomInfo(selectedRoom.roomID);
  };

  const fetchRoomInfo = async (roomID) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/roominfo/${roomID}`);
      setRoomInfo(response.data);
    } catch (error) {
      console.error("Error fetching room info", error);
    }
  };

  function insertNbsp(text) {
    const singleLetterWords = [' a ', ' i ', ' o ', ' u ', ' w ', ' z '];
    singleLetterWords.forEach(word => {
      const regex = new RegExp(word, 'g');
      text = text.replace(regex, ` ${word.trim()} `);
    });
    return text;
  }

  useEffect(() => {
    fetchRoomInfo('start');
  }, []);

  return (
    <div className='d-flex col-12 me-1'>
      <div className='content d-flex col-12 me-1' style={{ marginTop: '25px' }}>
        <div className='rounded-5 col-2 text-center bg-white mt-2 ms-3 border border-3 border-black' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '90.2vh', visibility: roomInfo.description ? 'visible' : 'hidden' }}>
          <div className='me-3 ms-3' style={{ textAlign: 'justify', height: '48.2vh' }}>
            <p dangerouslySetInnerHTML={{ __html: roomInfo.description ? insertNbsp(roomInfo.description) : '' }} style={{ }} />
          </div>
          <RoomImg roomID={roomInfo.roomID} />
        </div>
        <div className='map col-6 mt-1 ms-2'>
          <MapWithButtons highlightedRoom={highlightedRoom} onRoomButtonClick={handleRoomButtonClick} currentFloor={currentFloor} opacityy={0} className='ms-5' />
        </div>
        <div className='col-4 ms-2 d-flex mt-2' style={{ width: '31vw', height: '89vh' }}>
          <RoomList highlightedRoom={highlightedRoom} onRoomClick={handleRoomButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Map;
