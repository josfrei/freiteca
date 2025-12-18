import { UpperCasePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ListaPeliculas } from '../../../interfaces/peliculas-interfaces';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'descubrir-component',
  imports: [UpperCasePipe, RouterLink],
  templateUrl: './descubrir-component.html',
})
export class DescubrirComponent {

  elementos:any = input.required();
  elementoInicial = input.required<number>();
  carrusel : any = input.required();
  tituloComponente = input.required<string>();
  textoBotonComponente = input.required<string>();
  tipoComponente = input.required<string>();
 }
