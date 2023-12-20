import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'date-time',
    loadComponent: () =>
      import('./pages/date-time/date-time.page').then((m) => m.DateTimePage),
  },
  {
    path: 'to-do',
    loadComponent: () => import('./pages/to-do/to-do.page').then( m => m.ToDoPage)
  },
];
