// RoomButton.js
import React from 'react';

function RoomButton({ room, highlightedRoom, handleRoomButtonClick }) {
  return (
    <button
      className={highlightedRoom === room.roomID ? 'highlighted' : 'notHiglighted '}
      style={{position: 'absolute', borderStyle: 'none' , background: room.background, borderRadius: room.borderRadius, top: room.top, left: room.left, width: room.width, height: room.height, clipPath: room.clipPath, zIndex:1}}
      onClick={() => handleRoomButtonClick(room.roomID)}
    >
      <div style={{fontSize: '13px', fontFamily: 'Comic Sans MS, Comic Sans, cursive'}}>
        {room.textLines && room.textLines.map((line, index) => (
          <p key={index} style={{marginBottom: room.marginBottom[index], marginTop: room.marginTop[index], marginLeft: room.marginLeft[index]}}>
            {line}
          </p>
        ))}
      </div>
    </button >
  );
}

export default RoomButton;
