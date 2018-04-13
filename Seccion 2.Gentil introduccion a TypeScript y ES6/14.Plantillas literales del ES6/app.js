"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sección 2. Gentil introducción a TypeScript y ES6
// 14.Plantillas literales del ES6
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
var texto2 = "" + (1 + 2);
console.log(texto);
console.log(texto2);
function getNombre() {
    return "Fernando";
}
console.log(getNombre());
