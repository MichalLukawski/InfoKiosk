// RoomList.js
import React from 'react';
import '../styles/RoomList.css';

export const rooms = [
  { name: 'Piętro I', isFloor: true, floor: 1, roomID: 5},
  { name: 'Pomieszczenie 1', floor: 1, roomID: 1 },
  { name: 'Pomieszczenie 2', floor: 1, roomID: 2 },
  { name: 'Piętro 0', isFloor: true, floor: 0, roomID: 10},
  { name: 'Pomieszczenie 3', floor: 0, roomID: 3},
  { name: 'Pomieszczenie 4', floor:0, roomID: 4 },
  { name: 'Pomieszczenie 6' },
  { name: 'Pomieszczenie 7' },
  { name: 'Pomieszczenie 8' },
  { name: 'Pomieszczenie 9' },
  { name: 'Pomieszczenie 10' },
  { name: 'Pomieszczenie 111111111111111111111111 111111111111111111111111111 1111111111111 11111111111111 111111111111111111111111111111111111' },
  { name: 'Pomieszczenie 11' },
  { name: 'Pomieszczenie 12' },
  { name: 'Pomieszczenie 13' },
  { name: 'Pomieszczenie 14' },
  { name: 'Pomieszczenie 15' },
  { name: 'Pomieszczenie 16' },
  { name: 'Pomieszczenie 17' },
  { name: 'Pomieszczenie 18' },
  { name: 'Pomieszczenie 19' },
  { name: 'Pomieszczenie 20' },
  { name: 'Pomieszczenie 21' },
  { name: 'Pomieszczenie 22' },
  { name: 'Pomieszczenie 23' },
  { name: 'Pomieszczenie 24' },
  { name: 'Pomieszczenie 25' },
  { name: 'Pomieszczenie 26' },
  { name: 'Pomieszczenie 27' },
  { name: 'Pomieszczenie 28' },
  { name: 'Pomieszczenie 29' },
  { name: 'Pomieszczenie 30' },
  // Dodaj więcej pomieszczeń tutaj
];

function RoomList(props) {
    const handleRoomClick = (roomName) => {
      props.onRoomClick(roomName);
    }

    /*const getBackgroundColor = (index) => {
      const baseColor = 240; // podstawowy kolor (szary)
      const colorVariation = index * 15; // zmiana koloru dla każdego przycisku
      return `hsl(0, 0%, ${baseColor - colorVariation}%)`; // generowanie koloru tła
    }*/
  
    return (
      <div className='col d-flex flex-column' style={{ overflowY: 'auto',  maxHeight: '93vh' }}>
        {rooms.map((room, index) => (
          <button key={index} onClick={() => handleRoomClick(room.roomID)} className={room.isFloor ? 'floor' : 'room'}>
            {room.name}
          </button>
        ))}
      </div>
    );
  }
  
  export default RoomList;
