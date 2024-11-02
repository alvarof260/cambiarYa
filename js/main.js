function toggleNavbar() {
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

function hoverEffect() {
  const divs = document.querySelectorAll(".icon-card");

  divs.forEach((div) => {
    const height = div.clientHeight;
    const width = div.clientWidth;

    div.addEventListener("mousemove", (e) => {
      const { layerX, layerY } = e;

      const yRotation = ((layerX - width / 2) / width) * 20;
      const xRotation = ((layerY - height / 2) / height) * 20;

      const transformStyle = `perspective(500px) 
                              scale(1.2) 
                              rotateX(${xRotation}deg) 
                              rotateY(${yRotation}deg)`;

      div.style.transform = transformStyle;
    });

    div.addEventListener("mouseout", () => {
      div.style.transform = `perspective(500px) 
                             scale(1) 
                             rotateX(0) 
                             rotateY(0)`;
    });
  });
}

// Llama a la función hoverEffect al cargar la página
hoverEffect();