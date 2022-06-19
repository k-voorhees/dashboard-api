/*!
 * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
//
// Scripts
//

// <-- LOAD SIDEBAR -->
window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem("sb|sidebar-toggle") === "true") {
    //   document.body.classList.toggle("sb-sidenav-toggled");
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
    });
  }
});

// <-- POPULATE RECIPE TABLE -->
window.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://localhost:4000/api/dashboard")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      populateRecipeTable(data.recipes);
      const datatablesSimple = document.getElementById("datatablesSimple");
      if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
      }
    });
});

// <-- DISPLAY CONSTRUCTION MODAL -->
window.addEventListener("DOMContentLoaded", (event) => {
  $(document).ready(function () {
    $("#exampleModalCenter").modal("show");
  });
});

const modalButton = document.getElementById("construction-modal-button");
modalButton.addEventListener("click", () => {
  $("#exampleModalCenter").modal("hide");
});

// <-- POPULATE RECIPE FEATURED LIST -->
window.addEventListener("DOMContentLoaded", (event) => {
  fetch("http://localhost:4000/api/dashboard/recipes?featured=true")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      fillFeaturedList(data);
    });
});
