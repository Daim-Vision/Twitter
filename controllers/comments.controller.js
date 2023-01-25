const Comment = require("../models/Comment.model.js");

module.exports.commentsController = {
  addComm: async (req, res) => {
    try {
      const newComm = await Comment.create({
        text: req.body.text,
        user: req.body.user,
        toTwitt: req.body.toTwitt,
      });
      res.json(newComm);
    } catch (error) {
      res.json(error);
    }
  },

  deleteAllComms: async (req, res) => {
    try {
      await Comment.deleteMany();
      res.json("Все комментарии удалены").populate('user toTwitt');
    } catch (error) {
      res.json(error);
    }
  },

  getAllComms: async (req, res) => {
    try {
      const allComms = await Comment.find();
      res.json(allComms);
    } catch (error) {
      res.json(error);
    }
  },

  getCommByTwitt: async (req, res) => {
    try {
      const findedComm = await Comment.find({
        toTwitt: req.params.twittId,
      });
      res.json(findedComm);
    } catch (error) {
      res.json(error);
    }
  },

  deleteCommById: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.json("Комментарий удален");
    } catch (error) {
      res.json(error);
    }
  },

  editComment: async (req, res) => {
    try {
      const changedComm = await Comment.findByIdAndUpdate(req.params.id, {
        text: req.params.text,
      });
    } catch (error) {
      res.json(error);
    }
  },

  getCommsByUser: async (req, res) => {
    try {
      const findedComms = await Comment.find({
        user: req.params.userId,
      });
      res.json(findedComms);
    } catch (error) {
      res.json(error);
    }
  },
};
