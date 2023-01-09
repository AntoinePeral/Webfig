// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');
const session = require('express-session');

// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT || 5000;
const app = express();

app.use(session({
  secret: 'testduchallenge',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

// Set-up des views 
app.set('views', './app/views');
app.set('view engine', 'ejs');

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// routage !
app.use(router);
app.use((req, res) => {
  res.status(404).send('Error: 404 Not Found');
});



// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
