// Copyright 2021 Ben

import { React, ReactDOM, useState } from 'react';

const LoginPage = () => {
    const [failedAttempt, setFailedAttempt] = useState(false);
    const [loginInfo, setLoginInfo] = 
        useState<{email: string, password: string} | undefined>(undefined);


    return(
        <div>
        </div>
    );
}

const domContainer = document.querySelector('login-root');
ReactDOM.render(LoginPage, domContainer);


