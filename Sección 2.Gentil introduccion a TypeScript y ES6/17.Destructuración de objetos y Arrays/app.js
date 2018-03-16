"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sección 2. Gentil introducción a TypeScript y ES6
// 17.Destructuración o desestructuración de objetos y Arrays
// Destructuración/Desestruturación de objetos
var avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga"
};
// Declaración de una variable por cada una de las propiedades del objeto avenger
//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;
// Esta declaración es lo mismo que lo anterior. Da igual el órden en el que se pongan las propiedades
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
// En la declaración se pueden utilizar alias para las variables
var string1 = avenger.nombre, string2 = avenger.clave, string3 = avenger.poder;
console.log(string1, string2, string3);
// Destructuración/Desestruturación de Arrays
var avengers = ["Thor", "Steve", "Tony"];
// Declaración de una variable por cada uno de los elementos del Array
//let thor = avengers[0];
//let steve = avengers[1];
//let tony = avengers[2];
// Esta declaración es lo mismo que lo anterior. Tienen que estar en el mismo orden
var thor = avengers[0], steve = avengers[1], tony = avengers[2];
console.log(thor, steve, tony);
// Si se quiere obtener la primera posición sólo en necesario indicar la primera posición
var thor2 = avengers[0];
console.log(thor2);
// Si se quiere obtener una posición en concreto y siempre que no sea la primera, se tienen que indicar las anteriores con caracteres vacíos
var tony2 = avengers[2];
console.log(tony2);
