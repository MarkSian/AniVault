import { Client } from 'pg';

const client = new Client({
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