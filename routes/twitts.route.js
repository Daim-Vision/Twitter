const { Router } = require("express");
const { twittsController } = require("../controllers/twitts.controller");
const router = Router();

router.post("/twitter", twittsController.addTwitt);
router.get("/twitter", twittsController.getAllTwitts);
router.patch("/twitter", twittsController.addLikes);
router.get("/twitter/:id", twittsController.getTwittById);
router.delete("/twitter/:id", twittsController.deleteTwittById);
router.delete("/twitter", twittsController.deleteAllTwitts);

module.exports = router;
