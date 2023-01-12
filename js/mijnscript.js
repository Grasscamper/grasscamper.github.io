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
  if (localStorage.getItem("darkmode") === "enabled") {
    document.body.classList.add("dark");
  }
  