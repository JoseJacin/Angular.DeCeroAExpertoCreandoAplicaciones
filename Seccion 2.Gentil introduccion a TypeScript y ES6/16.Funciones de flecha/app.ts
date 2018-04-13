export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 16.Funciones de flecha
// Función normal
let miFuncion = function(a) {
  return a;
}

// Función de flecha
let miFuncionF = a => a;

console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));


// Función con más de un parámetro
let miFuncion2 = function (a:number, b:number) {
  return a + b;
}

// Función de flecha con más de un argumento
let miFuncionF2 = (a:number, b:number) => a + b;


// Función que realiza más de una sentencia
let muFuncion3 = function (nombre:string) {
  nombre = nombre.toUpperCase();
  return nombre;
}

// Función de flecha que realiza más de una sentencia
let miFuncionF3 = (nombre:string) => {
  nombre = nombre.toUpperCase();
  return nombre;
}


// Para qué siven las funciones de Flecha
// El problema que sucede en estos casos con setTimeout, es que al mostrar el valor de "this.nombre" o "nombre", this hace referencia a la ventana window
// por lo que no se puede mostrar la propiedad nombre del objeto hulk, por lo que en vez de mostrarse "Hulk smash!!" se muestra "Pedro smash!!"
let nombre = "Pedro";
let hulk = {
  nombre: "Hulk",
  smash() {
    setTimeout(function () {
      //console.log(this.nombre + " smash!!"); // Esto muestra "Pedro smash!!"
      console.log(nombre + " smash!!"); // Esto muestra "Pedro smash!!"
    }, 1500)
  }
}

hulk.smash();

// En las funciones de Flecha con setTimeout, al mostrar el valor de "this.nombre" se obtiene el valor de la propiedad nombre del objeto hulk2, es decir, "Hulk smash!!"
// Ahora "nombre" hace referencia a la ventana window, por lo que se mostrará el valor de la variable "nombre", es decir, "Pedro smash!!"
let hulk2 = {
  nombre: "Hulk",
  smash() {
    setTimeout( () => console.log(this.nombre + " smash!!"), 1500); // Esto muestra "Hulk smash!!"
    setTimeout( () => console.log(nombre + " smash!!"), 1500); // Esto muestra "Pedro smash!!"
  }
}

hulk2.smash();
