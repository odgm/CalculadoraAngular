import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Operador } from "./operador/operador";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Operador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Aplicación Calculadora';
}
