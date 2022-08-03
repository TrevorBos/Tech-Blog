const { Post } = require("../models");

const userPostData = [
  {
    postTitle: "Video Game News",
    postContent: "This is video game news right here.",
    userId: 1,
  },
  {
    postTitle: "Launch of Season!",
    postContent: "Coming this fall, 'Season' video game coming soon!",
    userId: 2,
  },
  {
    postTitle: "The music of God of War!",
    postContent: "What an amazing score.",
    userId: 3,
  },
];

const seedPost = () => Post.bulkCreate(userPostData);

module.exports = seedPost;
