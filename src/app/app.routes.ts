import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'principal',
    title: 'Principal',
    loadComponent: () => import('./pages/principal/principal'),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login'),
  },
  {
    path: 'busqueda/:nombre',
    loadComponent: () => import('./pages/busqueda-page/busqueda-page'),
  },
  {
    path: '**',
    redirectTo: 'principal',
  },



];
