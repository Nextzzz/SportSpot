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


const navItems = [...Object.values(PAGES)];

const Header = () =>{

    return (
        <header className='header'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component='nav'>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SportSpot
                        </Typography>
                        <Button color="inherit">Login</Button>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
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