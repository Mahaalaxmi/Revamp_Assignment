const express = require("express");
const usersCtrl = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/api/v1/users/register", usersCtrl.register);

module.exports = usersRouter;
