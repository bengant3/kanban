// Copyright 2021 Ben

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {  } from '@mui/material';
import {  } from '@mui/icons-material'
import Card, { cardProps } from '../components/card'

type boardProps = {
    boardTitle: string;
    boardCards: cardProps[];
}

const Board = ({boardTitle, boardCards} : boardProps) => {
    const [title, setTitle] = useState(boardTitle);
    const [cards, setCards] = useState(boardCards); //custom hooks to add/remove cards??

    return(
        <div>
            <div>
                <p>{title}</p>
                <div>
                    {cards.map((c: cardProps) => 
                        <Card cardTitle={c.cardTitle} cardNotes={c.cardNotes} cardTags={c.cardTags}/>)}
                </div>
            </div>
        </div>

    );
}

const TasksPage = () => {
    const [failedAttempt, setFailedAttempt] = useState(false);
    const [loginInfo, setLoginInfo] = 
        useState<{email: string, password: string} | undefined>(undefined);


    return(
        <div>
            <div>
                
            </div>
        </div>
    );
}

const domContainer = document.querySelector('tasks-root');
ReactDOM.render(TasksPage, domContainer);
