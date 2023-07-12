const mysql = require('mysql2');

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'green_metric'
})