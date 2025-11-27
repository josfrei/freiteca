import { Signal } from "@angular/core";

export interface CarruselInterface<T> {
  listado: Signal<T[]>;
  inicio: Signal<number>;
  movimiento: () => void;
  diapositivasTotales: Signal<number>;
}
