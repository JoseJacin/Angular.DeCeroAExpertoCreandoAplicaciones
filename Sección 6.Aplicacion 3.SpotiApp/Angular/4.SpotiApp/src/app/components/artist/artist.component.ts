import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              public _spotify:SpotifyService) { }

  // ngOnInit se ejecuta cuando el componente se ha inicializado
  ngOnInit() {
    this.activatedRoute.params
        .map(params => params['id'])
        .subscribe(artista => {
      console.log(artista);
			this._spotify.getArtista(artista).subscribe(artista => {
        console.log(artista);
        this.artista = artista;
      });
    });
  }
}
