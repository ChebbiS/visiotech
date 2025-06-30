import Pages from "../../components/Pages.tsx";
import {Container, Grid} from "@mui/material";
import {MovieCarousel as Carrousel} from "../../components/Carrousel.tsx";
import CarrouselTop from "../../components/CarrouselTop.tsx";
import MovieItem from "../../components/MovieItem.tsx";
import movies from "../../dataFake/movie_collection.json";


const Dashboard= () => {
    return (
        <>
            <Pages title="Dashboard">
                <Container>
                    <Carrousel/>
                </Container>
                <Grid container spacing={2}>
                    {movies.results.map((movie) => (
                        <Grid key={movie.id} size={{xs: 12, md: 3}}>
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
