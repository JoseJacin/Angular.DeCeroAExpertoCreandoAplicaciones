import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

//Clases
import { Lista, ListaItem } from '../../app/clases';

//Servicios
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string  = "";

  items:ListaItem[] = [];

  constructor(
    public alertCtrl:AlertController,
    public navCtrl:NavController,
    public _listaDeseos:ListaDeseosService
  ) { }

  ngOnInit() { }

  agregarItem() {
    if(this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);

    this.nombreItem = ""
  }

  eliminarItem(index:number) {
    this.items.splice(index,1);
  }

  guardarLista() {
    if(this.nombreLista.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesario',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    this._listaDeseos.agregarLista(lista);

    this.navCtrl.pop();
  }
}
