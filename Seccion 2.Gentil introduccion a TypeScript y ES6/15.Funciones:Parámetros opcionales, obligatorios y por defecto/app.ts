export {}; // Esto se utiliza para que no indique como variables duplicadas
// Sección 2. Gentil introducción a TypeScript y ES6
// 15.Funciones:Parámetros opcionales, obligatorios y por defecto
// Parámetro obligatorio, por defecto, opcional
function activar(quien:string, objeto:string="batiseñal", momento?:string) {
  let mensaje:string;

  if (momento) {
    mensaje = `${quien} activó la ${objeto} en la ${momento}`;
  } else {
    mensaje = `${quien} activó la ${objeto}`;

  }

  console.log(mensaje);
}

activar("Gordon");
activar("Gordon", "lámpara");
activar("Gordon", "lámpara", "tarde");
