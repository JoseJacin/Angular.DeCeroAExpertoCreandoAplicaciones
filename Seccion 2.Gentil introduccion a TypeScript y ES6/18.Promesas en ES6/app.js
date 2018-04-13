"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sección 2. Gentil introducción a TypeScript y ES6
// 18. Promesas en ES8
// Las promesas permiten ejecutar algo (función, tarea, código, ...) cuando una tarea asíncrona finaliza
// function: Función que se va a ejecutar cuando la tarea (Promesa) asíncrona finalice
//    resolve: Función o código que se va a ejecutar si la tarea (Promesa) ha finalizado correctamente
//    reject: Función o código que se va a ejecutar si la tarea (Promesa) ha finalizado con error
var prom1 = new Promise(function (resolve, reject) {
    // Proceso o tarea asíncrona
    setTimeout(function () {
        console.log("Promesa terminada");
        // Termina bien
        resolve();
        // Termina mal
        //reject();
    }, 1500);
});
console.log("Paso 1"); // Se ejecutará antes de que la promesa finalice
// Ejecución de las funciones resolve y reject
// Con then se indica que alguna de las dos (resolve o reject) se va a ejecutar cuando la tarea asíncrona
// (Promesa) haya finalizado.
// Tiene dos parámetros
//    resolve: Función o código que se va a ejecutar si la tarea (Promesa) ha finalizado correctamente
//    reject: Función o código que se va a ejecutar si la tarea (Promesa) ha finalizado con error
//prom1.then(resolve, reject);
prom1.then(
// resolve: Se ejecutará cuando la tarea asíncrona (Promesa) haya finalizado correctamente
function () {
    console.log("Ejecutarme cuando se termine bien!");
}, 
// reject: Se ejecutará cuando la tarea asíncrona (Promesa) haya finalizado con error
function () {
    console.error("Ejecutarme si algo sale mal");
});
console.log("Paso 2"); // Se ejecutará antes de que la promesa finalice
