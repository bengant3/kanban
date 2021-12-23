// Copyright 2021 Ben

import { useState } from "react";

type tag = {
    name: string;
    color: string;
}

type cardProps = {
    cardTitle: string;
    cardNotes: string;
    cardTags: tag[];
}

const Tag = ({name, color="gray"}: tag) =>{
    return(
        <div>
            <p>{name}</p>
        </div>
    )
}

const Card = ({cardTitle, cardNotes, cardTags}: cardProps) => {
    const [title, setTitle] = useState(cardTitle);
    const [notes, setNotes] = useState(cardNotes);
    const [tags, setTags] = useState(cardTags); //custom hook to add/remove a tag

    return(
        <div>
            <div>
                <p>{title}</p>
                <div>
                    {tags.map((t: tag) =>
                        <div> <p>{t.name}</p> </div>
                        )}
                </div>
                <p>{notes}</p>
            </div>
        </div>
    )
}

export default Card;