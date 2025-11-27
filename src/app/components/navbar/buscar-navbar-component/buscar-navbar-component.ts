import { Component, effect, inject, input, linkedSignal, output, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-buscar-navbar-component',
  imports: [],
  templateUrl: './buscar-navbar-component.html',
})
export class BuscarNavbarComponent {

  router = inject(Router);

  placeholder = input("Buscar película, serie...");
  //Valor inicial para la caja de texto
  busquedaInicial = input<string>('');
  rutaBasica = '../busqueda/';

  //cuando queremos una señal que tenga que estar inicializada, hay que usar linkedSignal
  //traemos el valor de parámetros y sino, vacío
  //busca lo que hay en la caja
  inputValue = linkedSignal<string>(() => this.busquedaInicial() ?? '');

  buscar() {
    const palabraBuscada = this.inputValue();

    if(this.inputValue()==="" || this.inputValue()===null) return

    console.log("Palabra buscada: " + palabraBuscada);

    this.router.navigate([this.rutaBasica + palabraBuscada]);
    this.inputValue.set('');
  }
}
