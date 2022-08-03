const router = require("express").Router();
const { Post } = require("../../models/");
const userAuth = require("../../utils/authentication");

// CREATE
router.post("/", userAuth, async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });

    res.json(newPost);
    res.redirect('/dashboard');
  } catch (err) {
    console.log("Your post failed to post.", err);
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", userAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", userAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
