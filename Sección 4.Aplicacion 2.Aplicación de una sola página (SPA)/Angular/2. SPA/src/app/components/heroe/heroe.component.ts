import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    // Lo siguiente se utiliza para recuperar parámetros de la URL
    // Lo que se hace es suscribirse al observador
    this.activatedRoute.params.subscribe(params => {
      // De la siguiente forma se obtienen los parámetros: params['id']
      // Con esto se recupera el héroe indicado por id
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
