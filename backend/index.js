const express =  require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Importuj moduł axios
const cors = require('cors');
const { JSDOM } = require('jsdom');
const fetchNewsPageRouter = require('./routes/fetchNews.js');
const fetchFAQPageRouter = require('./routes/fetchFaq.js');
const routesHandler = require('./routes/handler.js');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', fetchNewsPageRouter);
app.use('/', fetchFAQPageRouter);
app.use('/', routesHandler);

const PORT = 4000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});