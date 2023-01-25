const User = require("../models/User.model.js");
const { all } = require("../routes/users.route.js");

module.exports.usersController = {
  addUser: async (req, res) => {
    try {
      const newUser = await User.create({
        name: req.body.name,
      });
      res.json(newUser);
    } catch (error) {
      res.json(error);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const allUsers = await User.find();
      res.json(allUsers);
    } catch (error) {
      res.json(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("Пользователь удален");
    } catch (error) {
      res.json(error);
    }
  },

  deleteAllUsers: async (req, res) => {
    try {
      await User.deleteMany();
      res.json("Все пользователи удалены");
    } catch (error) {
      res.json(error);
    }
  },

  getUserById: async (req, res) => {
    try {
      const findedUser = await User.findById(req.params.id);
      res.json(findedUser);
    } catch (error) {
      res.json(error);
    }
  },

  addSaves: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: { saves: req.params.twittId },
      });
      res.json("Пост добавлен в избранные");
    } catch (error) {
      res.json(error);
    }
  },
};
