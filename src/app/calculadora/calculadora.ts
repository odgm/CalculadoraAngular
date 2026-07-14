import { Component } from '@angular/core';
import { Formulario } from '../formulario/formulario';

@Component({
  selector: 'app-calculadora',
  imports: [Formulario],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  protected readonly title = 'Aplicación Calculadora';
}
