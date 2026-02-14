// Clase = Molde o plantilla que define las características(atributos) y comportamientos(métodos) de un objeto. Es una estructura que permite crear objetos con propiedades y métodos específicos. Las clases son fundamentales en la programación orientada a objetos (POO) y facilitan la organización y reutilización del código.
// Modelado de la clase
export default class Persona {
  //Atributos
  // Distintos tipos de accesos: public, private, protected
  nombre;
  edad;
  estatura;
  estadoCivil;

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.estatura = null;
    this.estadoCivil = null;
  }

  // Métodos (comportamientos)
  // getters y setters
  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getEdad() {
    return this.edad;
  }

  setEdad(edad) {
    this.edad = edad;
  }

  setEstatura(estatura) {
    this.estatura = estatura;
  }

  getEstatura() {
    return this.estatura;
  }

  setEstadoCivil(estadoCivil) {
    this.estadoCivil = estadoCivil;
  }

  getEstadoCivil() {
    return this.estadoCivil;
  }

  saludar() {
    console.log(
      "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.",
    );
  }

  presentarse() {
    console.log(
      "Hola, mi nombre es " +
        this.nombre +
        ", tengo " +
        this.edad +
        " años, mido " +
        this.estatura +
        " metros y mi estado civil es " +
        this.estadoCivil +
        ".",
    );
  }
}
