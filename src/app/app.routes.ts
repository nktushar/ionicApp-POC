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
    path: 'calendar',
    loadComponent: () =>
      import('./pages/date-time/date-time.page').then((m) => m.DateTimePage),
  },
  {
    path: 'to-do',
    loadComponent: () => import('./pages/to-do/to-do.page').then( m => m.ToDoPage)
  },
  {
    path: 'progress-bar',
    loadComponent: () => import('./pages/progress-bar/progress-bar.page').then( m => m.ProgressBarPage)
  },
  {
    path: 'full-calendar',
    loadComponent: () => import('./pages/full-calendar/full-calendar.page').then( m => m.FullCalendarPage)
  },
  {
    path: 'google-calendar',
    loadComponent: () => import('./pages/toast-calendar/toast-calendar.page').then( m => m.ToastCalendarPage)
  },

];
