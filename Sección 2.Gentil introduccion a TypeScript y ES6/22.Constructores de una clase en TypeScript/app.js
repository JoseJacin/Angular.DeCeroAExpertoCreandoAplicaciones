"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sección 2. Gentil introducción a TypeScript y ES6
// 22. Constructores de una clase en TypeScript
// Un constructor en una función que se ejecuta en el momento en que se crea una nueva instancia de un objeto
// Declaración de una Clase
var Avenger = /** @class */ (function () {
    // Constructor
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
// Instancia de un nuevo objeto de tipo Avenger
var antman = new Avenger("AntMan", "Cap", "Scott Lang");
console.log(antman);
