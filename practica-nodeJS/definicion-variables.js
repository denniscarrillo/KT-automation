// Formas de declarar una variable en JavaScript
// var (declaración antigua, evita su uso en código moderno)
// let (declaración de variable con alcance de bloque)
// const (declaración de constante con alcance de bloque)
let saludo = "Hola Mundo desde NodeJS";
const saludo2 = "Hola de nuevo";

// Flujo del programa
console.log(saludo);
saludo = "Hola Mundo modificado";
console.log(saludo);
console.log(saludo2);

// saludo2 = "Intento de modificar constante"; // Esto generará un error
// console.log(saludo2);
