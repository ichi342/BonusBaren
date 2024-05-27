// scripts.js

// Funktion för smidig scroll till sektioner
document.addEventListener('DOMContentLoaded', function() {
    // Hitta alla länkar i navigationsmenyn
    const navLinks = document.querySelectorAll('nav ul li a');

    // Lägg till en klickhändelse för varje länk
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Förhindra standardbeteendet för länken

            // Hitta målet för länken
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Räkna ut positionen för målet
            const offsetTop = targetSection.offsetTop;

            // Scrolla smidigt till målet
            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
