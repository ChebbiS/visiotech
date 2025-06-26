import {Button, Stack} from "@mui/material";
import {useNavigate} from "react-router";

const Login= () => {

    const navigate = useNavigate();
    return (
        <>

            <h1>Coucou, je suis dans le Login</h1>
            <Stack>
            <Button sx={{
                background: "black",
                color: "red",
                justifyContent: "center",
                border: "1px solid red",
                fontFamily: "Roboto",
                fontSize: "20px"
            }} onClick={()=> navigate("/")} >Retour</Button>
            </Stack>

        </>
    );
};

export default Login;
