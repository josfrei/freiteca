import { Component, input } from '@angular/core';
import { Datos } from '../../../interfaces/datos-interface';
import { I18nSelectPipe, UpperCasePipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'solo-series-component',
  imports: [
    I18nSelectPipe,
    UpperCasePipe,
    DatePipe,
  ],
  templateUrl: './solo-series-component.html',
})
export class SoloSeriesComponent {
  media = input.required<Datos | undefined>();
  mediaParams = input.required<string>();


  serieActivoMap = {
    true: 'En activo',
    false: 'Finalizada',
  }

}
