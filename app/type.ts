export interface MovieResult {
  page: number
  results: Movie[]
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  original_name: string
}

export interface MovieInfoType {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface CastMember {
  adult?: boolean
  gender?: number
  id?: number
  known_for_department: string
  name: string
  original_name: string
  popularity?: number
  profile_path: string
  cast_id?: number
  character: string
  credit_id: string
  order?: number
}

interface CrewMember {
  adult?: boolean
  gender?: number
  id?: number
  known_for_department: string
  name: string
  original_name: string
  popularity?: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}

export interface MovieCredits {
  id?: number
  cast: CastMember[]
  crew: CrewMember[]
}

export interface ImageItem {
  aspect_ratio?: number
  height?: number
  iso_639_1: string
  file_path: string
  vote_average?: number
  vote_count?: number
  width?: number
}

export interface MovieImages {
  id?: number
  backdrops: ImageItem[]
  logos: ImageItem[]
  posters: ImageItem[]
}

export interface Video {
  id: number
  results: {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
  }
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path?: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}
