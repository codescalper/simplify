import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
function SignUp() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '180px' }}>
                <Typography variant='h4'>Welcome to Simplify</Typography>
                <Card variant='outlined' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '30%', padding: 20, marginTop: '50px' }}>
                    <TextField id="standard-basic" style={{ marginTop: '1em' }} label="Username" variant="standard" />
                    <TextField id="standard-basic" style={{ marginTop: '1em' }} label="Password" type='password' variant="standard" />
                    <Button variant="contained" style={{ marginTop: '4em' }}>Signup</Button>
                </Card>
            </div>
        </>
    )
}
export default SignUp


