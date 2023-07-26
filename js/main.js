const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
    document.body.classList.add("abertura-menu");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
    document.body.classList.remove("abertura-menu");
})