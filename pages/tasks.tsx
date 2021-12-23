// Copyright 2021 Ben

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {  } from '@mui/material';
import {  } from '@mui/icons-material'

const TasksPage = () => {
    const [failedAttempt, setFailedAttempt] = useState(false);
    const [loginInfo, setLoginInfo] = 
        useState<{email: string, password: string} | undefined>(undefined);


    return(
        <div>

        </div>
    );
}

const domContainer = document.querySelector('tasks-root');
ReactDOM.render(TasksPage, domContainer);
