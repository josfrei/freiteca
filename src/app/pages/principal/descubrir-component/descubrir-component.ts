import { UpperCasePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ListaPeliculas } from '../../../interfaces/peliculas-interfaces';

@Component({
  selector: 'descubrir-component',
  imports: [UpperCasePipe],
  templateUrl: './descubrir-component.html',
})
export class DescubrirComponent {

  elementos:any = input.required();
  elementoInicial = input.required<number>();
  carrusel : any = input.required();
  tituloComponente = input.required<string>();
  textoBotonComponente = input.required<string>();

 }
