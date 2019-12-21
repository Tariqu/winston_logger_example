const router = require("express").Router();
const {
  checkToken
} = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./user.controller");
const {
  addUserValidation
} = require('../../validation/users/user.validation');

router.get("/", checkToken, getUsers);
router.post("/", checkToken, addUserValidation, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;