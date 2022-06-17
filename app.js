const express = require("express");
const app = express();
const dashboard = require("./routes/dashboard"); // load the routes
const cors = require("cors");

// loads environment variables from a .env file into process.env
require("dotenv").config();
// loads connect function
const CONNECT_DB = require("./DB/connect");

// <--- Middleware --->
app.use(cors());
app.use(express.json());

// <--- Home Route --->
app.get("/", (req, res) => {
  res.send("Home page");
});

// <--- Routes --->
app.use("/api/dashboard", dashboard);

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    // awaiting DB connection
    await CONNECT_DB(process.env.MONGO_URI);
    app.listen(port, console.log(`Running on PORT: ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
