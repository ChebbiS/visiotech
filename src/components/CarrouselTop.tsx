import {useEffect, useState} from "react";
import {Box, Card, CardMedia, IconButton, Stack, Typography} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import {useNavigate} from 'react-router';
const CARDS_PER_VIEW = 4;

export default function MovieCarousel() {
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();
    const API_KEY = "c5817db100db1e3666ffaa6a17957b09";
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`)
            .then((res) => res.json())
            .then((data) => setMovies(data.results || []))
            .catch((err) => console.error("Erreur de chargement des films :", err));
    }, []);

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(0, prev - CARDS_PER_VIEW));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + CARDS_PER_VIEW, movies.length - CARDS_PER_VIEW)
        );
    };

    const visibleMovies = movies.slice(startIndex, startIndex + CARDS_PER_VIEW);

    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            padding: 2,
        }}>
            <Typography variant="h5" gutterBottom>
                Films les mieux notés
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    width: "100%",

                }}
            >
                <IconButton
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    sx={{zIndex: 1, color: "white"}}
                >
                    <ArrowBackIos/>
                </IconButton>
                <Stack
                    direction="row"
                    spacing={6}
                    sx={{
                        overflow: "hidden",
                        flex: 1,
                        px: 1,
                        padding: "1em",

                    }}
                >
                    {visibleMovies.map(({id, poster_path, title}) => (
                        <Card
                            onClick={() => navigate(`/movieDetails/${id}`)}
                            key={id}
                            sx={{
                                minWidth: 200,
                                maxWidth: 220,
                                flex: "0 0 auto",
                                borderRadius: "10px",
                                backgroundColor: "#000",
                                overflow: "hidden",
                                cursor: "pointer",
                                '&:hover': {
                                    boxShadow: "0 0 15px 4px rgba(255, 0, 0, 0.6)",
                                    cursor: "pointer",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="300"
                                image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                alt={title}
                            />
                        </Card>

                    ))}
                    <IconButton
                        onClick={handleNext}
                        disabled={startIndex + CARDS_PER_VIEW >= movies.length}
                        sx={{zIndex: 1, color: "white"}}
                    >
                        <ArrowForwardIos/>
                    </IconButton>
                </Stack>


            </Box>
        </Box>
    );
}
