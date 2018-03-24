import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: any, activado : boolean = true): string {

		let contrasena:string = "";

		if (activado) {
			for(let i in value) {
				contrasena = contrasena + '*';
			}
		} else {
			contrasena = value;
		}


		return contrasena;
  }

}
