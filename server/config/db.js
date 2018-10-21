/**
* @module Database_Connection
* @desc Set the connection to the database
*/
let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'localmysql',
  database: 'reactor'
});

connection.connect();
console.log('Connexion to the BDD :', connection.config.host);

module.exports = connection;
