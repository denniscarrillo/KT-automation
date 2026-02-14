// Funciones anomimas
// Definir la funcion
const saludar = function (nombre) {
  console.log("Hola, " + nombre + "!");
};

// Ejecutar la función
saludar("Juan");

// Funciones flecha
const sumar = (a, b) => a + b;

const resultado = sumar(5, 3);
console.log("El resultado de la suma es:", resultado);

// Función con cuerpo de bloque
const multiplicar = (a, b) => {
  const producto = a * b;
  return producto;
};

const resultadoMultiplicacion = multiplicar(4, 6);
console.log("El resultado de la multiplicación es:", resultadoMultiplicacion);

// Función sin parámetros
// Funcion void()
const mostrarMensaje = (nombre, apellido) => {
  console.log("¡Este es un mensaje sin parámetros!", nombre, apellido);
};
mostrarMensaje("Juan", "Pérez");

// a => a + 1
