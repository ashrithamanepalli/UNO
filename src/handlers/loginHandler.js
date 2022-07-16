const showLoginPage = (req, res) => {
  res.redirect('/login.html');
};

const loginUser = (req, res) => {
  const { username } = req.body;
  if (!username) {
    res.status(409);
    res.end('Username Required');
    return;
  }
  req.session.username = username;
  res.redirect('/game');
};

const auth = (req, res, next) => {
  if (req.session.isPopulated) {
    next();
    return;
  }

  res.redirect('/login');
};

module.exports = { showLoginPage, loginUser, auth };
