import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { MovimientoService } from '../../service/movimiento-service';
import { DiscoverService } from '../../service/discover-service';
import { DescubrirComponent } from "./descubrir-component/descubrir-component";
import { CarruselInterface } from '../../interfaces/carrusel-interface';
import { ListaPeliculas } from '../../interfaces/peliculas-interfaces';
import { ListaSeries } from '../../interfaces/series-interfaces';

@Component({
  selector: 'principal',
  imports: [DescubrirComponent],
  templateUrl: './principal.html',
})
export default class Principal {

  movimientoService = inject(MovimientoService);

  discoverService = inject(DiscoverService);

  // Películas
  peliculas = this.discoverService.listaDiscoverPeliculas;
  //Series
  series = this.discoverService.listaDiscoverSeries;


  //Carruseles
  peliculasCarrusel: CarruselInterface<ListaPeliculas> = this.movimientoService.createCarousel(this.peliculas);
  seriesCarrusel: CarruselInterface<ListaSeries> = this.movimientoService.createCarousel(this.series);
  recomendadosCarrusel: CarruselInterface<ListaPeliculas> = this.movimientoService.createCarousel(this.peliculas);


  /**
   * Efecto para cambiar las diapositivas automáticamente
   */

  movimientoAutomático<T>(servicio: CarruselInterface<T>, debounceTime: number) {
    return effect((onCleanup) => {
      const timeOut = setTimeout(() => {
        const intervaloTiempo = setInterval(() => servicio.movimiento(), 5000);

      }, debounceTime);

      onCleanup(() => {
        clearTimeout(timeOut);
      })
    })

  }

  // inicializamos los carruseles con delays distintos
  efectoPeliculas = this.movimientoAutomático(this.peliculasCarrusel, 0);
  efectoSeries = this.movimientoAutomático(this.seriesCarrusel, 1500);
  efectoRecomendados = this.movimientoAutomático(this.recomendadosCarrusel, 3000);
}

