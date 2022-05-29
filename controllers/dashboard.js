const Recipe = require("../Models/RECIPE");
const asyncWrapper = require("../Middleware/asyncWrapper");
const req = require("express/lib/request");
const { findOneAndDelete } = require("../Models/RECIPE");

// notes
// left off building logic for cleaning data in add recipe route.

const getData = asyncWrapper(async (req, res) => {
  // grabs data on page load to fill table and sidebar
  const recipes = await Recipe.find({});
  const categories = await Recipe.find({}).distinct("Category");
  res.status(200).json({ recipes: recipes, categories: categories });
});

const addRecipe = asyncWrapper(async (req, res) => {
  let title = req.body.Title;

  console.log(req.body.Title);
  const newRecipe = await Recipe.create(req.body);
  res.status(201).json({ newRecipe });
});

const updateRecipe = asyncWrapper(async (req, res) => {
  // destructuring the title from the req.params -> renaming recipeTitle
  const { title: recipeTitle } = req.params;
  const recipeToUpdate = await Recipe.findOneAndUpdate({ Title: recipeTitle }, req.body, {
    new: true, //will return the new version of the item
    runValidators: true, // will make sure updated item fills requireds
  });
  res.status(200).json({ recipeToUpdate });
});

const deleteRecipe = asyncWrapper(async (req, res) => {
  // DELETE request to delete a selected recipe from db
  const { title } = req.params;
  const recipeToDelete = await Recipe.findOneAndDelete({ Title: title });
  res.status(200).json({ recipeToDelete });
});

const getCategories = asyncWrapper(async (req, res) => {
  const categories = await Recipe.find({}).distinct("Category");
  res.status(200).json({ categories });
});

const getRecipes = asyncWrapper(async (req, res) => {
  const { category } = req.query;
  // if there is a query for a specific category, return all recipes in that category
  // otherwise, return all recipes
  if (category) {
    const recipes = await Recipe.find({ Category: category });
    res.status(200).json({ recipes });
  } else {
    const recipes = await Recipe.find({});
    res.status(200).json({ recipes });
  }
});

module.exports = { getData, addRecipe, updateRecipe, deleteRecipe, getCategories, getRecipes };
