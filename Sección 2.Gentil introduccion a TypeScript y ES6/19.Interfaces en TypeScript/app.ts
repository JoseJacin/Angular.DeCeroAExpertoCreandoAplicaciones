export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 19. Interfaces en TypeScript

interface Xmen {
	nombre:string,
	poder:string
}

function enviarMision(xmen:Xmen) {
  console.log("Enviando a: " + xmen.nombre);
}

function enviarCuartel(xmen:Xmen) {
  console.log("Enviando a cuartel: " + xmen.nombre);
}

let wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneración"
};

enviarMision(wolverine);
enviarCuartel(wolverine);
