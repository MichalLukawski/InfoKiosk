//RoomList.js
import React from 'react';
import '../styles/RoomList.css';

function RoomList(props) {
    const handleRoomClick = (roomName) => {
      props.onRoomClick(roomName);
    }
  
    return (
      <div>
        {props.rooms.map((room, index) => (
          <button key={index} onClick={() => handleRoomClick(room.name)}>
            {room.name}
          </button>
        ))}
      </div>
    );
  }
  
  export default RoomList;