// Funkcija, kas izvada skaitļus no 1 līdz 10
function izvaditSkaitlus() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Saistām funkciju ar pogu
document.getElementById("showNumbers").onclick = izvaditSkaitlus;
