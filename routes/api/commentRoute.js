// variables
const router = require('express').Router();
const { Comment } = require('../../models/');
const userAuth = requrie('../../utils/authentication');

router.get('/', userAuth, async (req, res) => {
    try{ 
     const commentData = await Comment.findAll({
       include: [User],
     });
   // serialize the data
     const comments = commentData.map((comment) => comment.get({ plain: true }));
   
     console.log(comments);
     
     res.render('singlePost', {comments, loggedIn: req.session.loggedIn});
   } catch(err) {
       res.status(500).json(err);
   }
   });
   
   router.post('/', userAuth, async (req, res) => {
     const body = req.body;
   
     try {
       const newComment = await Comment.create({
         ...body,
         userId: req.session.userId,
       });
       res.json(newComment);
     } catch (err) {
       res.status(500).json(err);
     }
   });
   
   module.exports = router;