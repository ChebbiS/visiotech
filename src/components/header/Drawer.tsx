import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router";

const Drawer = () => {
    const popupState = usePopupState({variant: 'popover', popupId: 'demoMenu'})
    const navigate = useNavigate();
    return (
        <div>
            <Button variant="contained" {...bindTrigger(popupState)}>
                <MenuIcon/>
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={
                    () => {
                        popupState.close();
                        navigate('/');
                    }}
                >Dashboard</MenuItem>
                <MenuItem onClick={
                () => {
                    popupState.close();
                    navigate('/favorite');
                }}
                    >Favoris</MenuItem>
                <MenuItem onClick={
                () => {
                    popupState.close();
                    navigate('/seenmovie');
                }}
                    >Films déjà vu</MenuItem>
                <MenuItem onClick={
                () => {
                    popupState.close();
                    navigate('/setting');
                }}
                    >Acteurs</MenuItem>
            </Menu>
        </div>
    )
}

export default Drawer