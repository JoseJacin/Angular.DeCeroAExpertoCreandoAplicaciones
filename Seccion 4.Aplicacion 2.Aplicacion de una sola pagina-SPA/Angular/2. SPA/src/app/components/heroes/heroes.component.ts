import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
// Método con evento onClick
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService,
              // Método con evento onClick
              private router:Router) {
    //console.log("Constructor")
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  // Método con evento onClick
  verHeroe(index:Number) {
    this.router.navigate(['/heroe',index]);
  }

}
