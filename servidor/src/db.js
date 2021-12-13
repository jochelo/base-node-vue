const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection( (err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOLL_CONNECTION_LOST') {
            console.error('La conección  se a perdido');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('existen demasiadas conecciones');
        }
        if (err.code === 'ENCONNREFUSED') {
            console.error('Coneccion rechazada');
        }
    }
    if (connection) {
        connection.release();
    }

    console.log('Conectado a la base de datos');
});


pool.query = promisify(pool.query);

module.exports = pool;