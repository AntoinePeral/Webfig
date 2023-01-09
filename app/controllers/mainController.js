const dataMapper = require ('../dataMapper');

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (request, response) => {
    try{
      const allFigurine = await dataMapper.getAllFigurines();
      response.render('accueil', {allFigurine});
    } catch (error) {
      response.status(500).send('Erreur lors de la récupération de données');
    }
  },

  // méthode pour la page article
  articlePage: (request, response) => {
    response.render('article');
  }

};


module.exports = mainController;



// const dataMapper = require('../services/dataMapper');

// const adminController = {
//     showAddStudentForm: async (req, res) => {
//         // on ne veut autoriser l'accès à cette page qu'à un utilisateur qui s'appelle Atarte. Schema |   Name   | Type  | Owner cès aux données de la session dans req

//         try {  
//             // pour pouvoir dynamiser le <select> sur le formulaire, il faut récupérer toutes les promos
//             const allPromos = await dataMapper.findAllPromos();
//             // passer les promos à la vue
//             // on utilise la syntaxe raccourcie : au lieu de {allPromos: allPromos}, on utilise { allPromos } (= parfaitement équivalent)
//             res.render('addStudent', { allPromos });
//         } catch(error) {
//             // quelque chose s'est mal passé, on affiche un message d'erreur
//             res.status(500).send('Erreur lors de la récupération de données');
//         }
//     },