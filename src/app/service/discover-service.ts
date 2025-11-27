import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ListaPeliculas, PeliculasResponse } from '../interfaces/peliculas-interfaces';
import { ListaSeries, SeriesResponse } from '../interfaces/series-interfaces';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  private http = inject(HttpClient);

  listaDiscoverPeliculas = signal<ListaPeliculas[]>([]);
  listaDiscoverSeries = signal<ListaSeries[]>([]);
  //listaDiscoverRecomendados = signal<ListaPeliculas[]>([]);
  cargandoListadoPeliculas = signal(true);
  cargandoListadoSeries = signal(true);

  constructor() {
    this.discoverPeliculas();
    this.discoverSeries();
  }

  discoverPeliculas() {
    //const urlPeliculas = 'https://api.themoviedb.org/3/discover/movie?api_key=*********************************&language=es-ES&sort_by=popularity.desc&page=1';
    //const urlPeliculas = 'http://localhost:3000/discover/movie';
    const urlPeliculas = 'https://freiteca-back.onrender.com/discover/movie'

    this.http.get<PeliculasResponse>(urlPeliculas)
      .subscribe(resultados => {
        const peliculasDiscover = resultados.results;
        this.listaDiscoverPeliculas.set(peliculasDiscover);
        this.cargandoListadoPeliculas.set(false);
      })
  }

  discoverSeries() {
    //const urlSeries = 'https://api.themoviedb.org/3/discover/tv?api_key=*********************************&language=es-ES&sort_by=popularity.desc&page=1';
    //   const urlSeries = 'http://localhost:3000/discover/tv'; //puedo borrar el elemento.name del template
    const urlSeries = 'https://freiteca-back.onrender.com/discover/tv'; //puedo borrar el elemento.name del template

    this.http.get<SeriesResponse>(urlSeries)
      .subscribe(resultados => {
        const seriesDiscover = resultados.results;
        console.log("listado series" + seriesDiscover)
        this.listaDiscoverSeries.set(seriesDiscover);
        this.cargandoListadoSeries.set(false);
      })
  }

}
