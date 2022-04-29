const {
  signUp,
  signIn,
  addNewList,
  addNewItemToList,
  updateUser,
} = require("./handlers");

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
// const { AutoEncryptionLoggerLevel } = require("mongodb");

const app = express();
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.post("/signup", signUp);
app.post("/signin", signIn);
app.patch("/newlist", addNewList);
app.patch("/addnewitem", addNewItemToList);
app.patch("/updateuserifo", updateUser);

app.listen(8000, () => {
  console.log("Listening on Port 8000");
});
