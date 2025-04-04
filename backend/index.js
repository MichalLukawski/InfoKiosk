const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// Import routerów i funkcji buforujących
const fetchNewsRouter = require('./routes/fetchNews.js');
const fetchFaqRouter = require('./routes/fetchFaq.js');
const { fetchNews } = require('./routes/fetchNews.js');
const { fetchFaq } = require('./routes/fetchFaq.js');
const routesHandler = require('./routes/handler.js');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routing
app.use('/', fetchNewsRouter);
app.use('/', fetchFaqRouter);
app.use('/', routesHandler);

// Połączenie z MongoDB
mongoose.connect('mongodb://localhost:27017/infokiosk')
  .then(() => console.log(' MongoDB Connected...'))
  .catch(err => {
    console.log(' MongoDB Connection Error:', err);
    process.exit(1);
  });

// Schemat i model MongoDB
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
    console.error(' API Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Obsługa statycznych plików frontendowych (React build)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Przekierowanie wszystkich nieznanych tras na index.html (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Buforowanie treści informacyjnych – start i interwał
const runContentCaching = async () => {
  try {
    console.log(' Buforowanie treści informacyjnych...');
    await fetchFaq();
    await fetchNews();
    console.log(' Buforowanie zakończone.');

    // Start serwera dopiero po buforowaniu (tylko raz)
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(` Serwer działa na porcie ${PORT}`);
    });

    // Interwał co 4 godziny
    setInterval(async () => {
      console.log('Odświeżanie treści (co 4h)...');
      await fetchFaq();
      await fetchNews();
      console.log(' Odświeżanie zakończone.');
    }, 1000 * 60 * 60 * 4); // 4h

  } catch (err) {
    console.error(' Błąd buforowania treści (startowy):', err);
    process.exit(1); // nie uruchamiamy serwera bez danych
  }
};

// Startujemy od buforowania – dopiero potem serwer
runContentCaching();
