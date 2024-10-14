// importData.js
const mongoose = require('mongoose');
const fs = require('fs');

// Zdefiniuj schemat i model
const roomSchema = new mongoose.Schema({
  roomID: String,
  description: String,
  img: String
}, { collection: 'rooms' });

const Room = mongoose.model('room', roomSchema);

// Wczytaj dane z pliku JSON
const rooms = require('./rooms.json');

// Połącz się z MongoDB
mongoose.connect('mongodb://localhost:27017/infokiosk')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Przejdź przez każdy pokój w tablicy
async function importRooms() {
  for (const room of rooms) {
    // Usuń pole _id z danych pokoju
    const { _id, ...roomData } = room;
    // Aktualizuj pokój lub dodaj go, jeśli nie istnieje
    await Room.updateOne({ roomID: room.roomID }, roomData, { upsert: true });
  }

  console.log('Dokumenty zostały pomyślnie dodane do bazy danych.');
  mongoose.disconnect(); // Zamknij połączenie po zakończeniu operacji
}

importRooms().catch(err => {
  console.error(err);
  mongoose.disconnect(); // Zamknij połączenie nawet w przypadku błędu
});
