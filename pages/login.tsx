// Copyright 2021 Ben

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TextField, Button } from '@mui/material';
import { Login } from '@mui/icons-material'

const LoginPage = (successfulLogin: any) => {
    const [failedAttempt, setFailedAttempt] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //const [loginInfo, setLoginInfo] = 
    //    useState<{email: string, password: string} | undefined>(undefined);

    const attemptLogin = () => {
        //validate credentials;
        let b: boolean = (username == "ben");

        if(b) {
            successfulLogin();
        } else {
            setFailedAttempt(true);
            setUsername("");
            setPassword("");
        }
        
        
    }

    return(
        <div style={{backgroundColor: 'red'}}>
            <h1>Kanban login</h1>
            <TextField
                id="outlined-required"
                label="Email"
                error={failedAttempt}
                required={failedAttempt}
                onChange={(u) => setUsername(u.target.value)} />
            <TextField
                id="outlined-required"
                label="Password"
                type="password"
                error={failedAttempt}
                required={failedAttempt}
                onChange={(p) => setPassword(p.target.value)} />
            <div>
                {failedAttempt && <p>Incorrect Login</p>}
                <Button
                    variant="contained"
                    onClick={attemptLogin}
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

export default LoginPage;

// const domContainer = document.querySelector('login-root');
// ReactDOM.render(LoginPage, domContainer);


