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
    name: 'Andrea Gómez',
    email: 'andrea.gomez@ejemplo.com',
    phone: '+57 310 123 4567',
    direccion: 'Carrera 45 #23-78, Bogotá, Colombia',
    nacimiento: '1990-09-05'
  };
}
