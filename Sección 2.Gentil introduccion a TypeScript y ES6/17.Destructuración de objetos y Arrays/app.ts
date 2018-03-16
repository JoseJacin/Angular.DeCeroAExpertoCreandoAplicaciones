export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 17.Destructuración o desestructuración de objetos y Arrays

// Destructuración/Desestruturación de objetos
let avenger = {
  nombre: "Steve",
  clave: "Capitán América",
  poder: "Droga"
}

// Declaración de una variable por cada una de las propiedades del objeto avenger
//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

// Esta declaración es lo mismo que lo anterior. Da igual el órden en el que se pongan las propiedades
let {nombre, clave, poder} = avenger;
console.log(nombre, clave, poder);

// En la declaración se pueden utilizar alias para las variables
let {nombre:string1, clave:string2, poder:string3} = avenger;
console.log(string1, string2, string3)

// Destructuración/Desestruturación de Arrays
let avengers:string[] = ["Thor", "Steve", "Tony"];

// Declaración de una variable por cada uno de los elementos del Array
//let thor = avengers[0];
//let steve = avengers[1];
//let tony = avengers[2];

// Esta declaración es lo mismo que lo anterior. Tienen que estar en el mismo orden
let [thor, steve, tony] = avengers;
console.log(thor, steve, tony);

// Si se quiere obtener la primera posición sólo en necesario indicar la primera posición
let [thor2] = avengers;
console.log(thor2);

// Si se quiere obtener una posición en concreto y siempre que no sea la primera, se tienen que indicar las anteriores con caracteres vacíos
let [ , , tony2] = avengers;
console.log(tony2);
