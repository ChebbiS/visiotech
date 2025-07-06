import {Box, Button, FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import {useNavigate} from 'react-router';

const Settings = () => {
    const navigate = useNavigate();
    return (


        <Box sx={{maxWidth: 600, margin: '0 auto', padding: 3}}>
            <Typography variant="h4" gutterBottom>
                Paramètres de l'application
            </Typography>
            <FormControl fullWidth margin="normal" sx={{backgroundColor: '#fff'}}>
                <InputLabel>Langue</InputLabel>
                <Select
                    label="Langue"
                >
                    <MenuItem value="fr">Français</MenuItem>
                    <MenuItem value="en">Anglais</MenuItem>
                    <MenuItem value="de">Allemand</MenuItem>
                    <MenuItem value="es">Espagnol</MenuItem>
                </Select>
            </FormControl>

            <Button
                variant="outlined"
                color="error"
                fullWidth
                sx={{marginTop: 2}}
                onClick={() => navigate(-1)}  // Retour à la page précédente
            >
                Retour
            </Button>
        </Box>

    );
};


export default Settings;
