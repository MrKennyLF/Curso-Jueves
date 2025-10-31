import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-adan',
  templateUrl: './adan.component.html',
  styleUrl: './adan.component.scss',
  imports: [UpperCasePipe, RouterModule]
})
export class AdanComponent {
  title: string = 'página de Adan';
}