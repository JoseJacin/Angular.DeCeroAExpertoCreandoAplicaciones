import { Component, OnInit } from '@angular/core';

//Servicios
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

//Controllers
import { NavController } from 'ionic-angular';

//Paginas
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent implements OnInit {
  constructor(private _listaDeseos:ListaDeseosService,
              private navCtrl:NavController) { }

  ngOnInit() { }

  // Esto lleva a otra página
	irAgregar() {
    this.navCtrl.push(AgregarComponent);
	}

}
