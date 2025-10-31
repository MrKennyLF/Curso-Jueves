import { Routes } from '@angular/router';
import { KennyComponent } from './pages/kenny/kenny';
import { Danelly } from './pages/danelly/danelly';
import { AdanComponent } from './pages/adan/adan.component';

export const routes: Routes = [
  { path: '', redirectTo: 'kenny', pathMatch: 'full' },
  { path: 'kenny', component: KennyComponent },
  { path: 'danelly', component: Danelly },
  { path: 'adan', component: AdanComponent },
  { path: '**', redirectTo: 'kenny' } // ruta por defecto si no existe
];
