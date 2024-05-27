// RoomImg.js
import React from 'react';
import Room1 from '../images/roomImgs/Room1.jpg';
import Room2 from '../images/roomImgs/Room2.jpg';
import { RoomStart, Room102, Room103, Room107A, Room117, Room118, RoomWC1} from '../images/roomImgs/';

const rooms = {
  '7': Room1,
  '8': Room2,
  'start': RoomStart,
  '102': Room102,
  '103': Room103,
  '107A': Room107A,
  '117': Room117,
  '118': Room118,
  'WC1': RoomWC1,


  // Dodaj więcej pokoi tutaj
};

const RoomImg = ({ roomID }) => {
  const roomImage = rooms[roomID];
  
  return <img className='rounded-5 border border-3 border-white'src={roomImage} style={{width: '100%', borderRadius: '10%'}} alt="Room" />;
};

export default RoomImg;
