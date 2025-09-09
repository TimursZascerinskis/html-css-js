// Funkcija, kas izvada skaitļus no 1 līdz 10
function izvaditSkaitlus() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Saistām funkciju ar pogu
document.getElementById("showNumbers").onclick = izvaditSkaitlus;


function MyName(){
    console.log("Timur")
}

function deleteFirstParagraph() {
  const element = document.getElementById("first-paragraph");
  element.remove();
  console.log("delete")
}
function querySelectors(){
    document.querySelector("#first-paragraph").style.backgroundColor = "red";
    console.log("finded")
}

document.getElementById("first-paragraph").addEventListener("click", function(event){
  event.preventDefault()
});

//------------------------------------------------
const forma = document.getElementById("myInfo");

forma.addEventListener("submit", function(event) {
    // Novēršam noklusēto formas uzvedību
    event.preventDefault();

    // Iegūstam formā ievadītos datus
    const fname = document.getElementById("fname").value;
    
    // Iegūstam dzimuma izvēli no radio pogām
    const dzimums = document.querySelector('input[name="dzimums"]:checked')?.value;

    // Labojam kļūdu ar e-pasta ID
    const email = document.getElementById("email").value;

    // Iegūstam līmeņa un atsauksmes datus
    const limenis = document.getElementById("limenis").value;
    const atsauksme = document.getElementById("atsauksme").value;

    // Iegūstam checkbox vērtību
    const vehicle1 = document.getElementById("vehicle1").checked ? "Jā" : "Nē";

    // Izvadām datus konsolē
    console.log("Vārds: " + fname);
    console.log("Dzimums: " + dzimums);
    console.log("E-pasts: " + email);
    console.log("Līmenis: " + limenis);
    console.log("Atsauksme: " + atsauksme);
    console.log("Vai vēlas saņemt info e-pastu: " + vehicle1);
});


