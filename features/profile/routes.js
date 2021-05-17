const { wrap } = require('async-middleware');
const requestBodyValidation = require('./commands/verify-request-body');
const updateUserInfo = require('./commands/update-user-info');


const loadPage = require('./commands/load-page');
// const loadEditPage= require('./commands/load-edit-page');

module.exports = (router, middlewares = []) => {
  router.get('/profile', middlewares.map(middleware => wrap(middleware)), wrap(loadPage));
 
  //router.post('/update-user',wrap(requestBodyValidation), wrap(updateUserInfo));
  return router;
};
