const express = require('express');
const gabbleController = require('./controllers/gabbleController');

module.exports = function(app){
  app.get("/gabble/user/signup/", gabbleController.signUp);
  app.post("/gabble/user/signup/", gabbleController.signValidation);
  app.get("/gabble/user/login/", gabbleController.loginPage);
  app.post("/gabble/user/login/", gabbleController.login);
  app.get("/gabble/", gabbleController.home);
  app.post('/gabble/', gabbleController.newGabPost);
  app.post('/gabble/like/:id', gabbleController.createLike);
  app.get('/gabble/like/:id', gabbleController.showLikes);
  app.post('/gabble/signout', gabbleController.signOut);
  // app.get('/gabble/:id', gabbleController.oneGab)
  app.delete('/gabble/delete/:id', gabbleController.delete)

  // app.get('/gabble/likes/', gabbleController.likes);


};
