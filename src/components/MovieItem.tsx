import {useEffect, useState} from "react";
import {Card, CardMedia, Box, Typography} from "@mui/material";
import {useNavigate} from 'react-router';

const API_KEY = "c5817db100db1e3666ffaa6a17957b09";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const MovieItem = ({movieId}: { movieId: number }) => {
    const [movie, setMovie] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`);
                const data = await res.json();
                setMovie(data);
            } catch (error) {
                console.error("Erreur lors du chargement du film :", error);
            }
        };
        fetchMovie();
    }, [movieId]);

    if (!movie) return null;

    const handleClick = () => {
        navigate(`/movieDetails/${movie.id}`);
    };

    return (
        <Card onClick={handleClick}
              sx={{
                  maxWidth: 300,
                  borderRadius: "30px",
                  backgroundColor: "#000",
                  margin: "1em",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  '&:hover': {
                      boxShadow: "0 0 15px 4px rgba(255, 0, 0, 0.6)",
                  },
                  '&:hover .overlay': {
                      opacity: 1,
                  },
              }}>
            <CardMedia
                component="img"
                height="500"
                image={baseUrl + movie.poster_path}
                alt={movie.title}
            />
            <Box
                className="overlay"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                    textAlign: "center",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {movie.title}
                </Typography>
                <Typography variant="body2">
                    {movie.overview}
                </Typography>
            </Box>
        </Card>
    );
};

export default MovieItem;
