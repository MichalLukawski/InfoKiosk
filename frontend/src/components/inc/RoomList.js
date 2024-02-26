// RoomList.js
import React from 'react';
import '../styles/RoomList.css';

export const rooms = [
  { name: 'Niski Parter', isFloor: true, floor: 0, roomID: 0 },
  { name: 'Sala Konferencyjna 1', floor: 0, roomID: '7A' },
  { name: 'Sala Konferencyjna 2', floor: 0, roomID: '8A' },
  { name: 'Sale Nauki Indywidualnej', floor: 0, roomID: '10-11' },
  { name: 'Sala Szkoleniowa', floor: 0, roomID: '22' },
  { name: 'Redakcja Wydawnictw', floor: 0, roomID: '28' },
  { name: 'Centrum Transferu Technologii', floor: 0, roomID: '30' },
  { name: 'I Piętro', isFloor: true, floor: 1, roomID: 1 },
  { name: 'Sekretariat',  floor: 1, roomID: '107A' },
  { name: 'Ośrodek Informacji Naukowej i Promocji', floor: 1, roomID: '103' },  
  { name: 'Pomieszczenie dla Studentów "L"', floor: 1, roomID: '102' },
  { name: 'Wypożyczalnia Akademicka', floor: 1, roomID: '117' },
  { name: 'Pomieszczenie dla Studentów "L"', floor: 1, roomID: '118' },
  { name: 'Oddział Gromadzenia Zbiorów', floor: 1, roomID: '119' },
  { name: 'II Piętro', isFloor: true, floor: 2, roomID: 2 },
  { name: 'Czytelnia Techiczna', floor: 2, roomID: '201'},
  { name: 'Wypożyczalnia Beletrystyki', floor: 2, roomID: '209' },
  { name: 'Strefa Wolna Od Bibliotekarza', floor: 2, roomID: '213' },
  { name: 'III Piętro', isFloor: true, floor: 3, roomID: 3 },
  { name: 'Zespół Technik Multimedialnych', floor: 3, roomID: 31 },
  { name: 'IV Piętro', isFloor: true, floor: 4, roomID: 4 },
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
            {!room.isFloor&&(<span>{room.roomID}</span>)}
          </div>
        
          </button>
        ))}
      </div>
    );
  }
  
  export default RoomList;
