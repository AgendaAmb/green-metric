
const mysql = require('mysql2');
import 'dotenv/config';

const getConnection = () => {
    
    return (mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }));
}
export const connection = getConnection();