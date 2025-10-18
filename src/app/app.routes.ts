import { Routes } from '@angular/router';
import { Kenny } from './pages/kenny/kenny'; // Importa TU componente

export const routes: Routes = [
  // Ruta para tu página
  { path: 'kenny', component: Kenny },

  // Si alguien entra a la página principal, lo redirige a tu página por defecto
  { path: '', redirectTo: '/kenny', pathMatch: 'full' }
];