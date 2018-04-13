import { Component, OnInit } from '@angular/core';


//Clases
import { Lista, ListaItem } from '../../app/clases';


@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {

  nombreLista:string;
  nombreItem:string  = "";

  items:ListaItem[] = [];

  constructor() { }

  ngOnInit() { }

  agregar() {
    if(this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);

    this.nombreItem = ""
  }

  eliminar(index:number) {
    this.items.splice(index);
  }

}
