// Copyright 2021 Ben

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button } from '@mui/material';
import { Login } from '@mui/icons-material'

const LoginPage = () => {
    const [failedAttempt, setFailedAttempt] = useState(false);
    const [loginInfo, setLoginInfo] = 
        useState<{email: string, password: string} | undefined>(undefined);


    return(
        <div>
            <h1>Kanban login</h1>
            <TextField
                id="outlined-required"
                label="Email"
                error={failedAttempt}
                required />
            <TextField
                id="outlined-required"
                label="Password"
                type="password"
                error={failedAttempt}
                required />
            <div>
                {failedAttempt && <p>Incorrect Login</p>}
                <Button
                    variant="contained"
                    onClick={() => {
                        alert("login clicked");
                    }}
                    disableElevation>
                    <div>
                        <p>Log in</p>
                        <Login />
                    </div>
                </Button>
            </div>
        </div>
    );
}

const domContainer = document.querySelector('login-root');
ReactDOM.render(LoginPage, domContainer);


