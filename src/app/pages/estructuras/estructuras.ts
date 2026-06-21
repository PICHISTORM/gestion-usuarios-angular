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
    imagen: 'https://pbs.twimg.com/media/GG2XBymWcAA34aJ.jpg',
    alte: 'ngIf'
  },


  {
    nombreA: '*ngFor',
    nombreB: '@for',
    descripcion:
    'Permite recorrer listas y generar elementos repetidos en HTML.',
    imagen: 'https://media.licdn.com/dms/image/v2/D5622AQHQ7z9ux7ExNQ/feedshare-shrink_480/B56Zfg5jshG0AY-/0/1751824874782?e=2147483647&v=beta&t=XzPJBjXG9w156jEUwn7cL-DpQ-OOIVBIBwhcE3gideA',
    alte: 'ngFor'
  },


  {
    nombreA: '*ngSwitch',
    nombreB: '@switch',
    descripcion:
    'Permite mostrar contenido dependiendo del valor de una variable.',
    imagen: 'https://www.angulartraining.com/daily-newsletter/wp-content/uploads/2023/08/image-14.png',
    alte: 'ngSwitch'
  }

];


}
