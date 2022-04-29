const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const bcrypt = require("bcrypt");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// userSchema.pre("save", function (next) {
//   if (this.isModified("password")) {
//     bcrypt.hash(this.password, 8, (err, hash) => {
//       if (err) return next(err);

//       this.password = hash;
//       next();
//     });
//   }
// });

// const user = User.findOne({ email });
// user.comparePassword();
// userSchema.methods.comparePassword = async function (password) {
//   if (!password) throw new Error("Password missing, cannot compare!");

//   try {
//     const result = await bcrypt.compare(password, this.password);
//     return result;
//   } catch (error) {
//     console.log("Error while comparing passwords", error.message);
//   }
// };

const newList = async (req, res) => {
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

const newItem = async (req, res) => {
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

const signUp = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    const { username, email, password, confirmPassword } = req.body;
    if (
      (username.length >= 2 && username.length <= 16) ||
      (password.length >= 8 && confirmPassword.length >= 16) ||
      password === confirmPassword ||
      email.includes("@")
    ) {
      await client.connect();

      const db = client.db("shopmate");
      await db
        .collection("users")
        .insertOne({ username, email, password, lists: [] });

      res.status(200).json({
        status: 200,
        data: { email },
        message: "New user created succesfully",
      });
    } else {
      res.status(400).json({
        status: 400,
        data: { email },
        message:
          "UNABLE TO CONNECT TO NETWORK DU TO INACURATE FORM INFORMATION!.",
      });
    }
  } catch (err) {
    res.status(400).json({ status: 400, error: err.message });
  } finally {
    client.close();
  }
};

const signIn = async (req, res) => {
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

const newPost = async (re, res) => {
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

module.exports = {
  signIn,
  signUp,
  newPost,
  newList,
  newItem,
  updateUser,
};
