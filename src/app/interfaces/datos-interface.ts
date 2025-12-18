export interface DatosResponse {
  datos: Datos;
}

export interface Datos {
  id:                   number;
  title:                string;
  backdrop_path:        string;
  genres:               string[];
  overview:             string;
  production_companies: ProductionCompany[];
  networks:             any[];
  release_date:         Date;
  in_production:        null;
  last_air_date:        string;
  number_of_episodes:   null;
  number_of_seasons:    null;
  tagline:              string;
  vote_average:         number;
  cast:                 Cast[];
  keywords:             any[];
  videos:               Video[];
  images:               Image[];
  recommendations:      Recommendation[];
}

export interface Cast {
  cast_name:      string;
  cast_pic:       string;
  cast_character: string;
}

export interface Image {
  images_file_path: string;
}

export interface ProductionCompany {
  company_logo: string;
  company_name: string;
}

export interface Recommendation {
  recommendation_backdrop_path: string;
  recommendation_id:            number;
  recommendation_title:         string;
  recommendation_type:          string;
}

export interface Video {
  video_title: string;
  video_site:  string;
  video_id:    string;
}
