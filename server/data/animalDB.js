const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'animalDB',
    password: 'pass',
});

connection.connect((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Connected..!');
    }
});


module.exports = connection;
