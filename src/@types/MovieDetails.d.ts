export type MovieDetails = {
    "adult": boolean,
    "backdrop_path": string,
    "belongs_to_collection": belongToCollection
    "budget": number,
    "genres": genre[],
    "homepage": string,
    "id": number,
    "imdb_id": string,
    "origin_country": string[],
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "production_companies": production_company[],
    "production_countries": production_country[],
    "release_date": string,
    "revenue": number,
    "runtime": number,
    "spoken_languages": string[],
    "status": string,
    "tagline": string,
    "title": string,
    "video": false,
    "vote_average": number,
    "vote_count": number
}

type belongToCollection = {
    "id": 1241,
    "name": "Harry Potter Collection",
    "poster_path": "/eVPs2Y0LyvTLZn6AP5Z6O2rtiGB.jpg",
    "backdrop_path": "/xN6SBJVG8jqqKQrgxthn3J2m49S.jpg"
}

type genre = {
    "id": number,
    "name": string
}
type production_company
    = {
    "id": number,
    "logo_path": string,
    "name": string,
    "origin_country": string
}
type production_country = {
    "iso_3166_1"
        :
        string,
    "name"
        :
        string
}