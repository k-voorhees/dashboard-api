function populateRecipeTable(recipeData) {
  for (let recipe in recipeData) {
    // <-- POPULATE RECIPE TABLE -->
    const recipeTable = document.querySelector("#recipe-table");
    const newRow = document.createElement("tr");

    // <--IMAGE SECTION -->
    const newImageSection = document.createElement("td");
    const newImage = document.createElement("img");
    newImage.src = recipeData[recipe].Image;
    newImage.classList = "recipe-table-image";
    newImageSection.classList = "dt-image-col";
    newImageSection.append(newImage);

    // <--TITLE SECTION -->
    const newItem = document.createElement("td");
    const newTitle = document.createTextNode(recipeData[recipe].Title);
    newItem.append(newTitle);

    //<-- EDIT BUTTONS --> *** not functional yet
    const adminButtons = document.createElement("div");
    const editButton = document.createElement("button");
    const editItag = document.createElement("i");
    const deleteItag = document.createElement("i");
    const deleteButton = document.createElement("button");
    adminButtons.className = "dt-admin-buttons";
    editItag.classList = "fa-solid fa-pen-to-square";
    deleteItag.classList = "fa-solid fa-trash-can";
    editButton.append(editItag);
    deleteButton.append(deleteItag);
    adminButtons.append(editButton);
    adminButtons.append(deleteButton);
    newItem.append(adminButtons);

    // <-- CATEGORY SECTION -->
    const newCategorySection = document.createElement("td");
    const newCategory = document.createTextNode(recipeData[recipe].Category);
    newCategorySection.append(newCategory);

    // <-- FEATURED SECTION -->
    const newFeaturedSection = document.createElement("td");
    const newCheckbox = document.createElement("input");
    newFeaturedSection.className = "dt-small-col";
    newCheckbox.type = "checkbox";
    newCheckbox.classList = "featured";
    newCheckbox.disabled = true;
    newFeaturedSection.append(newCheckbox);
    if (recipeData[recipe].Featured === true) {
      newCheckbox.checked = true;
    }

    // <-- INGREDIENTS SECTION -->
    const newIngredientsSection = document.createElement("td");
    const ingredientNum = document.createTextNode(recipeData[recipe].Ingredients.length);
    newIngredientsSection.className = "dt-small-col";
    newIngredientsSection.append(ingredientNum);

    // <-- INSTRUCTIONS SECTION -->
    const newInstructionsSection = document.createElement("td");
    const steps = document.createTextNode(recipeData[recipe].Instructions.length);
    newInstructionsSection.className = "dt-small-col";
    newInstructionsSection.append(steps);

    // <-- ATTACH NEW ROW TO TABLE -->
    newRow.append(newImageSection);
    newRow.append(newItem);
    newRow.append(newCategorySection);
    newRow.append(newFeaturedSection);
    newRow.append(newIngredientsSection);
    newRow.append(newInstructionsSection);
    recipeTable.append(newRow);
  }
}
