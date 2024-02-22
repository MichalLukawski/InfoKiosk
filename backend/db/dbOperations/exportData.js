// exportRooms.js
const mongoose = require('mongoose');
const fs = require('fs');

// Zdefiniuj schemat i model
const roomSchema = new mongoose.Schema({
  roomID: String,
  description: String
}, { collection: 'rooms' });

const Room = mongoose.model('room', roomSchema);

// Połącz się z MongoDB
mongoose.connect('mongodb://localhost:27017/infokiosk')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Eksportuj pokoje
async function exportRooms() {
  const rooms = await Room.find({});

  fs.writeFileSync('rooms.json', JSON.stringify(rooms, null, 2));

  console.log('Dane zostały pomyślnie wyeksportowane do pliku rooms.json');
  mongoose.disconnect(); // Zamknij połączenie po zakończeniu operacji
}

exportRooms().catch(err => {
  console.error(err);
  mongoose.disconnect(); // Zamknij połączenie nawet w przypadku błędu
});
