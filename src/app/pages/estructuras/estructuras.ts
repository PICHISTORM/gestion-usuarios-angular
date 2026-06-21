import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Directiva {
  nombreA: string;
  nombreB: string;
  descripcion: string;
  imagen: string;
  alte: string;
}


@Component({
  selector: 'app-estructuras',
  imports: [CommonModule],
  templateUrl: './estructuras.html',
  styleUrl: './estructuras.scss',
})


export class Estructuras {


directivas: Directiva[] = [

  {
    nombreA: '*ngIf',
    nombreB: '@if',
    descripcion:
    'Permite mostrar o esconder elementos del HTML dependiendo de una condición lógica.',
    imagen: './assets/images/imagen07.jpg',
    alte: 'ngIf'
  },


  {
    nombreA: '*ngFor',
    nombreB: '@for',
    descripcion:
    'Permite recorrer listas y generar elementos repetidos en HTML.',
    imagen: './assets/images/imagen08.jpg',
    alte: 'ngFor'
  },


  {
    nombreA: '*ngSwitch',
    nombreB: '@switch',
    descripcion:
    'Permite mostrar contenido dependiendo del valor de una variable.',
    imagen: './assets/images/imagen09.png',
    alte: 'ngSwitch'
  }

];


}
