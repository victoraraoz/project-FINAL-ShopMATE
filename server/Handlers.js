const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const handleSignUp = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    console.log("TRY entered");
    const { email, password, confirmPassword } = req.body;
    await client.connect();
    console.log("CONNECTED");

    const db = client.db("bits");
    await db
      .collection("users")
      .insertOne({ email, password, confirmPassword });

    res.status(200).json({ status: 200, data: { email }, message: "Success" });
  } catch (err) {
    res.status(400).json({ status: 400, error: err.message });
  } finally {
    client.close();
  }
};

const handleSignIn = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("bits");
    let query = { email: req.body.email, password: req.body.password };
    const result = await db.collection("users").findOne(query);
    if (result) {
      res.status(201).json({ status: 201, data: result });
    } else {
      res.status(404).json({ status: 404, message: "Login Unsuccesfull" });
    }
  } catch (err) {
    console.log(req.body);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  } finally {
    client.close();
  }
};
module.exports = { handleSignIn, handleSignUp };
