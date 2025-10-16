import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'rojo',
    loadComponent: () =>
      import('./pages/rojo/rojo.page').then(m => m.RojoPage),
  },
  {
    path: 'verde',
    loadComponent: () =>
      import('./pages/verde/verde.page').then(m => m.VerdePage),
  },
  {
    path: 'amarillo',
    loadComponent: () =>
      import('./pages/amarillo/amarillo.page').then(m => m.AmarilloPage),
  },
  {
  path: 'amarillo',
  loadComponent: () =>
    import('./pages/amarillo/amarillo.page').then(m => m.AmarilloPage)
}

];
