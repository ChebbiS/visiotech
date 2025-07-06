import {useParams, useNavigate} from 'react-router';
import {useEffect, useState} from 'react';
import {Box, Typography, Avatar} from '@mui/material';
import Grid from '@mui/material/Grid';
import type {MovieDetails} from "../../@types/MovieDetails";
import Pages from '../../components/Pages';


const baseUrl = "https://image.tmdb.org/t/p/original/";
const API_KEY = "c5817db100db1e3666ffaa6a17957b09";

const MovieDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<MovieDetails>();
    const [cast, setCast] = useState<any[]>([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-FR`
            );
            const data = await res.json();
            setMovie(data);
        };

        const fetchCast = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=fr-FR`
            );
            const data = await res.json();
            setCast(data.cast.slice(0, 10));
        };

        fetchMovie();
        fetchCast();
    }, [id]);

    if (!movie) return <div>Chargement...</div>;

    return (
        <Pages title={"Détails du film"}>
        <Box p={4} sx={{color: 'white', backgroundColor: '#121212'}}>
            <img
                src={baseUrl + movie.poster_path}
                alt={movie.title}
                style={{width: '300px', borderRadius: '20px'}}
            />
            <Typography variant="h4" mt={2}>{movie.title}</Typography>
            <Typography variant="subtitle1">{movie.tagline}</Typography>
            <Typography variant="body1" mt={2}>{movie.overview}</Typography>
            <Typography variant="body2" mt={2}>
                🗓️ Sortie : {movie.release_date} <br/>
                ⏱️ Durée : {movie.runtime} minutes <br/>
                ⭐ Note : {movie.vote_average}/10 <br/>
                🎭 Genres : {movie.genres.map((g: any) => g.name).join(', ')}
            </Typography>

            <Typography variant="h5" mt={4} mb={2}>🎬 Acteurs</Typography>
            <Grid container spacing={2}>
                {cast.map((actor) => (
                    <Grid key={actor.id} size={{xs:6, sm:4,md:3,lg:2}}>
                        <Box
                            textAlign="center"
                            sx={{cursor: 'pointer'}}
                            onClick={() => navigate(`/peopleDetails/${actor.id}`)}
                        >
                            <Avatar
                                alt={actor.name}
                                src={actor.profile_path ? baseUrl + actor.profile_path : undefined}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    margin: '0 auto',
                                    border: '2px solid #fff',
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 0 10px #f00',
                                    }
                                }}
                            />
                            <Typography variant="body2" mt={1}>{actor.name}</Typography>
                            <Typography variant="caption" color="gray">{actor.character}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </Pages>
    );
};

export default MovieDetails;
