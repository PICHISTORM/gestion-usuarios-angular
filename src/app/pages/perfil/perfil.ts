import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  usuario = {
    name: 'Javier Mendieta Pérez',
    email: 'javier.mendieta@ejemplo.com',
    phone: '+52 246 123 4567',
    direccion: 'Carrera 45 #23-78, Puebla, México',
    nacimiento: '1990-09-05'
  };
}
