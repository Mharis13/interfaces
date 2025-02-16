// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CalculadoraComponent],
  template: '<app-calculadora></app-calculadora>'
})
export class AppComponent {
  title = 'mini-calculadora';
}