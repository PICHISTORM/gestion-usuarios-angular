import { Component } from '@angular/core';
import { PagesRoutingModule } from "../pages-routing-module";

@Component({
  selector: 'app-documentacion',
  imports: [PagesRoutingModule],
  templateUrl: './documentacion.html',
  styleUrl: './documentacion.scss',
})

export class Documentacion {

  programas = [

    {
      id:1,
      nombre:"NodeJS",
      imagen:"./assets/images/imagen02.png",
      link:"https://nodejs.org/docs/latest/api/"
    },


    {
      id:2,
      nombre:"TypeScript",
      imagen:"./assets/images/imagen03.png",
      link:"https://www.typescriptlang.org/docs/"
    },


    {
      id:3,
      nombre:"Angular",
      imagen:"./assets/images/imagen04.png",
      link:"https://angular.dev/"
    },


    {
      id:4,
      nombre:"Ionic",
      imagen:"./assets/images/imagen05.png",
      link:"https://ionicframework.com/docs"
    },


    {
      id:5,
      nombre:"npm",
      imagen:"./assets/images/imagen06.png",
      link:"https://docs.npmjs.com/"
    }


  ];

}
