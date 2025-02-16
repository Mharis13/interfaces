import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
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
