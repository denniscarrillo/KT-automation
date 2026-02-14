import Persona from "./Persona.js";

// Creamos una instancia de la clase Persona
const persona1 = new Persona("Juan", 31);

// Accedemos a los atributos de la instancia
console.log("Nombre:", persona1.nombre);
console.log("Edad:", persona1.edad);

// Llamamos a los métodos de la instancia
persona1.saludar();
persona1.setEstatura(1.8);
persona1.setEstadoCivil("Casado");
persona1.presentarse();

const persona2 = new Persona("Antony", 22);

// Accedemos a los atributos de la instancia
console.log("Nombre:", persona2.nombre);
console.log("Edad:", persona2.edad);

// Llamamos a los métodos de la instancia
persona2.saludar();

// Modificamos los atributos de la instancia
// persona2.estatura = 1.75; // No es recomendable acceder directamente a los atributos, es mejor usar los métodos setter
persona2.setEstatura(1.75);
persona2.setEstadoCivil("Soltero");

persona2.presentarse();
