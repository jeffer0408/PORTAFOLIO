// script.js — Portafolio Jefferson Ramos

// Mostrar el año actual en el footer
document.getElementById("anio").textContent = "© " + new Date().getFullYear();

// Abrir y cerrar cada semana al hacer clic
function toggleSemana(cabecera) {
  var contenido = cabecera.nextElementSibling;
  var flecha = cabecera.querySelector(".flecha");

  if (contenido.classList.contains("abierto")) {
    // Si está abierto, cerrarlo
    contenido.classList.remove("abierto");
    flecha.classList.remove("abierta");
  } else {
    // Cerrar todos los que estén abiertos
    var todosAbiertos = document.querySelectorAll(".semana-contenido.abierto");
    todosAbiertos.forEach(function (el) {
      el.classList.remove("abierto");
    });
    var todasFlechas = document.querySelectorAll(".flecha.abierta");
    todasFlechas.forEach(function (el) {
      el.classList.remove("abierta");
    });

    // Abrir el clickeado
    contenido.classList.add("abierto");
    flecha.classList.add("abierta");
  }
}

window.onload = () => {
  const modal = document.getElementById("miModal");
  modal.showModal();
};

const modal = document.getElementById("miModal");

modal.addEventListener("click", (e) => {
  const rect = modal.getBoundingClientRect();
  const isInDialog =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;

  if (!isInDialog) {
    modal.close();
  }
});
