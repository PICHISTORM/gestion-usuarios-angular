import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home').then((m) => m.Home) },
  { path: 'perfil', loadComponent: () => import('./perfil/perfil').then((m) => m.Perfil) },
  { path: 'estructuras', loadComponent: () => import('./estructuras/estructuras').then((m) => m.Estructuras) },
  { path: 'documentacion', loadComponent: () => import('./documentacion/documentacion').then((m) => m.Documentacion) },
  { path: 'usuarios', loadComponent: () => import('./usuarios/usuarios').then((m) => m.Usuarios) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
