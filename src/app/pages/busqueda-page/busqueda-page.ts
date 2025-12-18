import { Component, effect, inject, input, linkedSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, of } from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { BusquedaService } from '../../service/busqueda-service';
import { DecimalPipe, I18nSelectPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-busqueda-page',
  imports: [
        I18nSelectPipe,
        DecimalPipe,
        UpperCasePipe,
        RouterLink

],
  templateUrl: './busqueda-page.html',
})
export default class BusquedaPage {

  busquedaService = inject(BusquedaService);

  //obtengo el texto a buscar desde la url
  palabraABuscar = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(params => params['nombre'])
    )
  );

  //uso los parámetros con la clave 'nombre'
  activatedRoute = inject(ActivatedRoute);
  //para modificar la ruta
  router = inject(Router);

  peliculasResources = rxResource({
    params: this.palabraABuscar,
    stream: ({ params }) => {
      if (!params) return of([]);
      return this.busquedaService.buscarPalabra(params);
    }
  });


  descripcionTipo = {
    "movie" : "Película",
    "tv" : "Serie",
  }
}

