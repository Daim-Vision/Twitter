const Twitt = require("../models/Twitt.model.js");

module.exports.twittsController = {
  addTwitt: async (req, res) => {
    try {
      const newTwitt = await Twitt.create({
        text: req.body.text,
      });
      res.json(newTwitt);
    } catch (error) {
      res.json(error);
    }
  },

  getAllTwitts: async (req, res) => {
    try {
      const allTwitts = await Twitt;
      res.json(allTwitts);
    } catch (error) {
      res.json(error);
    }
  },

  addLikes: async (req, res) => {
    try {
      await Twitt.findByIdAndUpdate(req.params.id, {
        $addToSet: { likes: req.params.userId },
      });
      res.json("Лайк добавлен");
    } catch (error) {
      res.json(error);
    }
  },

  getTwittById: async (req, res) => {
    try {
      const findedTwitt = await Twitt.findById(req.params.id);
      res.json(findedTwitt);
    } catch (error) {
      res.json(error);
    }
  },

  deleteTwittById: async (req, res) => {
    try {
      await Twitt.findByIdAndDelete(req.params.id);
      res.json("Твит удален");
    } catch (error) {
      res.json(error);
    }
  },

  deleteAllTwitts: async (req, res) => {
    try {
      await Twitt.deleteMany();
      res.json("Все посты удалены");
    } catch (error) {
      res.json(error);
    }
  },
};
