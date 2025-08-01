import {useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import MovieItem from '../../components/MovieItem.tsx';
import type {UserSeenCollection} from "../../@types/people_favoris_collection";
import favorisData from '../../dataFake/people_movie_collection.json';
import Pages from '../../components/Pages.tsx';

const Favorite = () => {
    const [movies, setMovies] = useState<UserSeenCollection[]>([]);

    useEffect(() => {
        setMovies(favorisData.cast);
    }, []);

    return (
        <Pages title={"Film déjà vu"}>
        <Box p={4}>
            <Typography variant="h4" color="white" gutterBottom>
                🎬 Mes films déjà vu
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
