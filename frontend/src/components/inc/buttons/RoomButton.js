// RoomButton.js
import React from 'react';

function RoomButton({ room, highlightedRoom, handleRoomButtonClick }) {
  const baseSize = 960; // Podstawowa szerokość i wysokość mapy


  const buttonStyle = {
    position: 'absolute',
    borderStyle: 'none',
    background: room.background,
    borderRadius: room.borderRadius,
    top: `${(parseInt(room.top, 10) / baseSize) * 100}%`, // Zakładając, że mapa ma wysokość 960px
    left: `${(parseInt(room.left, 10) / baseSize) * 100}%`, // Zakładając, że mapa ma szerokość 960px
    width: `${(parseInt(room.width, 10) / baseSize) * 100}%`, // Zakładając, że mapa ma szerokość 960px
    height: `${(parseInt(room.height, 10) / baseSize) * 100}%`, // Zakładając, że mapa ma wysokość 960px
    clipPath: room.clipPath,
    fontSize: `${(parseInt(room.fontSize, 10) / baseSize) * 100}vw` // Dynamiczny rozmiar czcionki
  };

  return (
    <button
      className={highlightedRoom === room.roomID ? 'highlighted' : 'notHiglighted'}
      style={buttonStyle}
      onClick={() => handleRoomButtonClick(room.roomID)}
    >
      <div style={{ fontSize: 'inherit', fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
        {room.textLines && room.textLines.map((line, index) => (
          <p key={index} style={{ marginBottom: room.marginBottom[index], marginTop: room.marginTop[index], marginLeft: room.marginLeft[index], fontSize: 12 }}>
            {line}
          </p>
        ))}
      </div>
    </button >
  );
}

export default RoomButton;
