// importData.js
const mongoose = require('mongoose');

// Zdefiniuj schemat i model
const roomSchema = new mongoose.Schema({
  roomID: String,
  description: String
}, { collection: 'rooms' });

const Room = mongoose.model('room', roomSchema);

// Twoje wcześniej przygotowane dane
const rooms =[
  {"description": "To jest kreatywne biuro na parterze. \n Idealne dla \npracy nad projektami. \nWyposażone w duże biurko, krzesła i tablicę kredową.", "roomID": "23"},
 
  // ... reszta danych ...
];

// Połącz się z MongoDB
mongoose.connect('mongodb+srv://mlukawskiinformatyka:XhhEEBcWKmN5DdqW@infokiosk.wdzjr7v.mongodb.net/infokiosk')
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
