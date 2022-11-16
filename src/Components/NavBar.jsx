import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from 'react-router-dom';

const pages = {'list':'All Users', 'add':'Add User'};

const NavBar = () => {

    return (
        <AppBar>
            <Toolbar >
                <AdbIcon sx={{ mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    to="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    USER
                </Typography>
                {Object.keys(pages).map((key) => (
                    <MenuItem key={key}>
                        <NavLink className="nav-link" underline="none" to={key}><Typography textAlign="center">{pages[key]}</Typography></NavLink>
                    </MenuItem>
                ))}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;