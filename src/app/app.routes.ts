import { Routes } from '@angular/router';
// CORRECCIÓN: Se cambió 'Kenny' por 'KennyComponent' para que coincida con la clase real
import { KennyComponent } from './pages/kenny/kenny';

export const routes: Routes = [
  // Se usa el nombre correcto del componente aquí también
  { path: 'kenny', component: KennyComponent },

  // Redirige a tu página por defecto
  { path: '', redirectTo: '/kenny', pathMatch: 'full' }
];