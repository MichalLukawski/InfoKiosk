// index.js 

const express =  require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetchNewsPageRouter = require('./routes/fetchNews.js');
const fetchFAQPageRouter = require('./routes/fetchFaq.js');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose'); // Dodaj mongoose

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', fetchNewsPageRouter);
app.use('/', fetchFAQPageRouter);
app.use('/', routesHandler);

// Dodaj połączenie z MongoDB
mongoose.connect('mongodb://localhost:27017/infokiosk')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Zdefiniuj schemat i model
const roomSchema = new mongoose.Schema({
  roomID: String,
  description: String,
  img: String, // Zmień typ pola img na String
  top: String
}, { collection: 'rooms' });

const Room = mongoose.model('Room', roomSchema);

// Dodaj trasę API
app.get('/api/roominfo/:roomID', async (req, res) => {
  try {
    const room = await Room.findOne({ roomID: req.params.roomID });
    if (room) {
      res.json(room); // Zwróć cały dokument pokoju, a nie tylko opis
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
