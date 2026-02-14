const nombre = "Juan"; // Tipo de dato: String

// Método: toUpperCase()
// Convierte el string a mayúsculas
const nombreMayusculas = nombre.toLocaleLowerCase();
console.log("Nombre en mayúsculas:", nombreMayusculas);
console.log("Nombre original:", nombre); // El valor original no cambia

// Método: toLowerCase()
// Convierte el string a minúsculas
const nombreMinusculas = nombre.toLowerCase();
console.log("Nombre en minúsculas:", nombreMinusculas);
console.log("Nombre original:", nombre); // El valor original no cambia

// Tipo de dato: Array
const personas = [
  { nombre: "Luis", edad: 22 },
  { nombre: "María", edad: 27 },
  { nombre: "Ana", edad: 28 },
];

// Método: ForEach()
// personas.forEach(function(){});
personas.forEach(function (persona) {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

// Método: Push ()
personas.push({ nombre: "Carlos Push", edad: 30 });

// Mostrar el array actualizado
console.log("\nDespués de usar push():");
personas.forEach(function (persona) {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});
