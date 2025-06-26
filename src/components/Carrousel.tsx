import {useEffect, useState} from "react";
import {Box, Card, CardContent, CardMedia, IconButton, Stack, Typography} from "@mui/material";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";

const CARDS_PER_VIEW = 4;

export default function MovieCarousel() {
    const [movies, setMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        fetch("/src/dataFake/movie_popular.json")
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
        <Box sx={{position: "relative", width: "100%", p: 2}}>
            <Typography variant="h5" gutterBottom>
                Films Populaires
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
                    spacing={2}
                    sx={{
                        overflow: "hidden",
                        flex: 1,
                        px: 1,
                    }}
                >
                    {visibleMovies.map((movie) => (
                        <Card
                            key={movie.id}
                            sx={{minWidth: 200, maxWidth: 220, flex: "0 0 auto"}}
                        >
                            <CardMedia
                                component="img"
                                height="300"
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <CardContent>
                                <Typography variant="body2" noWrap>
                                    {movie.title}
                                </Typography>
                            </CardContent>
                        </Card>

                    ))}
                    <IconButton
                        onClick={handleNext}
                        disabled={startIndex + CARDS_PER_VIEW >= movies.length}
                        sx={{zIndex: 1, color: "white" }}
                    >
                        <ArrowForwardIos/>
                    </IconButton>
                </Stack>


            </Box>
        </Box>
    );
}
