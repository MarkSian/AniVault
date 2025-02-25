"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'localhost',
    port: 5432,
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});
client.connect()
    .then(() => {
    console.log('Database connection successful');
    client.end();
})
    .catch(err => {
    console.error('Database connection failed', err);
    client.end();
});
