import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
import { useState } from 'react';


function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = () => {

        // console.log(email)
        // console.log(password)

        let callback2 = (data) => {
            localStorage.setItem("token", data.token);
            console.log(data)
        }

        let callback1 = (res) => {
            res.json().then(callback2);
        }

        fetch('https://simplify-server.vercel.app/admin/signup', {
            method: "POST",
            body: JSON.stringify({
                username: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(callback1);

    }

    return (
        <>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '180px' }}>
                <Typography variant='h4'>New to Simplify? Register here</Typography>
                <Card variant='outlined' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '30%', padding: 20, marginTop: '50px', borderRadius: '20px' }}>
                    <TextField onChange={(e) => setEmail(e.target.value)} id="email" required style={{ marginTop: '1em' }} label="Email" type='email' variant="standard" />
                    <TextField onChange={(e) => setPassword(e.target.value)} id="password" required style={{ marginTop: '1em' }} label="Password" type='password' variant="standard" />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={handleRegister} variant="contained" style={{ marginTop: '4em' }}>Register</Button>
                    </div>
                </Card>
            </div>
        </>
    )
}
export default SignUp


