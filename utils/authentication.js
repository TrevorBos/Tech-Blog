const userAuth = (req, res, next) => {
    // If not logged in, redirect to make them login
  if (!req.session.loggedIn) {
  } else {
    // Otherwise let them continue
    next();
  }
};

module.exports = userAuth;
