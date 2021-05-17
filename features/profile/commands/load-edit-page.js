const {getSpecificUser}=require('../service')
const { FETCH_INFO_ERROR_MESSAGE } = require('../constants');

async function loadEditPage(req, res) {
    let userInfo;
    const { user } = req;
    try {
      userInfo= await getSpecificUser(user.id);
    } catch (getUserError) {
      console.log(getUserError);
      req.session.messages = { databaseError: FETCH_INFO_ERROR_MESSAGE };
    }
    var locals={
      data:'userInfo',
      user:userInfo
    }
    res.render('users/edit',locals);
  }

  module.exports = loadEditPage;