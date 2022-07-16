const showLoginPage = (req, res) => {
  res.redirect('/login.html');
};

const loginUser = (req, res) => {
  const { username } = req.body;
  if (!username) {
    res.json({ registrationStatus: false, message: 'Provide valid username.' });
    return;
  }
  req.session.username = username;
  req.game.addPlayer(req.session);
  res.json({
    registrationStatus: true, message: 'Registration successful.'
  });
};

const auth = (req, res, next) => {
  if (req.session.isPopulated) {
    next();
    return;
  }

  res.redirect('/login');
};

module.exports = { showLoginPage, loginUser, auth };
