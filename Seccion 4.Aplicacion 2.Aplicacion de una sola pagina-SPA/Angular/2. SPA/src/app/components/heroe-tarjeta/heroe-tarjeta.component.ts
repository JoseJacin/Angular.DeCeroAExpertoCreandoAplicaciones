import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() componente: string;


  //Con el decorador @Output() se indica que la propiedad que tenga el decorador va a ser el evento que
  // queremos que el padre esté escuchando. Se le debe indicar el tipo de dato que va a emitir
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    // Se inicializa el EventEmitter
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.heroe);
    console.log(this.indice);
  }

  // Método con evento onClick
  verHeroe() {
    // Se indica al EventEmitter declarado que emita un evento y que lleve el valor indice
    // Este evento lo recogerá el componente padre
    if (this.componente === "heroes") {
      this.router.navigate( ['/heroe', this.indice] );
    } else if (this.componente === "buscador") {
      this.heroeSeleccionado.emit(this.indice);
    } else {
      this.router.navigate( ['/heroe', this.indice] );
    }
  }
}
