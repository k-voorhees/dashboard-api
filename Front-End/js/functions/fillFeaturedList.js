function fillFeaturedList(data) {
  const recipes = data.recipes;
  // grab html elements we will be working with
  const featuredRecipes = document.getElementById("featured-list");
  const leftColumn = document.getElementById("featured-left");
  const rightColumn = document.getElementById("featured-right");
  const mid = recipes.length / 2;
  // create empty array to hold the featured recipe titles
  const featured = [];

  // loop through the array of recipes and add each title to our array
  for (let i = 0; i < recipes.length; i++) {
    featured.push(recipes[i].Title);
  }
  for (title in featured) {
    const newItem = document.createElement("p");
    const newItemTitle = document.createTextNode(featured[title]);
    newItem.append(newItemTitle);
    newItem.classList = "featured-recipes";
    if (title < mid) {
      leftColumn.append(newItem);
    } else {
      rightColumn.append(newItem);
    }
  }
  featuredRecipes.appendChild(leftColumn);
  featuredRecipes.appendChild(rightColumn);
}
