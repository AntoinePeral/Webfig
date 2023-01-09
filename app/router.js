const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');
const { bookmarksPage } = require('./controllers/bookmarksController');


const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page article
router.get('/article/:id', mainController.articlePage);

// page favoris
router.get('/bookmarks', bookmarksController.bookmarksPage );

//Route ajout figurine
router.get('/bookmarks/add/:id', bookmarksController.addBookmarks);

// Route suppression figurine 
router.get('/bookmarks/delete/:id', bookmarksController.deleteFigurine);


// on exporte le router 
module.exports = router;