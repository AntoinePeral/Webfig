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
      const figurine = await dataMapper.getOneFigurine(targetId);
      const reviews = await dataMapper.getAllReview(targetId);

      if (!figurine){
        next();
      }  else {
        response.render('article', {figurine, reviews});
      }
    } catch (error) {
      response.status(500).send('Erreur lors de la récupération de données');
    }     

  },

};


module.exports = mainController;