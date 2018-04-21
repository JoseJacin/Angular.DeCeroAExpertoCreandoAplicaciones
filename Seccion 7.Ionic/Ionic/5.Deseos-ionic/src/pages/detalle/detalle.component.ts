import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'detalle',
  templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {
  index:number;
  lista:any;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public alertCtrl:AlertController,
    public _listaDeseos:ListaDeseosService
  ) {
    this.index = this.navParams.get("index");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit() { }

  actualizar(item:ListaItem) {
    item.completado = !item.completado;

    this._listaDeseos.actualizarData();
  }

  borrarItem() {
    let confirm = this.alertCtrl.create({
     title: 'Borrar lista',
     message: '¿Desea borrar esta lista?',
     buttons: [
       {
         text: 'Cancelar',
         handler: () => {
           console.log('Disagree clicked');
         }
       },
       {
         text: 'Aceptar',
         handler: () => {
           console.log('Agree clicked');
         }
       }
     ]
   });
   confirm.present();
  }
}
