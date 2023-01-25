const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");
const router = Router();

router.post("/twitter/comments", commentsController.addComm);
router.delete("/twitter/comments", commentsController.deleteAllComms);
router.get("/twitter/comments/:twittId", commentsController.getCommByTwitt);
router.get("/twitter/comments/:id", commentsController.deleteCommById);
router.patch("/twitter/comments/:id", commentsController.editComment);
router.get("/twitter/comments/:userId", commentsController.getCommsByUser);

module.exports = router;
