import { Component, inject, input } from '@angular/core';
import { Datos } from '../../interfaces/datos-interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BusquedaService } from '../../service/busqueda-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { DatePipe, DecimalPipe, I18nSelectPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-info-page',
  imports: [
    I18nSelectPipe,
    UpperCasePipe,
    RouterLink,
    DecimalPipe,
    DatePipe

  ],
  templateUrl: './info-page.html',
})
export default class InfoPage {
  //para usar los parámetros de la url
  activatedRoute = inject(ActivatedRoute);
  mediaId = this.activatedRoute.snapshot.params['id'];
  mediaTipo = this.activatedRoute.snapshot.params['tipo'];

  busquedaService = inject(BusquedaService);

  //lo que hacemos es ponerle idSlug a this.productIsSlug
  // para acortar luego a la hora de pasarlo a  getProductBy....
  // y también es qeu si fuese dinámico, una señal que cambia, que se actualice le strema

  mediaResource = rxResource({
    params: () => ({ idMedia: this.mediaId, tipoMedia: this.mediaTipo }),
    stream: ({ params }) => {
      return this.busquedaService.buscarInfo(params.idMedia, params.tipoMedia)
    }
  })

  serieActivoMap = {
    true: 'En activo',
    false: 'Finalizada',
  }

}
