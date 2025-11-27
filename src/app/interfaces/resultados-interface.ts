export interface ResultadosResponse {
  results: Result[];
}

export interface Result {
  id:            number;
  title:         string;
  poster_path: null | string;
  vote_average:  number;
  media_type:    MediaType;
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
  Person = 'person',
}
