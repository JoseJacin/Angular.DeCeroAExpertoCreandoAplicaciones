import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases';

@Pipe({
	name: 'finalizado',
	pure: false
})

export class FinalizadoPipe implements PipeTransform {
	transform(listas: Lista[], estado: boolean = true): Lista[] {
		let listaFiltrada:Lista[] = [];

		for(let lista of listas) {
			if(lista.terminada == estado) {
				listaFiltrada.push(lista);
			}
		}

		return listaFiltrada;
	}
}
