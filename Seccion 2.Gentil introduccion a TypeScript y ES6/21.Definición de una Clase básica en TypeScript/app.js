"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sección 2. Gentil introducción a TypeScript y ES6
// 21. Definición de una Clase básica en TypeScript
// Declaración de una Clase
var Avenger = /** @class */ (function () {
    function Avenger() {
        // Declaración de Propiedades
        this.nombre = "Sin nombre";
        this.equipo = "sin equipo";
        this.nombreReal = "Sin nombre real";
        this.puedePelear = false;
        this.peleasGanadas = 0;
    }
    return Avenger;
}());
var antman = new Avenger();
console.log(antman);
