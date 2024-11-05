export function toggleNavbar() {
    const navbar = document.querySelector(".navbar");
    const toggleBtn = document.querySelector(".toggle-btn");
  
    navbar.classList.toggle("active");
    toggleBtn.classList.toggle("active");
  
    // Cambiar el icono del botón
    if (navbar.classList.contains("active")) {
      toggleBtn.querySelector(".open").style.display = "none"; // Ocultar el ícono abierto
      toggleBtn.querySelector(".close").style.display = "inline"; // Mostrar el ícono cerrado
    } else {
      toggleBtn.querySelector(".open").style.display = "inline"; // Mostrar el ícono abierto
      toggleBtn.querySelector(".close").style.display = "none"; // Ocultar el ícono cerrado
    }
  }