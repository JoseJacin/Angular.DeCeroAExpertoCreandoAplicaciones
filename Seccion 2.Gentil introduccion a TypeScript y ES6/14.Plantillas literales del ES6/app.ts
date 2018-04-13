export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 14.Plantillas literales del ES6
let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
let texto:string = `Hola, ${nombre} ${apellido} (${edad})`;
let texto2:string = `${ 1 + 2 }`;

console.log(texto);
console.log(texto2);

function getNombre() {
  return "Fernando";
}

console.log(getNombre());
