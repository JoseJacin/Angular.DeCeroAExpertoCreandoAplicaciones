export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 22. Constructores de una clase en TypeScript

// Un constructor en una función que se ejecuta en el momento en que se crea una nueva instancia de un objeto

// Declaración de una Clase
class Avenger {
  // Declaración de Propiedades
  nombre:string;
  equipo:string;
  nombreReal:string;
  puedePelear:boolean = false;
  peleasGanadas:number = 0;

  // Constructor
  constructor(nombre:string, equipo:string, nombreReal:string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
}

// Instancia de un nuevo objeto de tipo Avenger
let antman:Avenger = new Avenger("AntMan", "Cap", "Scott Lang");

console.log(antman);
