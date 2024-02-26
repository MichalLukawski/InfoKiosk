// RoomImg.js
import React from 'react';
import Room1 from '../images/roomImgs/Room1.jpg';
import Room2 from '../images/roomImgs/Room2.jpg';

const rooms = {
  '7A': Room1,
  '8A': Room2,
  // Dodaj więcej pokoi tutaj
};

const RoomImg = ({ roomID }) => {
  const roomImage = rooms[roomID];
  
  return <img src={roomImage} style={{width: '95%', marginTop: '80%'}} alt="Room" />;
};

export default RoomImg;
