import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  
  operador1: number | null = null;
  operador2: number | null = null;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar() {
    if(this.operador1 && this.operador2){
      const resultado = this.operador1 + this.operador2;
      this.resultadoSuma.emit(resultado);
    } else {
      console.log('Ingresar valores correctos');
    }

  }
}
