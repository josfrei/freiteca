import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Datos } from '../../../interfaces/datos-interface';

@Component({
  selector: 'sinopsis-puntuacion-generos-component',
  imports: [DecimalPipe],
  templateUrl: './sinopsis-puntuacion-generos-component.html',
})
export class SinopsisPuntuacionGenerosComponent {

media = input.required<Datos | undefined>();

}
