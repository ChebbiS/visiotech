export interface Person {
    id: number;
    name: string;
    birthday: string | null;
    place_of_birth: string | null;
    biography: string | null;
    profile_path: string | null;
}

export interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    popularity: number | null;
}

export interface MovieCredits {
    cast: Movie[];
    crew: Movie[];
}
