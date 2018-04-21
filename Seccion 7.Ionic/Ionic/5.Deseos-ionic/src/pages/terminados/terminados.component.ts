import { Component, OnInit } from '@angular/core';

//Servicios
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

//Controllers
import { NavController } from 'ionic-angular';

//Paginas
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosComponent implements OnInit {
  constructor(private _listaDeseos:ListaDeseosService,
              private navCtrl:NavController) { }

  ngOnInit() { }

  // Esto lleva a otra página
	irAgregar() {
    this.navCtrl.push(AgregarComponent);
	}

  verDetalle(lista, index) {
    this.navCtrl.push(DetalleComponent, {lista,index});
  }
}
