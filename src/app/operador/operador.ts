import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operador',
  imports: [FormsModule],
  templateUrl: './operador.html',
  styleUrl: './operador.css',
})
export class Operador {
  operador1 = 0;
  operador2 = 0;
  resul = 0;

  resultado() {
    this.resul = (this.operador1 + this.operador2);
  }
}
