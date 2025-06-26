import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import type {MovieItem as MovieType} from "../@types/MovieItem";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const MovieItem= ({movie}:MovieType) => {
    return (
        <>
            <Stack>
            <Card sx={{ maxWidth: 345 }} >
                <Stack>
                    <CardMedia
                    component="img"
                    height="500"
                    image={baseUrl + movie.poster_path}
                    alt={movie.title}
                />
                </Stack>
                <CardContent>
                    <Stack>
                        <Typography gutterBottom variant="h4" component="div">
                        {movie.title}
                        </Typography>
                    </Stack>
                    <br/>
                    <Stack>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.overview}
                    </Typography>
                    </Stack>
                    <br/>
                    <Stack direction="row" justifyContent="flex-end">
                    <Typography gutterBottom variant="h5" component="div">{movie.release_date}</Typography>
                    </Stack>
                </CardContent>
            </Card>
            </Stack>
        </>
    );
};

export default MovieItem;