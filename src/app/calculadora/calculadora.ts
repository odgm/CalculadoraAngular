import { Component } from '@angular/core';
import { Formulario } from '../formulario/formulario';
import { Resultado } from '../resultado/resultado';

@Component({
  selector: 'app-calculadora',
  imports: [Formulario, Resultado],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  resultadoPadre: number = 0;

  procesarResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }
  protected readonly title = 'Aplicación Calculadora';
}
