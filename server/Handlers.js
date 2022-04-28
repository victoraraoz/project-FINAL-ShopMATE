const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const bcrypt = require("bcrypt");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addNewList = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    console.log("TRY entered");
    await client.connect();

    const db = client.db("shopmate");
    await db
      .collection("users")
      .updateOne(
        { email: req.body.email },
        { $push: { lists: { name: req.body.name, items: [] } } }
      );

    res.status(200).json({ status: 200, message: "Success" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.stack });
    console.log(err.stack);
  }
  client.close();
};

const addNewItemToList = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("shopmate");
    await db
      .collection("users")
      .updateOne(
        { email: req.body.email, "lists.name": req.body.list },
        { $push: { "lists.$.items": { $each: [req.body.name], $position: 0 } } }
      );

    res.status(200).json({ status: 200, message: "Success" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.stack });
    console.log(err.stack);
  }
  client.close();
};

const handleSignUp = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    console.log("TRY entered");
    const { email, password, confirmPassword } = req.body;
    console.log(email);
    if (password === confirmPassword && email.includes("@")) {
      await client.connect();

      const db = client.db("shopmate");
      await db.collection("users").insertOne({ email, password, lists: [] });

      res
        .status(200)
        .json({ status: 200, data: { email }, message: "Success" });
    } else {
      res.status(400).json({
        status: 400,
        data: { email },
        message: "Error, something went wrong.",
      });
    }
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
    const db = client.db("shopmate");
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

const handleNewPost = async (re, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("shopmate");
    let query = { email: req.body.email, password: req.body.password };
    const result = await db.collection("notepad").findOne(query);
    if (result) {
      res.status(201).json({ status: 201, data: result });
    } else {
      res.status(404).json({ status: 404, message: "Something went wrong" });
    }
  } catch (err) {
    console.log(req.body);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  } finally {
    client.close();
  }
};

const updateUser = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();

    const db = client.db("shopmate");
    await db.collection("users").updateMany(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
      }

      // "lists.name": req.body.list
      // { $push: { "lists.$.items": { $each: [req.body.name], $position: 0 } } }
    );

    res.status(200).json({ status: 200, message: "Success, User Updated" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.stack });
    console.log(err.stack);
  }
  client.close();
};

const handleDone = () => {};

module.exports = {
  handleSignIn,
  handleSignUp,
  handleNewPost,
  addNewList,
  addNewItemToList,
  updateUser,
};
