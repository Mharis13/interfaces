import { bootstrapApplication } from '@angular/platform-browser';
import { EmpleadosComponent } from './app/empleados/empleados.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(EmpleadosComponent, {
  providers: [importProvidersFrom(FormsModule)]
}).catch(err => console.error(err));
