const express =  require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Importuj moduł axios
const cors = require('cors');
const { JSDOM } = require('jsdom');
const fetchPageRouter = require('./routes/fetch.js');
const routesHandler = require('./routes/handler.js');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', fetchPageRouter);
app.use('/', routesHandler);

const PORT = 4000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});