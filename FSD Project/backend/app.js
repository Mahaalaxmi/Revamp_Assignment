require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/usersRouter");
const app = express();
const PORT = process.env.PORT || 5000;
//connect to mongodb

//password : 2g8CkvPNFLVw31Zm
//username : mahakgm0827
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));
//middlewares
app.use(express.json());
//Routes
app.use("/", usersRouter);
//start the server
app.listen(PORT, console.log(`Server is running on  the port ${PORT}....`));
