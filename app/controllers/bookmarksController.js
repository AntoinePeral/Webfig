const dataMapper = require ('../dataMapper');

const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
    let listbookmarks = request.session.bookmarks;
    // console.log(request.session);
    // console.log(listbookmarks);
    response.render('favoris', {listbookmarks});
    return listbookmarks;
  },
  addBookmarks: async (request, response) =>{
    const targetId = parseInt(request.params.id);  

    let listbookmarks = request.session.bookmarks;

    if (!listbookmarks){
      listbookmarks= [];
    }

    if(listbookmarks.find(figurine => figurine.id === targetId) ){
      return;
    } 

    try {
      const figurine = await dataMapper.getOneFigurine(targetId)
      listbookmarks.push(figurine);
      request.session.bookmarks = listbookmarks;
      response.redirect('/bookmarks');
      
      
    } catch (error){
      response.status(500).send('Erreur lors de la récupération de données');
    }
  },
  deleteFigurine: (request, response) => {
    const targetId = parseInt(request.params.id); 
    const figurineDelete = request.session.bookmarks.filter(figurine => figurine.id !== targetId);
    request.session.bookmarks = figurineDelete;
    response.redirect('/bookmarks')
  }
}


module.exports = bookmarksController;






