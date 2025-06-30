import {createTheme, CssBaseline, Stack, ThemeProvider} from "@mui/material";
import AppBar from "../../components/AppBar.tsx";

const theme = createTheme({
    palette: {
        primary: {
            main: '#800000',
        },
    },
});
const Header = () => {

    return (
        <>
            <Stack justifyContent="center" direction="row" spacing={2}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <AppBar/>
                </ThemeProvider>

            </Stack>
        </>
    );
};

export default Header;
