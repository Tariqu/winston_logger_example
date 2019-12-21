require("dotenv").config();
const express = require("express");
const logger = require("./config/logger");
const app = express();
const userRouter = require("./api/users/user.router");
app.use(express.json());


app.use((req, res, next) => {
  logger.info(req.body);
  let oldSend = res.send;
  res.send = function (data) {
    logger.info(JSON.parse(data));
    oldSend.apply(res, arguments);
  }
  next();
})
app.use("/api/users", userRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server up and running on PORT : ${port}`);
});