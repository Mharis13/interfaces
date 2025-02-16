import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  imports: [FormsModule] // Importar FormsModule directamente
})
export class EmpleadosComponent {
  empleado = {
    nombre: 'Juan',
    apellido: 'Díaz',
    edad: 'Mayor de edad',
    direccion: '',
    empresa: '',
    nacionalidad: 'Española',
    registrado: null
  };
}
