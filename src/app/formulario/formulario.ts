import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  @Output() operacion = new EventEmitter<number>();
  @Input() resultado!: number;

  operador1: number = 0;
  operador2: number = 0;

  enviarResultado() {
    this.operacion.emit(this.operador1 + this.operador2);
  }
}
