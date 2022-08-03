const userAuth = (req, res, next) => {
    // If not logged in, redirect to make them login
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // Otherwise let them continue
    next();
  }
};

module.exports = userAuth;
