// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil)
  },
  {
    path: 'estructuras',
    loadComponent: () => import('./pages/estructuras/estructuras').then(m => m.Estructuras)
  },
  {
    path: 'documentacion',
    loadComponent: () => import('./pages/documentacion/documentacion').then(m => m.Documentacion)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./pages/usuarios/usuarios').then(m => m.Usuarios)
  },

  { path: '**', redirectTo: 'home' }
];
