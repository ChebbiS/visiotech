import * as React from 'react';
import {AppBar, Box, IconButton, InputBase, ListItemIcon, Menu, MenuItem, Toolbar, Typography,} from '@mui/material';
import {alpha, styled} from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from './header/Drawer';
import {useNavigate} from 'react-router';
import { Settings } from '@mui/icons-material';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);



    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => navigate('/setting')}>
                <ListItemIcon>
                    <Settings fontSize={"small"} color={"primary"}/>
                </ListItemIcon>
                <p style={{color: "#800000"}}>Settings</p>
            </MenuItem>
            <MenuItem
                onClick={() => {
                    navigate('/login');
                    localStorage.removeItem("1");
                }}>
                <IconButton size="small" color="primary">
                    <LogoutIcon/>
                </IconButton>
                <p style={{color:"#800000"}}>Se déconnecter</p>
            </MenuItem>
        </Menu>
    );
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = React.useState('');
    const handleSearch = () => {
        const trimmedQuery = searchQuery.trim();
        if (trimmedQuery !== '') {
            navigate(`/research/${encodeURIComponent(trimmedQuery)}`);
            setSearchQuery('');
        }
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Drawer/>
                    <Typography
                        onClick={() => navigate('/')}
                        marginLeft="0.5em"
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block', cursor: "pointer"}}}
                    >
                        Sad<span style={{color: "black"}}>Track</span>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Recherche un film…"
                            inputProps={{'aria-label': 'Recherche'}}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                    </Search>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="logout"
                            aria-haspopup="true"
                            onClick={() => {
                                navigate('/login');
                                localStorage.removeItem("1");
                            }}
                            color="inherit"
                        >
                            <LogoutIcon/>

                        </IconButton>
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
