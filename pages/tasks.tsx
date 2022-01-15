// Copyright 2021 Ben

import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import {  } from '@mui/icons-material'
import Card, { cardProps } from '../components/card'

type boardProps = {
    boardTitle: string;
    boardCards: Map<string, cardProps>;
}

//for generating sample cards
const TESTING = true;

const Board = ({boardTitle, boardCards} : boardProps) => {
    const [title, setTitle] = useState(boardTitle);

    //generates sample data; end product would load from backend
    var map : Map<string, cardProps>;
    if(TESTING) {
        map = new Map<string, cardProps>([
            [`${title} A`, {cardTitle: `${title} A`,
                            cardNotes: 'A notes',
                            cardTags: [],
                            onClose: () => removeCard(`${title} A`)}],
            [`${title} B`, {cardTitle: `${title} B`,
                            cardNotes: 'more notes',
                            cardTags: [],
                            onClose: () => removeCard(`${title} B`)}],
            [`${title} C`, {cardTitle: `${title} C`,
                            cardNotes: 'notes....',
                            cardTags: [],
                            onClose: () => removeCard(`${title} C`)}],
        ])
    }

    const [cards, setCards] = useState(TESTING ? map : boardCards); //custom hooks to add/remove cards??

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

const TasksPage = (logOut: any) => {
    return(
        <div>
            <div>
                <Board 
                    boardTitle='To Do'
                    boardCards={new Map<string, cardProps>()}/>
                <Board 
                    boardTitle='In Progress'
                    boardCards={new Map<string, cardProps>()}/>
                <Board 
                    boardTitle='Completed'
                    boardCards={new Map<string, cardProps>()}/>
            </div>
            <Button variant="contained" onClick={logOut}>Log Out</Button>
        </div>
    );
}

export default TasksPage;
