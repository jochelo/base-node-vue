const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {json} = require('express');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));

app.use(json());
app.use(cors());

/**
 * ROUTES
 * */

app.use(require('./routes/api'));

/**
 * PUBLIC
 * */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * EJECUTAR EL SERVIDOR
 * */

app.set('port', 3000);
app.set('host', 'localhost');

app.listen(app.get('port'), app.get('host'), () => {
    console.log('Servidor ejecutandose');
})
