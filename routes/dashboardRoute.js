const router = require("express").Router();
const { Post, User } = require("../models/");
const userAuth = require("../utils/authentication");

// ALL POSTS DASHBOARD
router.get("/", userAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { userId: req.session.userId },
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("all-posts", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

// AFTER CLICK ON NEW POST BUTTON
router.get("/new", userAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

// WHEN WE CLICK ON THE POST ITSELF
router.get("/edit/:id", userAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
