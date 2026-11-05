const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// Routery i funkcje buforujące.
const fetchNewsRouter = require('./routes/fetchNews.js');
const fetchFaqRouter = require('./routes/fetchFaq.js');
const { fetchNews } = require('./routes/fetchNews.js');
const { fetchFaq } = require('./routes/fetchFaq.js');
const routesHandler = require('./routes/handler.js');
const clickRouter = require('./routes/clicks.js');

const app = express();

// Middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routing.
app.use('/', fetchNewsRouter);
app.use('/', fetchFaqRouter);
app.use('/', routesHandler);
app.use('/', clickRouter);

// Połączenie z MongoDB.
mongoose
  .connect('mongodb://localhost:27017/infokiosk')
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  });

// Schemat i model pomieszczeń.
const roomSchema = new mongoose.Schema(
  {
    roomID: String,
    description: String,
  },
  {
    collection: 'rooms',
  }
);

const Room = mongoose.model('Room', roomSchema);

// Informacje o pomieszczeniu.
app.get('/api/roominfo/:roomID', async (req, res) => {
  try {
    const room = await Room.findOne({
      roomID: req.params.roomID,
    });

    if (room) {
      res.json(room);
    } else {
      res.status(404).json({
        message: 'Room not found',
      });
    }
  } catch (error) {
    console.error('API Error:', error);

    res.status(500).json({
      message: 'Server error',
    });
  }
});

// Pliki produkcyjnego buildu frontendu.
app.use(
  express.static(path.join(__dirname, '../frontend/build'))
);

// Obsługa tras aplikacji React.
app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../frontend/build', 'index.html')
  );
});

// Buforowanie treści i uruchomienie serwera.
const runContentCaching = async () => {
  try {
    console.log('Buforowanie treści informacyjnych...');

    await fetchFaq();
    await fetchNews();

    console.log('Buforowanie zakończone.');

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Serwer działa na porcie ${PORT}`);
    });

    // Odświeżanie treści co 4 godziny.
    setInterval(async () => {
      console.log('Odświeżanie treści (co 4h)...');

      await fetchFaq();
      await fetchNews();

      console.log('Odświeżanie zakończone.');
    }, 1000 * 60 * 60 * 4);
  } catch (err) {
    console.error('Błąd buforowania treści (startowy):', err);
    process.exit(1);
  }
};

// Serwer uruchamia się po początkowym buforowaniu treści.
runContentCaching();