import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: any, activar : boolean = true): string {

		if (activar) {
			let contrasena:string = "";
			for(let i in value) {
				contrasena += '*';
			}
			return contrasena;
		} else {
			return value;
		}

		/* Otras formas de hacerlo */
		/* Forma 1 */
		/*
		let re = /./gi;
    if(activar)  value = value.replace(re,"*")
    return value;
		*/

		/* Forma 2 */
		/*
		if (ocultar) {
			return new Array(value.length+1).join("*");
		} else {
			return value;
		}
		*/

		/* Forma 3 */
		/*
		if (ocultar) {
			return '*'.repeat(value.length);
		} else {
			return value;
		}
		*/

		/* Forma 4 */
		/*
		return activar ?Array(value.length+1).join("*"):value;
		*/

		/* Forma 5 */
		/*
		return activar ? value.replace(/[^\w]|\w/gi, "*"):value;
		*/
  }
}
