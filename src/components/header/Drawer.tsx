import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {useNavigate} from 'react-router';

type Props = {
    open: boolean;
    onClose: () => void;
};

const menuPages = [
    {name: 'Dashboard', path: '/'},
    {name: 'Favorite', path: '/favorite'},
    {name: 'Login', path: '/login'},
    {name: 'SeenMovie', path: '/seenMovie'},
    {name: 'Setting', path: '/setting'},
];

export default function DrawerMenu({open, onClose}: Props) {
    const navigate = useNavigate();

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    backgroundColor: '#000',
                    color: '#f44336',
                    width: 250,
                },
            }}
        >
            <Box role="presentation" sx={{height: '100%'}}>
                <Toolbar sx={{justifyContent: 'flex-end'}}>
                    <IconButton onClick={onClose} sx={{color: '#f44336'}}>
                        <Typography display={"flex"} justifyContent={"center"} alignItems={"center"}>Menu</Typography>
                        <ChevronLeftIcon/>
                    </IconButton>
                </Toolbar>
                <Divider sx={{borderColor: '#f44336'}}/>
                <List>
                    {menuPages.map((item) => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                    onClose();
                                }}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#111',
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={
                                        <Typography sx={{color: '#f44336'}}>
                                            {item.name}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}