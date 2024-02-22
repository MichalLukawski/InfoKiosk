// RoomList.js
import React from 'react';
import '../styles/RoomList.css';

export const rooms = [
  { name: 'Niski Parter', isFloor: true, floor: 0, roomID: 0 },
  { name: 'Sala Konferencyjna 1', num: '7A', floor: 0, roomID: '7A' },
  { name: 'Sala Konferencyjna 2', num: '8', floor: 0, roomID: 2 },
  { name: 'Sale Nauki Indywidualnej', num: '10-11', floor: 0, roomID: 3 },
  { name: 'Sala Szkoleniowa', num: '22', floor: 0, roomID: 4 },
  { name: 'Redakcja Wydawnictw', num: '', floor: 0, roomID: 5 },
  { name: 'Centrum Transferu Technologii', num: '30', floor: 0, roomID: 6 },
  { name: 'I Piętro', isFloor: true, floor: 1, roomID: 10 },
  { name: 'Sekretariat', num: '107A', floor: 1, roomID: 11 },
  { name: 'Ośrodek Informacji Naukowej i Promocji', num: '103', floor: 1, roomID:12 },  
  { name: 'Pomieszczenie dla Studentów "L"', num: '102', floor: 1, roomID: 13 },
  { name: 'Wypożyczalnia Akademicka', num: '117', floor: 1, roomID: 14 },
  { name: 'Pomieszczenie dla Studentów "L"', num: '118', floor: 1, roomID: 15 },
  { name: 'Oddział Gromadzenia Zbiorów', num: '119', floor: 1, roomID: 16 },
  { name: 'II Piętro', isFloor: true, floor: 2, roomID: 20 },
  { name: 'Czytelnia Techiczna', num: '201', floor: 2, roomID: 21 },
  { name: 'Wypożyczalnia Beletrystyki', num: '209', floor: 2, roomID: 22 },
  { name: 'Strefa Wolna Od Bibliotekarza', num: '213', floor: 2, roomID: 23 },
  { name: 'III Piętro', isFloor: true, floor: 3, roomID: 30 },
  { name: 'Zespół Technik Multimedialnych', floor: 3, roomID: 31 },
  { name: 'IV Piętro', isFloor: true, floor: 4, roomID: 40 },
  { name: 'Archiwum Wojskowej Akademii Technicznej', floor: 4, roomID: 41 },
  
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
      <div className='col d-flex flex-column' style={{  overflowY: 'scroll', maxHeight: '93vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {rooms.map((room, index) => (
          <button key={index} onClick={() => handleRoomClick(room.roomID)} className={room.isFloor ? 'floor  border border-black rounded-5' : 'room' } style={{ display: 'flex', justifyContent: 'space-between' }}>
          
          <span>{room.name}</span>
          <div style={{ width: '60px', textAlign: 'left' }}>
            <span>{room.num}</span>
          </div>
        
          </button>
        ))}
      </div>
    );
  }
  
  export default RoomList;
