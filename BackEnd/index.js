const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const dotenv = require('./dotenv');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

let apiRoutes = express.Router();

app.get('/', (req, res) => {
    res.json({ message: 'Node with JWT' });
});

let UserController = require('./controllers/usercontroller');
app.use('/', UserController);

let port = process.env.PORT;
app.listen(port);
console.log('Aplicação rodando na porta ' + port);