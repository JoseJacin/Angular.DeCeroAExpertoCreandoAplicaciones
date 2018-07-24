import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //Con el decorador @Input() se indica que la propiedad que tenga el decorador puede venir de fuera.
  // Si no llega ningún argumento en @Input() se inicializará con lo indicado en la inicialización
	@Input() heroe: any = {};
  @Input() indice: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Método con evento onClick
  verHeroe(index:Number) {
    this.router.navigate(['/heroe',this.indice]);
  }

}
