const Express = require("express");
const { createDbConnection } = require("./db");

const RecipeController=require("./controllers/Recipes.Controller")


// CREATE AN API SERVER
const API_SERVER = Express();


// PARSING INCOMING REQUEST BODY AS JSON
API_SERVER.use(Express.json());


// CREATE DB CONNECTION
createDbConnection();




// INJECT ROUTERS
API_SERVER.use("/recipes", RecipeController);


//  START AND LISTEN INCOMING REQUEST TO THIS SERVER
API_SERVER.listen(3000, "localhost", function () {
  console.log("Server started");
  console.log("http://localhost:3000");
});
