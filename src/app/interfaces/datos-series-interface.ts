export interface DatosSeriesInterface {
  adult:                boolean;
  backdrop_path:        string;
  created_by:           CreatedBy[];
  episode_run_time:     number[];
  first_air_date:       Date;
  genres:               Genre[];
  homepage:             string;
  id:                   number;
  in_production:        boolean;
  languages:            OriginalLanguage[];
  last_air_date:        Date;
  last_episode_to_air:  LastEpisodeToAir;
  name:                 string;
  next_episode_to_air:  null;
  networks:             Network[];
  number_of_episodes:   number;
  number_of_seasons:    number;
  origin_country:       OriginCountry[];
  original_language:    OriginalLanguage;
  original_name:        string;
  overview:             string;
  popularity:           number;
  poster_path:          string;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons:              Season[];
  spoken_languages:     SpokenLanguage[];
  status:               string;
  tagline:              string;
  type:                 string;
  vote_average:         number;
  vote_count:           number;
  credits:              Credits;
  keywords:             Keywords;
  videos:               Videos;
  images:               Images;
  recommendations:      Recommendations;
}

export interface CreatedBy {
  id:            number;
  credit_id:     string;
  name:          string;
  original_name: string;
  gender:        number;
  profile_path:  null;
}

export interface Credits {
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: string;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          string;
  job?:                 string;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface Images {
  backdrops: Backdrop[];
  logos:     any[];
  posters:   Backdrop[];
}

export interface Backdrop {
  aspect_ratio: number;
  height:       number;
  iso_3166_1:   OriginCountry | null;
  iso_639_1:    OriginalLanguage | null;
  file_path:    string;
  vote_average: number;
  vote_count:   number;
  width:        number;
}

export enum OriginCountry {
  GB = "GB",
  Jp = "JP",
  Ru = "RU",
  Us = "US",
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
  Ru = "ru",
}

export interface Keywords {
  results: Genre[];
}

export interface LastEpisodeToAir {
  id:              number;
  name:            string;
  overview:        string;
  vote_average:    number;
  vote_count:      number;
  air_date:        Date;
  episode_number:  number;
  episode_type:    string;
  production_code: string;
  runtime:         number;
  season_number:   number;
  show_id:         number;
  still_path:      null;
}

export interface Network {
  id:             number;
  logo_path:      string;
  name:           string;
  origin_country: OriginCountry;
}

export interface ProductionCountry {
  iso_3166_1: OriginCountry;
  name:       string;
}

export interface Recommendations {
  page:          number;
  results:       RecommendationsResult[];
  total_pages:   number;
  total_results: number;
}

export interface RecommendationsResult {
  adult:             boolean;
  backdrop_path:     string;
  id:                number;
  name:              string;
  original_name:     string;
  overview:          string;
  poster_path:       string;
  media_type:        MediaType;
  original_language: OriginalLanguage;
  genre_ids:         number[];
  popularity:        number;
  first_air_date:    Date;
  vote_average:      number;
  vote_count:        number;
  origin_country:    OriginCountry[];
}

export enum MediaType {
  Tv = "tv",
}

export interface Season {
  air_date:      Date;
  episode_count: number;
  id:            number;
  name:          string;
  overview:      string;
  poster_path:   string;
  season_number: number;
  vote_average:  number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    OriginalLanguage;
  name:         string;
}

export interface Videos {
  results: VideosResult[];
}

export interface VideosResult {
  iso_639_1:    OriginalLanguage;
  iso_3166_1:   OriginCountry;
  name:         string;
  key:          string;
  site:         string;
  size:         number;
  type:         string;
  official:     boolean;
  published_at: Date;
  id:           string;
}
