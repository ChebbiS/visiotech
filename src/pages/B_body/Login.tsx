import {useNavigate} from "react-router";
import Pages from "../../components/Pages";
import {useForm} from "react-hook-form";
import {Box, Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import {useEffect} from "react";

const themeBox = createTheme({
    palette: {
        primary: {
            main: '#800000',
        },
        background: {
            default: '#fff',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                },
            },
        },
    },
});

function Login() {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: { email: string; password: string }) => {
        if (data.email === "said@said.fr" && data.password === "saidchebbi") {
            localStorage.setItem("1", "token");
            navigate("/");
        } else {
            alert("Identifiants incorrects !");
        }
    };

    useEffect(() => {

        document.body.style.backgroundImage = "url('src/assets/fond.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

        return () => {
            document.body.style.backgroundImage = "";
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <Pages title={"Login"}>
            <ThemeProvider theme={themeBox}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            backgroundColor: "#800000",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            maxWidth: "400px",
                            margin: "auto",
                        }}
                    >
                        <TextField
                            type="email"
                            id="outlined-suffix-shrink"
                            label="Email"
                            variant="outlined"
                            sx={{backgroundColor: "#fff"}}
                            {...register("email")}
                        />
                        <TextField
                            type="password"
                            id="outlined-suffix-shrink"
                            label="Password"
                            variant="outlined"
                            sx={{backgroundColor: "#fff"}}
                            {...register("password")}
                        />

                        <Button
                            variant="contained"
                            sx={{backgroundColor: 'black'}}
                            type="submit"
                        >
                            Se connecter
                        </Button>
                    </Box>
                </form>
            </ThemeProvider>
        </Pages>
    );
}

export default Login;
