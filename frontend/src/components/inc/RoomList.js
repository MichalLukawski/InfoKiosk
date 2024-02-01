//RoomList.js
import React from 'react';
import '../styles/RoomList.css';

function RoomList(props) {
    const rooms = [
      { name: 'Piętro I', isFloor: true},
      { name: 'Pomieszczenie 1' },
      { name: 'Pomieszczenie 2' },
      { name: 'Pomieszczenie 3' },
      { name: 'Pomieszczenie 4' },
      { name: 'Pomieszczenie 5' },
      { name: 'Pomieszczenie 6' },
      { name: 'Pomieszczenie 7' },
      { name: 'Pomieszczenie 8' },
      { name: 'Pomieszczenie 9' },
      { name: 'Pomieszczenie 10' },
      { name: 'Pomieszczenie 11' },

      // Dodaj więcej pomieszczeń tutaj
    ];

    const handleRoomClick = (roomName) => {
      props.onRoomClick(roomName);
    }

    const getBackgroundColor = (index) => {
      const baseColor = 240; // podstawowy kolor (szary)
      const colorVariation = index * 15; // zmiana koloru dla każdego przycisku
      return `hsl(0, 0%, ${baseColor - colorVariation}%)`; // generowanie koloru tła
    }
  
    return (
      <div className='col d-flex flex-column align-items-start'>
        {rooms.map((room, index) => (
          <button key={index} onClick={() => handleRoomClick(room.name)}className={room.isFloor ? 'floor' : ''}
          style={{ backgroundColor: getBackgroundColor(index) }}>
            {room.name}
            
          </button>
        ))}
      </div>
    );
  }
  
  export default RoomList;