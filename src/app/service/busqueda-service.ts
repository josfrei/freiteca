import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ListaPeliculas, PeliculasResponse } from '../interfaces/peliculas-interfaces';
import { Result, ResultadosResponse } from '../interfaces/resultados-interface';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private http = inject(HttpClient);
  limiteResultados: number = 20;

  //es query porque se puede buscar por nombre completo o partes de nombre
  buscarPalabra(queryBusqueda: string): Observable<Result[]> {
    queryBusqueda = queryBusqueda.toLowerCase();

    //const urlBusqueda = `https://api.themoviedb.org/3/search/multi?api_key=************************&language=es-ES&adult=true&query=${queryBusqueda}`;
    const urlBusqueda = `https://freiteca-back.onrender.com/search/${queryBusqueda}`;

    console.log(`Llegando al servidor por ${queryBusqueda}`);

    return this.http.get<ResultadosResponse>(urlBusqueda)
      .pipe(
        map(res => (res.results || []).filter(item => item.media_type !== 'person').slice(0,this.limiteResultados)),
        catchError((error) => {
          console.log('Error fetching ', error);
          return throwError(
            () => new Error(`No se pudo obtener capitales con ese query: ${queryBusqueda}`)
          );
        })
      )
  };

}
