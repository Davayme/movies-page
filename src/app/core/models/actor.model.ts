export interface Actor {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: KnownForDepartment;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         string;
    known_for:            KnownFor[];
}

export interface KnownFor {
    backdrop_path:     null | string;
    id:                number;
    title?:            string;
    original_title?:   string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    adult:             boolean;
    original_language: OriginalLanguage;
    genre_ids:         number[];
    popularity:        number;
    release_date?:     Date;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    name?:             string;
    original_name?:    string;
    first_air_date?:   Date;
    origin_country?:   string[];
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ko = "ko",
    Tl = "tl",
}

export enum KnownForDepartment {
    Acting = "Acting",
}