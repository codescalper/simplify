import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



function ToolBar() {
    const navigate = useNavigate();

    const handleSignIN = () => {
        navigate("/register")
    }
    return (
        <AppBar position="static" style={{ backgroundColor: 'transparent' }}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ color: 'black' }}>
                    Simplify
                </Typography>
                <Button onClick={() => navigate("/login")} variant="contained">Login</Button>
                <Button onClick={handleSignIN} style={{ margin: 10 }} variant="contained">Register</Button>
            </Toolbar>
        </AppBar>

    )
}

export default ToolBar