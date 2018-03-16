"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sección 2. Gentil introducción a TypeScript y ES6
// 16.Funciones de flecha
// Función normal
var miFuncion = function (a) {
    return a;
};
// Función de flecha
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
// Función con más de un parámetro
var miFuncion2 = function (a, b) {
    return a + b;
};
// Función de flecha con más de un argumento
var miFuncionF2 = function (a, b) { return a + b; };
// Función que realiza más de una sentencia
var muFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// Función de flecha que realiza más de una sentencia
var miFuncionF3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// Para qué siven las funciones de Flecha
// El problema que sucede en estos casos con setTimeout, es que al mostrar el valor de "this.nombre" o "nombre", this hace referencia a la ventana window
// por lo que no se puede mostrar la propiedad nombre del objeto hulk, por lo que en vez de mostrarse "Hulk smash!!" se muestra "Pedro smash!!"
var nombre = "Pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            //console.log(this.nombre + " smash!!"); // Esto muestra "Pedro smash!!"
            console.log(nombre + " smash!!"); // Esto muestra "Pedro smash!!"
        }, 1500);
    }
};
hulk.smash();
// En las funciones de Flecha con setTimeout, al mostrar el valor de "this.nombre" se obtiene el valor de la propiedad nombre del objeto hulk2, es decir, "Hulk smash!!"
// Ahora "nombre" hace referencia a la ventana window, por lo que se mostrará el valor de la variable "nombre", es decir, "Pedro smash!!"
var hulk2 = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500); // Esto muestra "Hulk smash!!"
        setTimeout(function () { return console.log(nombre + " smash!!"); }, 1500); // Esto muestra "Pedro smash!!"
    }
};
hulk2.smash();
