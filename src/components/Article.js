import React from "react";
import Minutes from "./Minutes";

function Article({title, date="January 1, 1970", preview, minutes}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>   
            <Minutes minutes={minutes} />
            {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article