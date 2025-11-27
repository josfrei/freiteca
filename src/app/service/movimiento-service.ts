import { computed, effect, inject, Injectable, input, Signal, signal } from '@angular/core';
import { DiscoverService } from './discover-service';
import { CarruselInterface } from '../interfaces/carrusel-interface';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  createCarousel<T>(listado: Signal<T[]>):CarruselInterface<T> {
    const elementoInicial = signal(0);
    const numeroDiapositiva = signal(0);

    const diapositivasTotales = computed(() => Math.floor(listado().length / 4));

    const movimiento = () => {
      elementoInicial.set(elementoInicial() + 4);
      numeroDiapositiva.set(numeroDiapositiva() + 1);

      if (numeroDiapositiva() === diapositivasTotales()) {
        numeroDiapositiva.set(0);
        elementoInicial.set(0);
      }
    };

    return { listado, inicio: elementoInicial, movimiento, diapositivasTotales };
  }

}
