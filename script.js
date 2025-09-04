// Array of fun African animal facts
    const animalFacts = [
      "Elephants are the largest land animals in the world 🌍.",
      "Giraffes have the same number of neck bones as humans — seven! 🦒",
      "Lions are the only cats that live in groups called prides 🦁.",
      "Hippos can hold their breath for up to 5 minutes underwater 🦛.",
      "Cheetahs are the fastest land animals, reaching speeds up to 100 km/h 🐆.",
      "Ostriches can run faster than horses and lay the largest eggs of any bird 🐦.",
      "Zebras’ stripes are unique, just like human fingerprints 🦓.",
      "Meerkats take turns standing guard to protect their group 🐾."
    ];

    // Function to show a random fact
    function showFact() {
      const randomIndex = Math.floor(Math.random() * animalFacts.length);
      const factBox = document.getElementById("fact");
      factBox.textContent = animalFacts[randomIndex];
      factBox.classList.add("scale-105", "bg-yellow-50"); 

      setTimeout(() => {
        factBox.classList.remove("scale-105", "bg-yellow-50");
      }, 300);
    }
 