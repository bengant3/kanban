// Copyright 2021 Ben

import React, { useState, useEffect } from 'react';
import {  } from '@mui/material';
import {  } from '@mui/icons-material'
import Card, { cardProps } from '../components/card'

type boardProps = {
    boardTitle: string;
    boardCards: Map<string, cardProps>;
}

const Board = ({boardTitle, boardCards} : boardProps) => {
    const [title, setTitle] = useState(boardTitle);
    const [cards, setCards] = useState(boardCards); //custom hooks to add/remove cards??

    const addCard = (newCard : cardProps) => {
        if(!cards.has(newCard.cardTitle)) cards[newCard.cardTitle] = newCard;
    }

    const removeCard = (cardToRemove : string) => {
        if(!cards.has(cardToRemove)) cards.delete(cardToRemove);
    }
    
    return(
        <div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <p>{title}</p>
                <div>
                    {Array.from(cards).map((c: [string, cardProps]) => {
                        return(
                            <Card 
                            cardTitle={c[0]} 
                            cardNotes={c[1].cardNotes} 
                            cardTags={c[1].cardTags}
                            onClose={removeCard}/>
                        )})}
                </div>
                <button>+</button>
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


