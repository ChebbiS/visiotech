import {Stack} from "@mui/material";
import AppBar from "../../components/AppBar.tsx";
import {ThemeProvider, createTheme, CssBaseline} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e53935', // rouge
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
