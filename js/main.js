import { toggleNavbar } from "./navbar.js";
import { hoverEffect } from "./hoverEffect.js";

// Llama a la función hoverEffect al cargar la página
hoverEffect();

// Si quieres llamar a toggleNavbar en algún evento, usa un event listener
document.querySelector(".toggle-btn").addEventListener("click", toggleNavbar);
