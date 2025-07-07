import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {bindMenu, bindTrigger, usePopupState,} from 'material-ui-popup-state/hooks';
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router";
import {useMediaQuery, useTheme} from '@mui/material';

const Drawer = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
    const navigate = useNavigate();
    const theme = useTheme();

    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Button variant="contained" {...bindTrigger(popupState)}>
                <MenuIcon />
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={() => {
                    popupState.close();
                    navigate('/');
                }}>
                    Dashboard
                </MenuItem>
                <MenuItem onClick={() => {
                    popupState.close();
                    navigate('/favorite');
                }}>
                    Favoris
                </MenuItem>
                <MenuItem onClick={() => {
                    popupState.close();
                    navigate('/seenmovie');
                }}>
                    Films déjà vu
                </MenuItem>

                {!isMobileOrTablet && (
                    <MenuItem onClick={() => {
                        popupState.close();
                        navigate('/setting');
                    }}>
                        Settings
                    </MenuItem>
                )}
            </Menu>
        </div>
    );
};

export default Drawer;
