export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 13.Introducción a los tipos de datos
let nombre:string = "Peter";
let numero:number = 123;
let booleano:boolean = true;

let hoy:Date = new Date();

hoy = new Date('2020-10-21');

console.log(hoy);

let cualquiera:any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

let spiderman = {
  nombre: "Peter",
  edad: 20
}

spiderman = {
  nombre: "Juan",
  edad: 30
}
