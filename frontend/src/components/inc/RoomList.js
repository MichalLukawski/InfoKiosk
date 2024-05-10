// RoomList.js
import '../styles/RoomList.css';
import React, { useState, useEffect } from 'react';

export const rooms = [
  { name: 'Tu jesteś', isStart: true, floor: 1, roomID: 'start'},
  { name: 'Niski Parter', isFloor: true, floor: 0, roomID: 0 },
  { name: 'Sala Konferencyjna 1', floor: 0, roomID: '7' },
  { name: 'Sala Konferencyjna 2', floor: 0, roomID: '8' },
  { name: 'Sale Nauki Indywidualnej', floor: 0, roomID: '10-11' },
  { name: 'Sala Szkoleniowa', floor: 0, roomID: '22' },
  { name: 'Centrum Transferu Technologii', floor: 0, roomID: '30' },
  { name: 'Redakcja Wydawnictw', floor: 0, roomID: '39' },
  { name: 'Toalety', floor: 0, roomID: 'WC0', isVisible: true, isNumHidden: true},
  { name: 'I Piętro', isFloor: true, floor: 1, roomID: 1 },
  { name: 'Pomieszczenie dla Studentów "L"', floor: 1, roomID: '102' },
  { name: 'Ośrodek Informacji Naukowej i Promocji', floor: 1, roomID: '103' },  
  { name: 'Sekretariat',  floor: 1, roomID: '107A' },
  { name: 'Wypożyczalnia Akademicka', floor: 1, roomID: '117' },
  { name: 'Pomieszczenie dla Studentów "L"', floor: 1, roomID: '118' },
  { name: 'Oddział Gromadzenia Zbiorów', floor: 1, roomID: '119', isVisible: false},
  { name: 'Toalety', floor: 1, roomID: 'WC1', isVisible: true, isNumHidden: true},
  { name: 'II Piętro', isFloor: true, floor: 2, roomID: 2 },
  { name: 'Czytelnia Techiczna', floor: 2, roomID: '201' },
  { name: 'Wypożyczalnia Beletrystyki', floor: 2, roomID: '209' },
  { name: 'Strefa Wolna Od Bibliotekarza', floor: 2, roomID: '213' },
  { name: 'Sala Katalogowa', floor: 2, roomID: '218' },
  { name: 'III Piętro', isFloor: true, floor: 3, roomID: 3 },
  { name: 'Zespół Technik Multimedialnych', floor: 3, roomID: 'ZTM', isNumHidden: true },
  { name: 'IV Piętro', isFloor: true, floor: 4, roomID: 4 },
  { name: 'Archiwum Wojskowej Akademii Technicznej', floor: 4, roomID: 'Archiwum', isNumHidden: true },
  // Dodaj więcej pomieszczeń tutaj
];

function getRoomClassName(room, selectedRoom, selectedFloor) {
  if (room.isFloor) {
    return room.floor === selectedFloor ? 'highlightedFloor border border-black rounded-5' : 'floor border border-black rounded-5';
  } else if (room.isStart){
    return room.roomID === selectedRoom ? 'highlightedStart border border-red ' : 'start boreder border-red ';
  }
    else {
    return room.roomID === selectedRoom ? 'highlightedRoom rounded-5' : 'room';
  }
}



function RoomList({ highlightedRoom, ...props}) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);

  useEffect(() => {
    setSelectedRoom(highlightedRoom);
    const highlightedFloor = rooms.find(room => room.roomID === highlightedRoom)?.floor;
    setSelectedFloor(highlightedFloor);
  }, [highlightedRoom]);

  const handleRoomClick = (roomID, floor) => {
    setSelectedRoom(roomID);
    setSelectedFloor(floor);
    props.onRoomClick(roomID);
  }

  return (
    <div className='room-list col d-flex flex-column' style={{  overflowY: 'scroll', maxHeight: '93vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {rooms.filter(room => room.isVisible !== false).map((room, index) => (
        <button 
          key={index} 
          onClick={() => handleRoomClick(room.roomID, room.floor)} 
          className={getRoomClassName(room, selectedRoom, selectedFloor)}>

          <span>{room.name}</span>
         {!room.isStart && <div style={{ width: '3vw', textAlign: 'left' }}>
         {((!room.isFloor && !room.isStart) && !room.isNumHidden) && (<span>{room.roomID}</span>)}
          </div>} 
          {room.isStart && <div style={{ marginTop: '1vh' }}>
         {((!room.isFloor && !room.isStart) && !room.isNumHidden) && (<span>{room.roomID}</span>)}
          </div>} 
         
          
           
        </button>
      ))}
    </div>
  );
}

export default RoomList;