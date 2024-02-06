// RoomButton.js
import React from 'react';

function RoomButton({ room, highlightedRoom, handleRoomButtonClick }) {
  return (
    <button
      className={highlightedRoom === room.name ? 'highlighted' : ''}
      style={{position: 'absolute', top: room.top, left: room.left, width: room.width, height: room.height}}
      onClick={() => handleRoomButtonClick(room.name)}
    >
      {room.name}
    </button>
  );
}

export default RoomButton;
