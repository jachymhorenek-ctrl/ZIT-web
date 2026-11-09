let pocet = 0;
const tlacitko = document.getElementById("tlacitko");
const vystup = document.getElementById("vystup");

tlacitko.addEventListener("click", function() {
    pocet++;
    vystup.textContent = "Počet kliknutí: " + pocet;
});