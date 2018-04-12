import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

	artistas:any[] = [];
	urlSpotify:string = 'https://api.spotify.com/v1/';
	token:string = 'BQDh2akXQUnBhinrZUhXdO8uxD4njzHlbMJhzsJLmxES7Y8wyz8ejPJQSvbU4ExsUAmTuPlIN8WDq-3AQzQ';

  constructor(public http:HttpClient) {
		console.log("Servicio de Spotify listo");
	}

	private getHeaders():HttpHeaders {
		let headers = new HttpHeaders({
			'authorization': 'Bearer ' + this.token
		});

		return headers;
	}

	getTop(id:string) {
		let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;

		let headers = this.getHeaders();

		return this.http.get(url, {headers});
	}

	getArtista(id:string) {
		let url = `${this.urlSpotify}artists/${id}`;

		let headers = this.getHeaders();

		return this.http.get(url, {headers});
		//.map((resp: any) => {
			//this.artistas = resp.artists.items;
			//return this.artistas;
		//});
	}

	getArtistas(termino:string) {
		let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

		//let headers = this.getHeaders();

		// Los headers también se pueden obtener directamente en los parámetros de la función
		return this.http.get(url, {headers:this.getHeaders()}).map((resp: any) => {
			this.artistas = resp.artists.items;
			return this.artistas;
		});
	}
}
