
// Uso de Let y Const
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};
// También se puede hacer especificando el tipo de las propiedades
const PERSONAJE2: {nombre:string,edad:number} = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

interface Heroe {
	nombre:string,
	artesMarciales:string[]
}

let batman2:Heroe = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

let resultadoDoble2 = (a:number, b:number) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

function getAvenger2(nombre:string, arma:string="arco", poder?:string ){
  var mensaje:string;
  if( poder ){
     // Se convierte mensaje en un template litera
     mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = `${nombre} tienen un ${poder}`;
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  constructor(public base:number, public altura:number) {
  }

  calcularArea():number {
    return this.base * this.altura;
  }
}
