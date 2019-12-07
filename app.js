require("dotenv").config();
const express = require("express");
const logger = require("./config/logger");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  logger.error(`server up and running on PORT : ${port}`);
});