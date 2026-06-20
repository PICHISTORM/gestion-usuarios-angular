import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService, Usuario } from '../../core/services/usuarios.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss',
})
export class Usuarios {

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
