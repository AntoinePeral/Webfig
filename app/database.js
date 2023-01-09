// 1. require le module
const pg = require('pg');

// 2. Créer un client
const client = new pg.Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
});

// 3. Connecter le client
client.connect();

// 4. Exporter le client connecté
module.exports = client;
