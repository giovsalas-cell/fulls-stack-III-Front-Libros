import { Routes } from '@angular/router';
import { LibroListaComponent } from './components/libro-lista/libro-lista.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';

export const routes: Routes = [
  { path: '', component: LibroListaComponent },
  { path: 'nuevo', component: LibroFormComponent },
  { path: 'editar/:id', component: LibroFormComponent },
  { path: '**', redirectTo: '' },
];
