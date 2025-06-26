import {Grid} from "@mui/material";
import MovieItem from "../../components/MovieItem.tsx";
import movies from "../../dataFake/movie_collection.json";
import Pages from "../../components/Pages.tsx";


const Dashboard= () => {
    return (
        <>
            <Pages title="Dashboard">
            <h1>Coucou, je suis dans le Dashboard</h1>
            <Grid container spacing={2}>
                {movies.results.map((movie) => (
                    <Grid size={{xs: 12, md: 3}}>
                        <MovieItem movie={movie}/>
                    </Grid>
                ))}
            </Grid>
            </Pages>
        </>

    );
};

export default Dashboard;
