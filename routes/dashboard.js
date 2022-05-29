const express = require("express");
const router = express.Router();

const {
  getData,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  getCategories,
  getRecipes,
} = require("../controllers/dashboard");

router.route("/").get(getData).post(addRecipe);
router.route("/:title").put(updateRecipe).delete(deleteRecipe);
router.route("/recipes").get(getRecipes);
router.route("/categories").get(getCategories);

module.exports = router;
