// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmpleadosComponent],
  template: '<app-empleados></app-empleados>'
})
export class AppComponent {
  title = 'listado-empleados';
}