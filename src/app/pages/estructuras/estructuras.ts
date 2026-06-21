import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estructuras',
  imports: [CommonModule],
  templateUrl: './estructuras.html',
  styleUrl: './estructuras.scss',
})
export class Estructuras {
  mostrarDetalle = true;
  elementos = ['ngIf', 'ngFor', 'ngSwitch'];
  opcion = 'angular';
  opcionesSwitch = ['angular', 'ionic', 'typescript'];

  cambiarOpcion(valor: string): void {
    this.opcion = valor;
  }
}
