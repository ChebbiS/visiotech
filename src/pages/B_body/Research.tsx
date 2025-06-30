import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const API_KEY = "c5817db100db1e3666ffaa6a17957b09";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Research() {
    const {query} = useParams<{ query: string }>();
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!query) return;

        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&query=${encodeURIComponent(query)}`
                );
                const data = await response.json();
                const filteredMovies = (data.results || []).filter(movie => movie.poster_path);
                setMovies(filteredMovies);
            } catch (error) {
                console.error("Erreur lors de la recherche des films :", error);
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [query]);


    if (loading) {
        return <Typography variant="h6" sx={{p: 4}}>Chargement...</Typography>;
    }

    return (
        <Box p={4}>
            <Typography variant="h4" mb={3}>
                Résultats de recherche pour : "{query}"
            </Typography>

            {movies.length === 0 ? (
                <Typography>Aucun film trouvé.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {movies.map((movie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <Card
                                sx={{cursor: "pointer"}}
                                onClick={() => navigate(`/movieDetails/${movie.id}`)}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={
                                        movie.poster_path
                                            ? `${IMAGE_BASE_URL}${movie.poster_path}`
                                            : "https://via.placeholder.com/500x750?text=No+Image"
                                    }
                                    alt={movie.title}
                                />
                                <CardContent>
                                    <Typography variant="h6">{movie.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {movie.release_date || "Date inconnue"}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
