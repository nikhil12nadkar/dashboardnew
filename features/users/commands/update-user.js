const{updateUserIN}=require('../service');
const { UPDATE_INFO_SUCCESS_MESSAGE, UPDATE_INFO_ERROR_MESSAGE } = require('../constants');

async function updateUser(req, res) {
  let user = {};
  userId=req.params.id
  const profileSuccessMessage = UPDATE_INFO_SUCCESS_MESSAGE;
  try {
    name=req.body.name;
    email=req.body.username;
    user = await updateUserIN(name,email,userId);
  } catch (error) {
    user = error;
  }

  if (user.email) {
    req.session.messages = { success: profileSuccessMessage };
    req.session.userInfo = { ...user };
    res.redirect('/users');
  }

  const databaseError=UPDATE_INFO_ERROR_MESSAGE
  req.session.messages = { errors: { databaseError } };
  res.redirect('/Edituser/'+userId);
}

module.exports = updateUser;