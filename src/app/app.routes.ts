import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
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
    path: 'info/:tipo/:id',
    loadComponent: () => import('./pages/info-page/info-page'),
  },
  {
    path: 'error404',
    loadComponent: () => import('./pages/error-page/error-page'),
  },
  {
    path: '**',
    redirectTo: 'error404',
  },



];
