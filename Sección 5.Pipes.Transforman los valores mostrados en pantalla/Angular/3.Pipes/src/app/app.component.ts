import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "José Sánchez Rodríguez";
  nombre2:string = "jOSé sáNChez rodRÍguez";
  array = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre:"Logan",
    clave:"Wolverine",
    edad:500,
    direccion:{
      calle:"Primera",
      casa: "19"
    }
  }
  valorDePromesa = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Llegaron los datos'),3500);
  });
  fecha = new Date();
}
