import {useEffect, useState} from 'react';
import {Box, Typography} from '@mui/material';
import MovieItem from '../../components/MovieItem.tsx';
import favorisData from '../../dataFake/movie_favoris_collection.json';

const Favorite = () => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        setMovies(favorisData.results);
    }, []);

    return (
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
    );
};

export default Favorite;
