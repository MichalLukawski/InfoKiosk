// importData.js
const mongoose = require('mongoose');

// Zdefiniuj schemat i model
const roomSchema = new mongoose.Schema({
  roomID: String,
  description: String,
  img: String
}, { collection: 'rooms' });

const Room = mongoose.model('room', roomSchema);

// Twoje wcześniej przygotowane dane
const rooms =[
  {
    "_id": "65cdfac47926eaa55cb1be69",
    "roomID": "13",
    "description": "To jest komfortowe biuro na parterze. Idealne dla długotrwałej pracy. Wyposażone w ergonomiczne biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room13.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be67",
    "roomID": "11",
    "description": "To jest kreatywne biuro na drugim piętrze. Idealne dla pracy nad projektami. Wyposażone w duże biurko, krzesła i tablicę kredową.",
    "__v": 0,
    "img": "../images/roomImgs/Room11.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be5d",
    "roomID": "7A",
    "description": "To jest kreatywne biuro na parterze.<br/>Idealne dla pracy nad projektami. Wyposażone w duże biurko, krzesła i tablicę kredową.",
    "__v": 0,
    "img": "../images/roomImgs/Room1.jpg",
    "top": "15px"
  },
  {
    "_id": "65cdfac47926eaa55cb1be6b",
    "roomID": "15",
    "description": "To jest ciche biuro na drugim piętrze. Idealne dla pracy indywidualnej. Wyposażone w biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room15.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be60",
    "roomID": "4",
    "description": "To jest przestronne biuro na trzecim piętrze. Idealne dla dużych spotkań i prezentacji. Wyposażone w duże biurko, krzesła i projektor.",
    "__v": 0,
    "img": "../images/roomImgs/Room4.jpg",
    "top": "740px"
  },
  {
    "_id": "65cdfac47926eaa55cb1be5f",
    "roomID": "3",
    "description": "To jest małe biuro na drugim piętrze. Idealne dla cichej pracy lub małych spotkań. Wyposażone w biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room3.jpg",
    "top": "507px"
  },
  {
    "_id": "65cdfac47926eaa55cb1be62",
    "roomID": "6",
    "description": "To jest jasne biuro na pierwszym piętrze. Idealne dla kreatywnej pracy. Wyposażone w duże biurko, krzesło i tablicę kredową.",
    "__v": 0,
    "img": "../images/roomImgs/Room6.jpg",
    "top": "15px"
  },
  {
    "_id": "65cdfac47926eaa55cb1be6c",
    "roomID": "16",
    "description": "To jest jasne biuro na trzecim piętrze. Idealne dla kreatywnej pracy. Wyposażone w duże biurko, krzesło i tablicę kredową.",
    "__v": 0,
    "img": "../images/roomImgs/Room16.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be65",
    "roomID": "9",
    "description": "To jest eleganckie biuro na parterze. Idealne dla formalnych spotkań. Wyposażone w duże biurko, krzesła i telewizor.",
    "__v": 0,
    "img": "../images/roomImgs/Room9.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be66",
    "roomID": "10",
    "description": "To jest minimalistyczne biuro na pierwszym piętrze. Idealne dla skupionej pracy. Wyposażone w biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room10.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be61",
    "roomID": "5",
    "description": "To jest ciche biuro na parterze. Idealne dla skupionej pracy. Wyposażone w komfortowe biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room5.jpg",
    "top": "15px"
  },
  {
    "_id": "65cdfac47926eaa55cb1be63",
    "roomID": "7",
    "description": "To jest przytulne biuro na drugim piętrze. Idealne dla indywidualnej pracy. Wyposażone w małe biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room7.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be6d",
    "roomID": "17",
    "description": "To jest przytulne biuro na parterze. Idealne dla cichej pracy. Wyposażone w małe biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room17.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be70",
    "roomID": "20",
    "description": "To jest minimalistyczne biuro na trzecim piętrze. Idealne dla skupionej pracy. Wyposażone w biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room20.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be6a",
    "roomID": "14",
    "description": "To jest przestronne biuro na pierwszym piętrze. Idealne dla dużych spotkań. Wyposażone w okrągły stół, krzesła i telewizor.",
    "__v": 0,
    "img": "../images/roomImgs/Room14.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be6f",
    "roomID": "19",
    "description": "To jest eleganckie biuro na drugim piętrze. Idealne dla formalnych spotkań. Wyposażone w duże biurko, krzesła i telewizor.",
    "__v": 0,
    "img": "../images/roomImgs/Room19.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be68",
    "roomID": "12",
    "description": "To jest funkcjonalne biuro na trzecim piętrze. Idealne dla różnych zadań. Wyposażone w regulowane biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room12.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be5e",
    "roomID": "2",
    "description": "To jest funkcjonalne<br/><br/>biuro na pierwszym piętrze. Idealne dla różnych zadań. Wyposażone w regulowane biurko, krzesło i lampkę biurkową.",
    "__v": 0,
    "img": "../images/roomImgs/Room2.jpg",
    "top": "223px"
  },
  {
    "_id": "65cdfac47926eaa55cb1be64",
    "roomID": "8",
    "description": "To jest nowoczesne biuro na trzecim piętrze. Idealne dla pracy zespołowej. Wyposażone w duże biurko, krzesła i tablicę magnetyczną.",
    "__v": 0,
    "img": "../images/roomImgs/Room8.jpg"
  },
  {
    "_id": "65cdfac47926eaa55cb1be6e",
    "roomID": "18",
    "description": "To jest nowoczesne biuro na pierwszym piętrze. Idealne dla pracy zespołowej. Wyposażone w duże biurko, krzesła i tablicę magnetyczną.",
    "__v": 0,
    "img": "../images/roomImgs/Room18.jpg"
  },
  {
    "_id": "65ce113f4426832710965e18",
    "roomID": "23",
    "description": "To jest kreatywne biuro na parterze. \n Idealne dla \npracy nad projektami. \nWyposażone w duże biurko, krzesła i tablicę kredową.",
    "__v": 0,
    "img": "../images/roomImgs/Room23.jpg"
  },
  {
    "_id": "65d7116ad30fd2fc2c971686",
    "roomID": "0",
    "description": "To jest kreatywne biuro na parterze.<br/>Idealne dla pracy nad projektami. Wyposażone w duże biurko, krzesła i tablicę kredową.",
    "__v": 0,
    "img": "../images/roomImgs/Room1.jpg",
    "top": ""
  }

  // ... reszta danych ...
];

// Połącz się z MongoDB
mongoose.connect('mongodb://localhost:27017/infokiosk')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Przejdź przez każdy pokój w tablicy
async function importRooms() {
  for (const room of rooms) {
    // Sprawdź, czy pokój już istnieje w bazie danych
    const existingRoom = await Room.findOne({ roomID: room.roomID });

    // Jeśli pokój nie istnieje, dodaj go do bazy danych
    if (!existingRoom) {
      const newRoom = new Room(room);
      await newRoom.save();
    }
  }

  console.log('Dokumenty zostały pomyślnie dodane do bazy danych.');
  mongoose.disconnect(); // Zamknij połączenie po zakończeniu operacji
}

importRooms().catch(err => {
  console.error(err);
  mongoose.disconnect(); // Zamknij połączenie nawet w przypadku błędu
});
