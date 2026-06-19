//aqui iran todos los imports compartidos entre componentes, servicios, etc... para no tener que repetirlos en cada archivo



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService, Usuario } from '../core/services/usuarios.service';






export const SHARED_IMPORTS = [
  CommonModule,
  UsuariosService,
  Component,
];
