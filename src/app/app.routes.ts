import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'inscripcion',
    loadComponent: () => import('./pages/inscripcion/inscripcion.page').then( m => m.InscripcionPage)
  },
  {
    path: 'programas',
    loadComponent: () => import('./pages/programas/programas.page').then( m => m.ProgramasPage)
  },
  {
    path: 'avisos',
    loadComponent: () => import('./pages/avisos/avisos.page').then( m => m.AvisosPage)
  }

];
