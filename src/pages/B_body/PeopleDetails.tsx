import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router";
import {Box, Card, CardMedia, CircularProgress, IconButton, Stack, Typography} from "@mui/material";
import {ArrowBackIos} from "@mui/icons-material";
import Pages from "../../components/Pages.tsx";
import type {Movie, MovieCredits, Person} from "../../@types/tmdb";

const API_KEY = "c5817db100db1e3666ffaa6a17957b09";
const baseUrl = "https://image.tmdb.org/t/p/w500";

const PeopleDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [person, setPerson] = useState<Person >();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPersonDetails = async () => {
            try {
                setLoading(true);

                const [personRes, creditsRes] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=fr-FR`),
                    fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=fr-FR`)
                ]);

                if (!personRes.ok || !creditsRes.ok) throw new Error("Erreur réseau");

                const personData: Person = await personRes.json();
                const creditsData: MovieCredits = await creditsRes.json();

                setPerson(personData);
                setMovies(creditsData.cast);
            } catch (err) {
                setError("Impossible de charger les détails de la personne.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPersonDetails();
    }, [id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress sx={{color:"#800000"}}/>
            </Box>
        );
    }

    if (error || !person) {
        return (
            <Box textAlign="center" mt={4}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Pages title={"People Details"}>
            <Stack direction={"row"} mb={3}>
                <IconButton onClick={
                    () => navigate(-1)
                }>
                    <ArrowBackIos fontSize="large" sx={{color: "#800000"}}/>
                    <Typography sx={{fontSize: 24, color: "#800000"}}>Retour</Typography>
                </IconButton>
            </Stack>

            <Box display="flex" flexDirection="column" alignItems="center" p={3}>
                <Card sx={{ maxWidth: 300, borderRadius: 3, mb: 2, backgroundColor: "#000" }}>
                    <CardMedia
                        component="img"
                        image={person.profile_path ? `${baseUrl}${person.profile_path}` : "/placeholder.jpg"}
                        alt={person.name}
                    />
                </Card>

                <Typography variant="h4" gutterBottom>
                    {person.name}
                </Typography>

                {person.birthday && (
                    <Typography variant="body1" gutterBottom>
                        🎂 Né(e) le {new Date(person.birthday).toLocaleDateString("fr-FR")}
                    </Typography>
                )}

                {person.place_of_birth && (
                    <Typography variant="body1" gutterBottom>
                        📍 Lieu de naissance : {person.place_of_birth}
                    </Typography>
                )}

                {person.biography ? (
                    <Typography variant="body2" sx={{ maxWidth: 600, textAlign: "justify", mt: 2 }}>
                        {person.biography}
                    </Typography>
                ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 600, textAlign: "center", mt: 2 }}>
                        Aucune biographie disponible.
                    </Typography>
                )}
            </Box>

            {movies.length > 0 && (
                <Box mt={4} p={3} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5" gutterBottom>🎥 Films notables :</Typography>
                    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
                        {movies
                            .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0))
                            .slice(0, 10)
                            .map((movie) => (
                                <Link
                                    to={`/movieDetails/${movie.id}`}
                                    key={movie.id}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Card
                                        sx={{
                                            width: 150,
                                            backgroundColor: "#111",
                                            borderRadius: 2,
                                            cursor: "pointer"
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={movie.poster_path ? `${baseUrl}${movie.poster_path}` : "/placeholder.jpg"}
                                            alt={movie.title}
                                            sx={{ height: 225 }}
                                        />
                                        <Box p={1}>
                                            <Typography variant="body2" color="white" noWrap>
                                                {movie.title}
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Link>
                            ))}
                    </Stack>
                </Box>
            )}
        </Pages>
    );
};

export default PeopleDetails;