import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

	artistas:any[] = [];

  constructor(public http:HttpClient) {
		console.log("Servicio de Spotify listo");
	}

	getArtistas() {
		let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';

		let headers = new HttpHeaders({
			'authorization': 'Bearer BQCPWl0QWKRLPIKKj-d0Z2qWLqCievrlAoQ9TuIprHdJgZcuIdCvZ45_ZYF5BbIFAd81bdvDlIdMKsGx9D8'
		});

		return this.http.get(url, {headers}).map((resp: any) => {
			this.artistas = resp.artists.items;
			return this.artistas;
		});
	}
}
