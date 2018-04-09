import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

	artistas:any[] = [];

  constructor(public http:HttpClient) {
		console.log("Servicio de Spotify listo");
	}

	getArtistas(termino:string) {
		let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&limit=20`;

		let headers = new HttpHeaders({
			'authorization': 'Bearer BQAV4P2V7TA5TCpndedCCJqhEVdHWwTIAmA81Im3ObVXtZQx3hvnOhn81-MnflEmDqs9LimjwEgOO0D79eQ'
		});

		return this.http.get(url, {headers}).map((resp: any) => {
			this.artistas = resp.artists.items;
			return this.artistas;
		});
	}
}
