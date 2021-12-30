// Copyright 2021 Ben

import { flexbox } from "@mui/system";
import { useState } from "react";

type tag = {
    name: string;
    color: string;
}

export type cardProps = {
    cardTitle: string;
    cardNotes: string;
    cardTags: tag[];
}

const Tag = (prop : tag) => {
    return(
        <div style={{...tagStyle, ...{backgroundColor: prop.color}}}>
            <p style ={tagText}>{prop.name}</p>
        </div>
    )
}

const Card = ({cardTitle, cardNotes, cardTags}: cardProps) => {
    const [title, setTitle] = useState(cardTitle);
    const [notes, setNotes] = useState(cardNotes);
    const [tags, setTags] = useState(cardTags); //custom hook to add/remove a tag?

    return(
        <div style={cardStyle}>
            <div style={cardContent}>
                <p style={titleStyle}>{title}</p>
                <div style={tagContainer}>
                    {tags.map((t: tag) => 
                        <Tag name={t.name} color={t.color === "" ? "gainesboro": t.color}/>)}
                </div>
                <p style = {noteText}>{notes}</p>
            </div>
        </div>
    )
}

const cardStyle = {
    border: "2 solid gray", 
    borderRadius: 5
};
const cardContent = {
    display: "flex", 
    flexDirection: "column" as "column"
};
const titleStyle = {fontWeight: "bold"}
const tagContainer = {display: "flex"}
const tagStyle = {borderRadius: 5}
const tagText = {fontSize: 12}
const noteText = {}

export default Card;