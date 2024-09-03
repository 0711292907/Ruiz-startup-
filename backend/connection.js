const {createPool} = require('mysql2')

const pool = createPool({
    host: process.env.HOST,
    port: process.env.AVN_PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: { ca: process.env.SSL},
    connectionLimit: 30,
    waitForConnections: true
})

module.exports = pool;