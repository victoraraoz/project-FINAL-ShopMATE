const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const bcrypt = require("bcryptjs");
const { hashSync } = require("bcrypt");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const NewList = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
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

const NewListItem = async (req, res) => {
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

const SignUp = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("shopmate");

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let hash = bcrypt.hashSync(password, 10);

    const result = await db
      .collection("users")
      .insertOne({ username, email, password: hash, lists: [] });

    console.log(result);

    return res.status(201).json({
      data: { username, email, lists: [] },
      status: 201,
      message: "Success",
    });
  } catch (err) {
    res.status(404).json({ status: 404, error: err.stack });
  } finally {
    client.close();
  }
};

const SignIn = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("shopmate");
    let query = { email: req.body.email };
    const result = await db.collection("users").findOne(query);
    let verification = bcrypt.compareSync(req.body.password, result.password);

    if (verification) {
      res.status(201).json({
        status: 201,
        data: {
          username: result.username,
          email: result.email,
          lists: result.lists,
        },
      });
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

const NewNote = async (req, res) => {
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

const UpdateUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    console.log("UpdateUSer component CONNECTED");
    const db = client.db("shopmate");

    let hash = bcrypt.hashSync(req.body.password, 10);
    const results = await db.collection("users").updateOne(
      { email: req.body.email },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: hash,
        },
      }
    );
    console.log(results);
    console.log(req.body);
    if (results.modifiedCount) {
      res.status(200).json({
        status: 200,
        message: "Success, User Updated",
        data: {
          username: req.body.username,
          email: req.body.email,
        },
      });
    } else {
      res.status(400).json({ status: 400, message: "Error updating" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.stack });
    console.log(err.stack);
  }
  client.close();
};

module.exports = {
  SignIn,
  SignUp,
  NewList,
  NewListItem,
  NewNote,
  UpdateUser,
};
