import  {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Box, Typography, Card, CardMedia, CircularProgress, IconButton, Stack} from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import Pages from "../../components/Pages.tsx";

const API_KEY = "c5817db100db1e3666ffaa6a17957b09";
const baseUrl = "https://image.tmdb.org/t/p/w500";

const PeopleDetails = () => {
    const {id} = useParams<{ id: string }>();
    const [person, setPerson] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=fr-FR`
                );
                if (!res.ok) throw new Error("Erreur réseau");
                const data = await res.json();
                setPerson(data);
            } catch (err) {
                setError("Impossible de charger les détails de la personne.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPerson();
    }, [id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress/>
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
            <Stack direction={"row"} mb={2}>
                <IconButton
                    onClick={() => window.history.back()}
                    sx={{zIndex: 1, color: "white"}}
                >
                    <ArrowBackIos fontSize="large" sx={{color: "white"}}/>
                </IconButton>
            </Stack>
        <Box display="flex" flexDirection="column" alignItems="center" p={3}>

            <Card sx={{maxWidth: 300, borderRadius: 3, mb: 2, backgroundColor: "#000"}}>
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
                <Typography variant="body2" sx={{maxWidth: 600, textAlign: "justify", mt: 2}}>
                    {person.biography}
                </Typography>
            ) : (
                <Typography variant="body2" color="text.secondary" sx={{maxWidth: 600, textAlign: "center", mt: 2}}>
                    Aucune biographie disponible.
                </Typography>
            )}
        </Box>
        </Pages>
    );
};

export default PeopleDetails;
