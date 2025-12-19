import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BusquedaService } from '../../service/busqueda-service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { DatePipe, DecimalPipe, I18nSelectPipe, UpperCasePipe } from '@angular/common';
import { map } from 'rxjs';
import { SinopsisPuntuacionGenerosComponent } from "./sinopsis-puntuacion-generos-component/sinopsis-puntuacion-generos-component";
import { SoloSeriesComponent } from "./solo-series-component/solo-series-component";
import { ItemListMapper } from '../../mapper/item-list-mapper';

@Component({
  selector: 'app-info-page',
  imports: [
    UpperCasePipe,
    RouterLink,
    SinopsisPuntuacionGenerosComponent,
    SoloSeriesComponent,
],
  templateUrl: './info-page.html',
})
export default class InfoPage {
  //para usar los parámetros de la url
  activatedRoute = inject(ActivatedRoute);

  //de esta manera reacciona al cambio de url
  mediaParams = toSignal(
    this.activatedRoute.params.pipe(
      map(params => ({
        id: params['id'],
        tipo: params['tipo']
      }))
    )
  );

  busquedaService = inject(BusquedaService);

  //lo que hacemos es ponerle idSlug a this.productIsSlug
  // para acortar luego a la hora de pasarlo a  getProductBy....
  // y también es qeu si fuese dinámico, una señal que cambia, que se actualice le strema

  mediaResource = rxResource({
    params: () => ({
      idMedia: this.mediaParams()?.id,
      tipoMedia: this.mediaParams()?.tipo,
    }),
    stream: ({ params }) => {
      return this.busquedaService.buscarInfo(params.idMedia, params.tipoMedia)
    }
  })

  serieActivoMap = {
    true: 'En activo',
    false: 'Finalizada',
  }

  //Recomendaciones similares
  recomendaciones = computed(() => {
    const media = this.mediaResource.value();
    return media?.recommendations?.map(r => ({
      id: r.recommendation_id.toString(),
      tipo: r.recommendation_type,
      title: r.recommendation_title,
      backdrop_path: r.recommendation_backdrop_path,
    } as ItemListMapper)) || [];
  });

}
