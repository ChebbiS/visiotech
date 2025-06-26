import {Button, Stack} from "@mui/material";
import {useNavigate} from "react-router";

const Header = () => {

    const navigate = useNavigate();

    const menu = [
        {name: "Dashboard", navigation: "/"},
        {name: "Favorite", navigation: "/favorite"},
        {name: "Login", navigation: "/login"},
        {name: "Movie Details", navigation: "/movieDetails"},
        {name: "People Details", navigation: "/peopleDetails"},
        {name: "Research", navigation: "/research"},
        {name: "SeenMovie", navigation: "/seenMovie"},
        {name: "Setting", navigation: "/setting"}]
    return (
        <>
        <Stack justifyContent="center" direction="row" spacing={2} >
            {menu.map((item) => (
                    <Button sx={{background: "black", color:"red", justifyContent: "center", border: "1px solid red", fontFamily: "Roboto", fontSize: "20px"}} onClick={() => navigate(item.navigation)}>{item.name}</Button>
                )
            )}
        </Stack>
        </>
    );
};

export default Header;
