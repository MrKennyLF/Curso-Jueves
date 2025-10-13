import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  // The variable that will hold the text
  message: string = 'Este es el contenido principal de la página.';

  // The function that the button will call
  changeMessage(): void {
    this.message = '¡El mensaje ha sido actualizado por Angular!';
  }
}