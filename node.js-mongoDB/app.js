


















const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

const User = mongoose.model("User", { name: String });

app.get("/", (req, res) => {
  res.send("Node + MongoDB App is Running 🚀");
});

app.post("/user", async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.send("User saved");
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => console.log("Server started on port 3000"));


