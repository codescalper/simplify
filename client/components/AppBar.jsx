import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




function ToolBar() {
    return (
        <AppBar position="static" style={{ backgroundColor: 'transparent' }}>
            <Toolbar>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: 'black' }}>
                    Simplify
                </Typography>
                <Button variant="contained">Sign in</Button>
                <Button variant="contained">Sing up</Button>
            </Toolbar>
        </AppBar>

    )
}

export default ToolBar