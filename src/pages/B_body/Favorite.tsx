import {useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import MovieItem from '../../components/MovieItem.tsx';
import type {Movie_favoris_collection} from "../../@types/Movie_favoris_collection";
import favorisData from '../../dataFake/movie_favoris_collection.json';
import Pages from '../../components/Pages.tsx';


const Favorite = () => {
    const [movies, setMovies] = useState<Movie_favoris_collection[]>([]);

    useEffect(() => {
        setMovies(favorisData.results);
    }, []);

    return (
        <Pages title={"Favoris"}>
        <Box p={4}>
            <Typography variant="h4" color="white" gutterBottom>
                🎬 Mes films favoris
            </Typography>
            <Box display="flex" flexWrap="wrap">
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movieId={movie.id}/>
                ))}
            </Box>
        </Box>
        </Pages>
    );
};

export default Favorite;
