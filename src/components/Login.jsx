import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import {AuthContext} from "../context/AuthContext"
import { useNavigate } from 'react-router';
// import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AuthProvider } from '../context/AuthContext';
export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    const  {handle}  = React.useContext(AuthContext);
    console.log(handle);
    const navigate = useNavigate();
    const handlelogin = ()=>{
        const payload = {
            email,
            password
        }
        fetch("https://reqres.in/api/login",{
            method:"POST",
            body:JSON.stringify((payload)),
            headers:{
                "Content-Type":"application/json"
            }

        })
          .then(res => res.json())
          .then(data => {handle(data); navigate('/')})
    }

    return (
        <div style={{width:"30%", margin:"auto"}}>
            <h1>Sign in</h1>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                style={{marginBottom:"3%"}}
            >
                <TextField fullWidth label="Email id" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </Box>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                style={{marginBottom:"3%"}}
            >
                <TextField fullWidth label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
            </Box>
            <Button variant="contained" onClick={handlelogin}>Sign in</Button>
        </div>
    );
}
