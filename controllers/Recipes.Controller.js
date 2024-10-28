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



module.exports = RecipesRouter;
