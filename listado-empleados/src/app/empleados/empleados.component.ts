// empleados.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Empleado {
  nombre: string;
  apellidos: string;
  cargo: string;
  salario: number;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  nuevoEmpleado: Empleado = {
    nombre: '',
    apellidos: '',
    cargo: '',
    salario: 0
  };

  empleados: Empleado[] = [
    { nombre: 'Juan', apellidos: 'Diaz', cargo: 'presidente', salario: 7500 },
    { nombre: 'Ana', apellidos: 'Martín', cargo: 'directora', salario: 7500 },
    { nombre: 'Juan', apellidos: 'Diaz', cargo: 'jefa de sección', salario: 7500 },
    { nombre: 'Juan', apellidos: 'Diaz', cargo: 'administrativo', salario: 7500 }
  ];

  agregarEmpleado() {
    if (this.nuevoEmpleado.nombre && this.nuevoEmpleado.apellidos && 
        this.nuevoEmpleado.cargo && this.nuevoEmpleado.salario) {
      this.empleados.push({...this.nuevoEmpleado});
      this.nuevoEmpleado = {
        nombre: '',
        apellidos: '',
        cargo: '',
        salario: 0
      };
    }
  }
}