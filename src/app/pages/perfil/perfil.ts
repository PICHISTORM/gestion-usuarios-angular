import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService, Usuario } from '../../core/services/usuarios.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {

  private UsuariosService = inject(UsuariosService);
  usuarios: Usuario[] = [];
   cargando = true;



  ngOnInit(): void {
    setTimeout(() => {
      this.UsuariosService.obtenerUsuarios().subscribe(data => {
        this.usuarios = data;
        this.cargando = false;
      });
    }, 5000);
  }

}



