// Vælg knapper og indholdselementer
const personDatabaseBtn = document.getElementById("person-database-btn");
const bødeoversigtBtn = document.getElementById("bødeoversigt-btn");
const færdselslovBtn = document.getElementById("færdselslov-btn");
const personDatabaseDiv = document.getElementById("person-database");
const bødeoversigtDiv = document.getElementById("bødeoversigt");
const færdselslovDiv = document.getElementById("færdselslov");

// Tilføj klikhændelser til knapperne
personDatabaseBtn.addEventListener("click", function() {
  personDatabaseDiv.style.display = "block";
  bødeoversigtDiv.style.display = "none";
  færdselslovDiv.style.display = "none";
});

bødeoversigtBtn.addEventListener("click", function() {
  personDatabaseDiv.style.display = "none";
  bødeoversigtDiv.style.display = "block";
  færdselslovDiv.style.display = "none";
});

færdselslovBtn.addEventListener("click", function() {
  personDatabaseDiv.style.display = "none";
  bødeoversigtDiv.style.display = "none";
  færdselslovDiv.style.display = "block";
});
