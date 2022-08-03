const sequelize = require("../config/connection");
const seedUser = require("./userInfo");
const seedPost = require("./postInfo");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();
