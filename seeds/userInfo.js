const { User } = require("../models");

const userData = [
  {
    username: "Apple",
    password: "Password1234",
  },
  {
    username: "Blueberry",
    password: "Password12345",
  },
  {
    username: "Cheese",
    password: "Password123456",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
