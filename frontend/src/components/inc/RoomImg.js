// RoomImg.js
import React from 'react';

import { RoomStart, Room3, Room7, Room8, Room10_11, Room102, Room103, Room107A, Room117, Room118, RoomWC1, RoomWC0, Room201, Room209, Room213, Room218} from '../images/roomImgs/';

const rooms = {
  
  'start': RoomStart,
  '3': Room3,
  '7': Room7,
  '8': Room8,
  '10_11': Room10_11,
  '102': Room102,
  '103': Room103,
  '107A': Room107A,
  '117': Room117,
  '118': Room118,
  'WC1': RoomWC1,
  'WC0': RoomWC0,
  '201': Room201,
  '209': Room209,
  '213': Room213,
  '218': Room218,

  // Dodaj więcej pokoi tutaj
};

const RoomImg = ({ roomID }) => {
  const roomImage = rooms[roomID];
  
  if (!roomImage) {
    return null; // Jeśli obraz nie istnieje, nie renderuj nic
  }

  return <img className='rounded-5 border border-3 border-white' src={roomImage} style={{width: '100%', borderRadius: '10%', marginTop: '-10px'}} alt="Room" />;
};

export default RoomImg;
