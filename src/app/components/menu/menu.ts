import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss'],
})
export class Menu implements OnInit {

  rutas = [
    { name: 'Home', path: '/home' },
    { name: 'Perfil', path: '/perfil' },
    { name: 'Estructuras', path: '/estructuras' },
    { name: 'Documentación', path: '/documentacion' },
    { name: 'Usuarios', path: '/usuarios' }
  ];


  constructor() { }

  ngOnInit(): void {
  }
}
