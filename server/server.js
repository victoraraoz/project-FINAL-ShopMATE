const {
  SignUp,
  SignIn,
  NewList,
  NewListItem,
  NewNote,
  UpdateUser,
} = require("./handlers");

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.post("/signup", SignUp);
app.post("/signin", SignIn);
app.patch("/newlist", NewList);
app.patch("/newlistitem", NewListItem);
app.patch("/newnote", NewNote);
app.patch("/updateuser", UpdateUser);

app.listen(8000, () => {
  console.log("Listening on Port 8000");
});
