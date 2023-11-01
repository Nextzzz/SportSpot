import'./header.css';
import * as React from 'react';
import AppBar from 'components/AppBar'
import * as PAGES from 'constants/pages';
import config from 'config';
import Button from "components/Button";
import Box from "components/Box";
import Toolbar from "components/Toolbar";
import Typography from "components/Typography";
import CssBaseline from "components/CssBaseline";
import {useDispatch, useSelector} from "react-redux";
import useChangePage from "../../hooks/useChangePage";
import {useEffect} from "react";
import {fetchSignOut} from "../../app/actions/user";
import {Avatar} from "@mui/material";


const navItems = [...Object.values(PAGES)];

const Header = () =>{
    const user = useSelector(({ user }) => user);
    const dispatch = useDispatch();
    const handleLogOutClick = () => {
        dispatch(fetchSignOut())
    };

    const handleProfileClick = () => {
        console.log('avatar')
    }

    return (
        <header className='header'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component='nav'>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SportSpot
                        </Typography>
                        {(!user.isAuthorized) ? null :
                            <Button color="inherit" onClick={handleLogOutClick}>
                                Logout
                            </Button>
                        }

                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                (item === PAGES.LOGIN && user.isAuthorized) ? null :
                                <Button href={`${config.BASE_FRONTEND_URL}/${item}`} key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

export default Header;