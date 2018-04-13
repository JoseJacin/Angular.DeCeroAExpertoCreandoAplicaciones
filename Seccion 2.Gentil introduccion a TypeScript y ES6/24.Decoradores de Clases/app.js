"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Sección 2. Gentil introducción a TypeScript y ES6
// 24. Decoradores de Clases
// Un decorador es una función cualquiera que inyecta una forma de inyectar funcionalidades o comportamientos a la clase, parámetro o función que ella no tiene
// Esta función se ejecuta antes de que la clase sea instanciada y obligatoriamente apunta al método constructor de una clase.
// El decorador debe específicarse justo antes de la clase que quieres "decorar"  y afectará unicamente a esa clase
function consola(constructor) {
    console.log(constructor);
}
// Uno del decorador
var Villano = /** @class */ (function () {
    // La declaración de propiedades y el constructor se pueden hacer de dos formas
    // Forma 1
    //public nombre:string
    //constructor(public nombre:string) {
    //	this.nombre = nombre;
    //}
    // Forma 2
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
