// code voor de donkere modus
function darkmodeFunction() {
    var element = document.body;
  
    // Voeg de dark-klasse toe of verwijder deze
    element.classList.toggle("dark");
  
    // Sla de huidige staat van de dark-klasse op in localStorage
    if (element.classList.contains("dark")) {
      localStorage.setItem("darkmode", "enabled");
    } else {
      localStorage.setItem("darkmode", "disabled");
    }
  }
  
  // Controleer of de dark-klasse is opgeslagen in localStorage en, zo ja, pas deze toe
  if (localStorage.getItem("darkmode") === "disabled") {
    document.body.classList.remove("dark");
  }

// code voor het mobiele menu.
let hamburgerMenu = document.getElementById("hamburger");
let menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", function() {
    menu.classList.toggle("show-menu");

if (hamburgerMenu.textContent === "≡") {
     hamburgerMenu.textContent = "✕";
  } else {
     hamburgerMenu.textContent = "≡";
    }
});
