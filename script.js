let menuSanduiche = document.querySelector("#sanduiche");
let abaAbrida = document.querySelector("#abaAbrida");

menuSanduiche.addEventListener("click", () =>{
    abaAbrida.classList.toggle("active");
})