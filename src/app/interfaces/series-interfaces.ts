export interface SeriesResponse {
  page:          number;
  results:       ListaSeries[];
  total_pages:   number;
  total_results: number;
}

export interface ListaSeries {
  adult:             boolean;
  backdrop_path:     null;
  genre_ids:         number[];
  id:                number;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  first_air_date:    Date;
  name:              string;
  vote_average:      number;
  vote_count:        number;
}
