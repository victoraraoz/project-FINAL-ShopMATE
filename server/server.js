const { handleSignUp, handleSignIn, handleNewList } = require("./Handlers");

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(helmet());
app.use(morgan("tiny"));
0;
app.use(cors());
app.use(express.json());

//Endpoints
app.post("/signup", handleSignUp);
app.post("/signin", handleSignIn);
app.post("/lists", handleNewList);

app.listen(8000, () => {
  console.log("Listening on Port 8000");
});
