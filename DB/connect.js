/*
initialize the connection to the mongoDB via mongoose
app.js will call CONNECT_DB and pass in our env variable for our mongoDB location
*/
const mongoose = require("mongoose");
const CONNECT_DB = (url) => {
  return mongoose.connect(url);
};

module.exports = CONNECT_DB;
