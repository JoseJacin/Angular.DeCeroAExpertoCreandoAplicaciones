export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 21. Definición de una Clase básica en TypeScript

// Declaración de una Clase
class Avenger {
  // Declaración de Propiedades
  nombre:string = "Sin nombre";
  equipo:string = "sin equipo";
  nombreReal:string = "Sin nombre real";
  puedePelear:boolean = false;
  peleasGanadas:number = 0;
}

let antman:Avenger = new Avenger();

console.log(antman);
