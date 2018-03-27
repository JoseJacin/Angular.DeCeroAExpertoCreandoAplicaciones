import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

	artistas:any[] = [];

  constructor(public http:HttpClient) {
		console.log("Servicio de Spotify listo");
	}

	getArtistas() {
		let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&limit=20';

		let headers = new HttpHeaders({
			'authorization': 'Bearer BQDr-VMSVnuP6T3nvbnI_-ns8bV-asZ0O3_33vohY1H83WiRShcf3h807iIwvWa2h0AZxlI1_ohCpVrp-Rw'
		});

		return this.http.get(url, {headers});
	}
}
