const Express = require("express");
const { createDbConnection } = require("./db");

const RecipeController = require("./controllers/Recipes.Controller");

// ENVIRONMENT CONFIGURATION
require("dotenv").config();

// CREATE AN API SERVER
const API_SERVER = Express();

// PARSING INCOMING REQUEST BODY AS JSON
API_SERVER.use(Express.json());

// CREATE DB CONNECTION
createDbConnection();

// INJECT ROUTERS
API_SERVER.use("/recipes", RecipeController);

//  START AND LISTEN INCOMING REQUEST TO THIS SERVER
API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, function () {
  console.log("Server started");
  console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});
