import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

// El decorador @Injectable indica que esta clase se va a poder inyectar en otros sitios. La diferencia es
// que sólo se va a crear una instancia de esta
@Injectable()

/*
// En versiones más modernas de Angular, el decorador @Injectable es de la siguiente forma:
// Con esto se evita tener que declarar en el app.module, en la sección providers, el servicio en cuestión
@Injectable({
	providedIn: 'root'
})

*/
export class SpotifyService {

	artistas:any[] = [];
	urlSpotify:string = 'https://api.spotify.com/v1/';
	token:string = 'BQDh2akXQUnBhinrZUhXdO8uxD4njzHlbMJhzsJLmxES7Y8wyz8ejPJQSvbU4ExsUAmTuPlIN8WDq-3AQzQ';

  constructor(private http:HttpClient) {
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

	getNewReleases() {
		const headers = new HttpHeaders({
			'Authorization': 'Bearer BQA0DLPUxcBY3O7QNvJsSzNbXcPhF8x37ogPEiFCxzK0wdsK2THu5KSMgswNMjmXuSvxkAa8SjBTApMrgq4'
		});

		this.http
				.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
				.subscribe( data => {
					console.log(data);
				});
	}
}
