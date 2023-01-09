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
  articlePage: async (request, response, next) => {
    const targetId = parseInt(request.params.id);   
    try{
      const figurine = await dataMapper.getOneFigurine(targetId)

      if (!figurine){
        next();
      }  else {
        response.render('article', {figurine});
      }
    } catch (error) {
      response.status(500).send('Erreur lors de la récupération de données');
    }     

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