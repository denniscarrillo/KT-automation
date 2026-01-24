// Tres formas de declarar variables en JavaScript
// var mivariable1 = "Hola Mundo";
let mivariable2 = "Hola Mundo con Let";
const mivariable3 = "Hola Mundo con Const";

// Imprimir en consola las variables
console.log(mivariable2);
console.log(mivariable3);

// Intentar reasignar una variable const (esto causará un error)
mivariable2 = "Nuevo valor con Let";
console.log("Mi Let modificada: " + mivariable2);

// Esto causará un error
// mivariable3 = "Nuevo valor con Const";
// console.log("Mi Const modificada: " + mivariable3);

// Interactuar con el DOM (Document Object Model)
const $card1 = document.getElementById("card1");
const $button1 = document.getElementById("button1");
const $p1 = document.getElementById("p1");

// $card1.innerHTML = `
//     <h2>${mivariable2}</h2>
//     <p>Esta es una tarjeta creada dinámicamente usando JavaScript.</p>
// `;

// Agregar un evento click al elemento card1
// () => {}  Función flecha
$card1.addEventListener("click", function () {
  $card1.classList.toggle("active");
});

$button1.addEventListener("click", function () {
  console.log($p1.textContent);
  $p1.textContent = "¡Has hecho clic en el botón!";
});

// ========== MODAL FUNCTIONALITY ==========
// Obtener elementos del modal
const $modal = document.getElementById("myModal");
const $openModalBtn = document.getElementById("openModalBtn");
const $closeBtn = document.querySelector(".close");

// Abrir modal al hacer clic en el botón
$openModalBtn.addEventListener("click", function () {
  $modal.classList.add("active");
});

// Cerrar modal al hacer clic en la X
$closeBtn.addEventListener("click", function () {
  $modal.classList.remove("active");
});

// Cerrar modal al hacer clic fuera del contenido
$modal.addEventListener("click", function (event) {
  // Si el clic fue directamente en el fondo (no en el contenido)
  if (event.target === $modal) {
    $modal.classList.remove("active");
  }
});

// Cerrar modal con la tecla Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    $modal.classList.remove("active");
  }
});
