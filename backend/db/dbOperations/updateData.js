// updateRooms.js
const mongoose = require('mongoose');

// Zdefiniuj schemat i model
const roomSchema = new mongoose.Schema({
  roomID: String,
  description: String,
  img: String // Dodaj pole img do schematu
}, { collection: 'rooms' });

const Room = mongoose.model('room', roomSchema);

// Połącz się z MongoDB
mongoose.connect('mongodb://localhost:27017/infokiosk')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Aktualizuj pokoje
async function updateRooms() {
  const rooms = await Room.find({});

  for (const room of rooms) {
    // Przygotuj ścieżkę do pliku dla danego pokoju
    const imgPath = `../images/roomImgs/Room${room.roomID}.jpg`;
    


   
    // Aktualizuj pokój
    await Room.updateOne({ roomID: room.roomID }, { img: imgPath });
  }

  console.log('Pokoje zostały pomyślnie zaktualizowane.');
  mongoose.disconnect(); // Zamknij połączenie po zakończeniu operacji
}

updateRooms().catch(err => {
  console.error(err);
  mongoose.disconnect(); // Zamknij połączenie nawet w przypadku błędu
});
