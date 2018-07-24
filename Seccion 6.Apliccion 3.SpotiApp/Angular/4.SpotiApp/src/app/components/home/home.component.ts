import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  /*
   Esto es solo para explicar las peticiones HTTP
  //paises: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Constructor del home hecho');
    // Se configura una petición en la que en algún momento "alguien" se va a suscribir
    this.http
        .get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe((respuesta: any) => {
          this.paises = respuesta;
          console.log(respuesta);
        });
  }
  */

  constructor() { }

  ngOnInit() {
  }

}
