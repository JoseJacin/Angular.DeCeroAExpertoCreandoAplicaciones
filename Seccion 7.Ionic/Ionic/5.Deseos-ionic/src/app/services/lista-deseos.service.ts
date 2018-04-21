import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {
    // let lista1 = new Lista('Compras de supermercado');
    // let lista2 = new Lista('Juegos que deseo');
    // let lista3 = new Lista('Cosas de la universidad');
    //
    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);

    this.cargarData();

    console.log("Servicio inicializado");
  }

	// Función que guarda en LocalStorage
	actualizarData() {
		localStorage.setItem("data",JSON.stringify(this.listas));
	}

	// Función que carga del LocalStorage
  cargarData() {
    if(localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  // Función que agrega una Lista en el LocalStorage
  agregarLista(lista:Lista) {
    this.listas.push(lista);
    this.actualizarData();
  }

	// Función que elimina la lista. En realidad la pone como terminada
  eliminarLista(index:number) {
    this.listas.splice(index,1);
    this.actualizarData();
  }
}
