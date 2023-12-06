import Toolbar from "@mui/material/Toolbar";
import {Backdrop, CircularProgress, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ActionsProfile from "../../Profile/actions/profile";
import Button from "../../../components/Button/Button";

const Profile = () => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const profile = useSelector(({profile}) => profile.ProfileReducer);

    useEffect(() => {
        handleOpen();
        dispatch(ActionsProfile.receiveProfile());
        console.log(profile);
    }, []);

    return (
        <>
            <Toolbar />

            <List>
                {
                    profile.isLoading && (
                        <div>
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                                onClick={() => {}}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </div>
                    )
                }
                {
                    !profile.isLoading && (
                        <>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`name: ${profile.profile.name}`} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`surname: ${profile.profile.surname}`} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={`email: ${profile.profile.email}`} />
                                </ListItemButton>
                            </ListItem>
                            <label htmlFor="start">Date:</label>

                            <input type="date" id="start" name="trip-start"  min="2018-01-01"
                                   />
                            <br />
                            <Button
                                variant="contained"
                            >
                                Update
                            </Button>
                        </>
                    )
                }
            </List>
        </>
    )
}

export default Profile;