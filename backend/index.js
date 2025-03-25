const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const fetchNewsPageRouter = require('./routes/fetchNews.js');
const fetchFAQPageRouter = require('./routes/fetchFaq.js');
const routesHandler = require('./routes/handler.js');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// API
app.use('/', fetchNewsPageRouter);
app.use('/', fetchFAQPageRouter);
app.use('/', routesHandler);

// Połączenie z MongoDB
mongoose.connect('mongodb://localhost:27017/infokiosk')
  .then(() => console.log('✅ MongoDB Connected...'))
  .catch(err => {
    console.log('❌ MongoDB Connection Error:', err);
    process.exit(1);
  });


// Definicja schematu bazy danych
const roomSchema = new mongoose.Schema({
  roomID: String,
  description: String,
}, { collection: 'rooms' });

const Room = mongoose.model('Room', roomSchema);

// Endpoint API do pobierania informacji o pokoju
app.get('/api/roominfo/:roomID', async (req, res) => {
  try {
    const room = await Room.findOne({ roomID: req.params.roomID });
    if (room) {
      res.json(room);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    console.error('❌ API Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// 📌 OBSŁUGA STATYCZNYCH PLIKÓW REACTA (FRONTEND)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 📌 PRZEKIEROWANIE WSZYSTKICH NIEZNANYCH TRAS NA REACTA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Uruchomienie serwera
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Serwer działa na porcie ${PORT}`);
});
