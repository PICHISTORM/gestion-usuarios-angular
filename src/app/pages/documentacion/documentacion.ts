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
      imagen:"https://mindsparktechnologies.com/wp-content/uploads/2025/05/nodejs.png",
      link:"https://nodejs.org/docs/latest/api/"
    },


    {
      id:2,
      nombre:"TypeScript",
      imagen:"https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png",
      link:"https://www.typescriptlang.org/docs/"
    },


    {
      id:3,
      nombre:"Angular",
      imagen:"https://angular.io/assets/images/logos/angular/angular.svg",
      link:"https://angular.dev/"
    },


    {
      id:4,
      nombre:"Ionic",
      imagen:"https://trbl-services.eu/wp-content/uploads/2018/06/ionic-1.png",
      link:"https://ionicframework.com/docs"
    },


    {
      id:5,
      nombre:"npm",
      imagen:"https://blog.berkankutuk.dk/tech/npm.png",
      link:"https://docs.npmjs.com/"
    }


  ];

}
