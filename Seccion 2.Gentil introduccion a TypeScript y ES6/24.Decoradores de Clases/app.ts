export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 24. Decoradores de Clases

// Un decorador es una función cualquiera que inyecta una forma de inyectar funcionalidades o comportamientos a la clase, parámetro o función que ella no tiene
// Esta función se ejecuta antes de que la clase sea instanciada y obligatoriamente apunta al método constructor de una clase.
// El decorador debe específicarse justo antes de la clase que quieres "decorar"  y afectará unicamente a esa clase
function consola(constructor:Function) {
	console.log(constructor);
}

// Uno del decorador
@consola
class Villano {

	// La declaración de propiedades y el constructor se pueden hacer de dos formas
	// Forma 1
	//public nombre:string
	//constructor(public nombre:string) {
	//	this.nombre = nombre;
	//}
	// Forma 2
	constructor(public nombre:string) {
	}
}
