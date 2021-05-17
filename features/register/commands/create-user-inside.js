const registerRepo = require('../repository');

async function createLocalUser(req, res) {
  let user = {};
  const registerSuccessMessage = 'You have successfully registered, you can now log in.';
  try {
    user = await registerRepo.createUser(req.body);
  } catch (error) {
    user = error;
  }
  if (user.email) {
    req.session.messages = { success: registerSuccessMessage };
    res.redirect('/profile');
  }
  const { code } = user;
  const databaseError =
    code === '23505' ? 'The email has already been taken.' : 'Something went wrong.';
  req.session.messages = { databaseError };
  res.redirect('/createUser');
}

module.exports = createLocalUser;