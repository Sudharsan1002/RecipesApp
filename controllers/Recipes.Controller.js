const RecipesModel = require("../model/Recipesmodel");

const RecipesRouter = require("express").Router();

// FETCHES ALL RECIPES
RecipesRouter.get("/", async function (request, response) {
  try {
    const results = await RecipesModel.find();
    return response.status(200).json({
      message: "Recipes fetched successfully",
      data: results,
    });
  } catch (e) {
    return response.status(500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

// SAMPLE RESPONSE:GET ALL PRODUCTS

// {
//     "message": "Recipes fetched successfully",
//     "data": [

//         {
//             "_id": "671d0c13e7c0d8e99ab30401",
//             "name": "dosa",
//             "description": "As smooth as paper",
//             "ingredients": [
//                 "batter",
//                 "oil"
//             ],
//             "__v": 0
//         },
//         {
//             "_id": "671dde69e7c0d8e99ab30403",
//             "name": "biriyani",
//             "description": "A little bit of spice, a whole lot of flavour",
//             "ingredients": [
//                 "chicken",
//                 "rice",
//                 "spices"
//             ],
//             "__v": 0
//         },

//     ]
// }

// FETCHES ORDER MATCHES GIVEN RECIPEID
RecipesRouter.get("/:recipeId", async function (request, response) {
  const recipeId = request.params.recipeId.trim();
  try {
    const matchedRecipe = await RecipesModel.findById(recipeId);
    if (!matchedRecipe) {
      return response.status(404).json({
        message: "No Recipe found",
      });
    }
    return response.status(200).json({
      message: "Recipe fetched successfully",
      matchedRecipe,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Error fetching recipe",
      error: error.message,
    });
  }
});

// SAMPLE RESPONSE:GET PRODUCTS BY ID

// {
//     "message": "Recipe fetched successfully",
//     "matchedRecipe": {
//         "_id": "671d0bc5deb48003dc927d76",
//         "name": "dosa",
//         "description": "As smooth as paper",
//         "ingredients": [
//             "batter",
//             "oil"
//         ],
//         "__v": 0
//     }
// }

// CREATE A RECIPE
RecipesRouter.post("/createRecipe", async function (request, response) {
  try {
    const result = await RecipesModel.create(request.body);

    return response.status(200).json({
      message: "Recipe created successfully",
      data: result,
    });
  } catch (error) {
    return response.status(400).json({
      message: "Data is missing",
      error: error.message,
    });
  }
});

// SAMPLE REQUEST:CREATE RECIPE

//  {
//     "name":"parotta",
//     "description":"Flaky layers and flavor explosion-Parotta perfection",
//     "ingredients":["maida","oil","water"]
// }

// SAMLE RESPONSE:CREATE RECIPE

// {
//     "message": "Recipe created successfully",
//     "data": {
//         "name": "parotta",
//         "description": "Flaky layers and flavor explosion-Parotta perfection",
//         "ingredients": [
//             "maida",
//             "oil",
//             "water"
//         ],
//         "_id": "671de622e7c0d8e99ab30409",
//         "__v": 0
//     }
// }

// FIND AND UPDATE RECIPE

RecipesRouter.put("/:recipeId", async function (request, response) {
  const recipeId = request.params.recipeId.trim();
  try {
    const updatedRecipe = await RecipesModel.findByIdAndUpdate(
      recipeId,
      request.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return response.status(404).json({
        message: "Recipe not found",
      });
    }
    return response.status(200).json({
      message: "Recipe updated successfully",
      updatedRecipe,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Update failed",
      error: error.message,
    });
  }
});

// SAMPLE REQUEST:UPDATE RECIPE

// {
//         "name": "egg dosa",
//         "description": "As smooth as paper with egg on top",
//         "ingredients": [
//             "batter",
//             "oil",
//             "egg"
//         ]
//     }

// SAMPLE RESPONSE:UPDATE RECIPE

// {
//     "message": "Recipe updated successfully",
//     "updatedRecipe": {
//         "_id": "671d0bc5deb48003dc927d76",
//         "name": "egg dosa",
//         "description": "As smooth as paper with egg on top",
//         "ingredients": [
//             "batter",
//             "oil",
//             "egg"
//         ],
//         "__v": 0
//     }
// }

// DELETE RECIPE BY ID

RecipesRouter.delete("/:recipeId", async function (request, response) {
  const recipeId = request.params.recipeId;
  try {
    const deletedRecipe = await RecipesModel.findByIdAndDelete(recipeId);
    if (!deletedRecipe) {
      return response.status(404).json({ message: "Recipe not found" });
    }
    return response.status(200).json({
      message: "Successfully deleted",
      deletedRecipe,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Deletion failed",
      error: error.message,
    });
  }
});

// SAMPLE RESPONSE:DELETE RECIPE

// {
//     "message": "Successfully deleted",
//     "deletedRecipe": {
//         "_id": "671d0bc5deb48003dc927d76",
//         "name": "egg dosa",
//         "description": "As smooth as paper with egg on top",
//         "ingredients": [
//             "batter",
//             "oil",
//             "egg"
//         ],
//         "__v": 0
//     }
// }

module.exports = RecipesRouter;
