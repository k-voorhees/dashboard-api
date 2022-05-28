const express = require("express");
const app = express();

// loads environment variables from a .env file into process.env
require("dotenv").config();
// loads connect function
const CONNECT_DB = require("./DB/connect");

// <--- Middleware --->
app.use(express.json());

// <--- Home Route --->
app.get("/", (req, res) => {
  res.send("Home page");
});

// <--- Routes --->

// declare our port variable and the default
const port = process.env.PORT || 4000;
// setup start function to await db connection
const start = async () => {
  try {
    // calls our mongoose function
    await CONNECT_DB(process.env.MONGO_URI);
    app.listen(port, console.log(`Running on PORT: ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
