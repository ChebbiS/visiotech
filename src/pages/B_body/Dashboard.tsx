import Pages from "../../components/Pages.tsx";
import {Container, Grid} from "@mui/material";
import CarrouselTop from "../../components/CarrouselTop.tsx";
import MovieItem from "../../components/MovieItem.tsx";
import type {MovieDetails} from "../../@types/MovieDetails";
import Carrousel from "../../components/Carrousel.tsx";
import {useEffect, useState} from "react";


const Dashboard= () => {
    const API_KEY = "c5817db100db1e3666ffaa6a17957b09";
    const [movies, setMovies] = useState<MovieDetails[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`)
            .then(res =>
            {
                if (!res.ok){
                    throw new Error("Erreur lors du chargement des films");
                }
                return res.json();
            })
            .then(data => {
                setMovies(data.results);
                setLoading(false);
            })
            .catch(err => {
            setError(err.message);
            setLoading(false);
        });

    }, []);


                if (loading) return <p>Chargement en cours...</p>;
                if (error) return <p>Erreur : {error}</p>;
    return (
        <>
            <Pages title="Dashboard">
                <Container>
                    <Carrousel/>
                </Container>
                <Grid container spacing={3}>
                    {movies.map((movie) => (
                        <Grid key={movie.id} size={{xs: 12, md: 3}} >
                            <MovieItem movieId={movie.id}/>
                        </Grid>

                    ))}
                </Grid>

                <Container>
                    <CarrouselTop />
                </Container>
            </Pages>
        </>

    );
};

export default Dashboard;
