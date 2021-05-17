const { wrap } = require('async-middleware');

//validation
const requestBodyValidation1=require('./commands/verify-request-body')
const requestBodyValidation = require('../register/commands/verify-request-body');

//custom commands
const updateUser=require('./commands/update-user');
const loadPage = require('./commands/load-page');
const loadEditPage=require('./commands/load-edit-page');
const updateStatus=require('./commands/update-status');
const createUser=require('./commands/create-user-inside');

module.exports = (router, middlewares = []) =>  {
    router.get('/newpackage',(req,res)=>{res.render('pages/tables')})
    router.get('/users', middlewares.map(middleware => wrap(middleware)), wrap(loadPage));
    router.get('/Edituser/:id',middlewares.map(middleware => wrap(middleware)), wrap(loadEditPage));
    router.post('/update-profile-info/:id', wrap(requestBodyValidation1), wrap(updateUser));
    router.get('/changeStatus/:id',middlewares.map(middleware => wrap(middleware)),wrap(updateStatus));
    router.get('/createUser',async(req,res)=>{res.render('users/addUser')})
    router.post('/createUser', wrap(requestBodyValidation), wrap(createUser));
    
    return router;
};