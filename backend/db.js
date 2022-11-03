//////////////////////////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////////////////////////

/* Include to use .env file */
require('dotenv').config();

const mysql = require('mysql2')

//////////////////////////////////////////////////////////////////////////
// DATABASE_URL extracted from .env file
//////////////////////////////////////////////////////////////////////////
const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    ssl: {
        rejectUnauthorized: false,
    },
})
console.log("DB Connected", connection)
module.exports = connection;