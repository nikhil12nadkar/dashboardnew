const{getSpecificUser}=require('../service');
const { FETCH_INFO_ERROR_MESSAGE } = require('../constants');

async function loadEditPage(req,res){
    const result=await getSpecificUser(req.params.id);
    var locals ={
      user:result
    };
    res.render('users/editUser',locals)
}

module.exports = loadEditPage;