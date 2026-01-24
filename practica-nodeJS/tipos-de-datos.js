// Tipos de datos en JavaScript

// Tipo de dato: String (cadena de texto)
let nombre = "Juan";
let saludo = "Hola, " + nombre + "!"; // Concatenación (general en distintos lenguajes)
// let saludoTemplate = `Hola, ${nombre}!`; // Template literals: // específicamente en JavaScript

console.log(saludo);
// console.log(saludoTemplate);

// Tipo de dato: Number (número)
const edad = 31;
const altura = 1.75; // Número decimal

console.log("Edad:", edad);
console.log("Altura:", altura);

// Tipo de dato: Boolean (booleano) true o false
let esEstudiante = true;
let tieneTrabajo = false;

console.log("Es estudiante:", esEstudiante);
console.log("Tiene trabajo:", tieneTrabajo);

// Tipo de dato: Array (arreglo)
let frutas = ["Manzana", "Banana", "Cereza"];
console.log("Frutas:", frutas);
console.log("Primera fruta:", frutas[0]);

// Tipo de dato: Object (objeto)
let persona = {
  nombre: "Ana",
  edad: 28,
  ciudad: "Madrid",
};

console.log("Persona:", persona);
console.log("Nombre de la persona:", persona.nombre);

const personas = [
  { nombre: "Luis", edad: 22 },
  { nombre: "María", edad: 27 },
  { nombre: "Ana", edad: 28 },
];

console.log("Lista de personas:", personas);
console.log("Lista de personas aplciado el slice():", personas.slice(1));
console.log("Lista de personas luego del recorte:", personas);
