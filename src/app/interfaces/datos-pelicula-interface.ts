export interface DatosPeliculaInterface { }
export interface TopLevel {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: null;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  origin_country:        string[];
  original_language:     OriginalLanguage;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
  credits:               Credits;
  keywords:              Keywords;
  release_dates:         ReleaseDates;
  videos:                Videos;
  images:                Images;
  recommendations:       Recommendations;
}

export interface Credits {
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: Department;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  cast_id?:             number;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          Department;
  job?:                 string;
}

export enum Department {
  Acting = "Acting",
  Art = "Art",
  Camera = "Camera",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Editing = "Editing",
  Lighting = "Lighting",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}

export interface Genre {
  id:   number;
  name: string;
}

export interface Images {
  backdrops: Backdrop[];
  logos:     Backdrop[];
  posters:   Backdrop[];
}

export interface Backdrop {
  aspect_ratio: number;
  height:       number;
  iso_3166_1:   null | string;
  iso_639_1:    null | string;
  file_path:    string;
  vote_average: number;
  vote_count:   number;
  width:        number;
}

export interface Keywords {
  keywords: Genre[];
}

export enum OriginalLanguage {
  En = "en",
  Pt = "pt",
}

export interface ProductionCompany {
  id:             number;
  logo_path:      string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
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
  title:             string;
  original_title:    string;
  overview:          string;
  poster_path:       string;
  media_type:        MediaType;
  original_language: OriginalLanguage;
  genre_ids:         number[];
  popularity:        number;
  release_date:      Date;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum MediaType {
  Movie = "movie",
}

export interface ReleaseDates {
  results: ReleaseDatesResult[];
}

export interface ReleaseDatesResult {
  iso_3166_1:    string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDate {
  certification: string;
  descriptors:   any[];
  iso_639_1:     ISO639_1;
  note:          string;
  release_date:  Date;
  type:          number;
}

export enum ISO639_1 {
  De = "de",
  Empty = "",
  En = "en",
  Fr = "fr",
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
  iso_3166_1:   string;
  name:         string;
  key:          string;
  site:         string;
  size:         number;
  type:         string;
  official:     boolean;
  published_at: Date;
  id:           string;
}
