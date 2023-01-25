const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();

router.post("/twitter/users", usersController.addUser);
router.get("/twitter/users", usersController.getAllUsers);
router.delete("/twitter/users/:id", usersController.deleteUser);
router.delete("/twitter/users", usersController.deleteAllUsers);
router.get("/twitter/users/:id", usersController.getUserById);
router.patch("/twitter/users/:id", usersController.addSaves);

module.exports = router;
