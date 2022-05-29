const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, "must have a recipe title"],
  },
  Category: {
    type: String,
    required: [true, "must have a category"],
  },
  Image: {
    type: String,
    required: [true, "must provide an image url for each recipe"],
  },
  Ingredients: {
    type: Array,
    required: [true, "must have ingredients list"],
  },
  Instructions: {
    type: Array,
    required: [true, "must include instructions for each recipe"],
  },
  Featured: {
    type: Boolean,
    default: false,
  },
  Views: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
