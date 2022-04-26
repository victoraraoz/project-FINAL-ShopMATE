const {
  handleDone,
  handleSignUp,
  handleSignIn,
  addNewList,
  addNewItemToList,
} = require("./Handlers");

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { AutoEncryptionLoggerLevel } = require("mongodb");

const app = express();
app.use(helmet());
app.use(morgan("tiny"));
0;
app.use(cors());
app.use(express.json());

//MIDDLE WEARS
// app.use(AutoEncryptionLoggerLevel);

//Endpoints
app.post("/signup", handleSignUp);
app.post("/signin", handleSignIn);
app.patch("/newlist", addNewList);
app.patch("/addnewitem", addNewItemToList);
// app.post("/notepad", handleNewPad);

//ROUTES
app.get("/done", handleDone );

app.listen(8000, () => {
  console.log("Listening on Port 8000");
});
