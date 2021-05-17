const{getAllUsers}=require('../service');
const { FETCH_INFO_ERROR_MESSAGE } = require('../constants');


async function loadPage(req, res) {
  let userInfo;
  const { user } = req;
  try {
    userInfo= await getAllUsers();
  } catch (getUserError) {
    console.log(getUserError);
    req.session.messages = { databaseError: FETCH_INFO_ERROR_MESSAGE };
  }
  var locals={
    data:'userInfo',
    user:userInfo
  }
  res.render('users/users',locals);
}

module.exports = loadPage;
