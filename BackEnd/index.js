const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('./dotenv'); 
const morgan = require('morgan');
const db = require('./database/db');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
const whitelist = [
    process.env.FRONTEND_ADDRESS,
];

var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = whitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
}
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ message: 'Avanade Internet Banking' });
});

let UserController = require('./controllers/usercontroller');
app.use('/api', UserController);

let AccountController = require('./controllers/transfercontroller');
app.use('/api', AccountController);

let port = process.env.PORT || 3000;
app.listen(port);
console.log('Aplicação rodando na porta ' + port);