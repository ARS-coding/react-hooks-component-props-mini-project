import React from "react"



function fromMinutesToEmojis(minutes) { // it is gonna return span tags that has emojis in it, within an array

    let emojis = [];

    if (minutes < 30) {
        for(let i = 0; i < minutes; i += 5) {
            let coffee = <span role="image" aria-label="coffee">☕</span>;
            emojis.push(coffee);
        }
        return emojis
    }
    else if (minutes >= 30) {
        for(let i = 0; i < minutes; i += 10) {
            let bentoBox = <span role="image" aria-label="bento-box">🍱</span>; 
            emojis.push(bentoBox);
        }
        return emojis
    }
    else {
        return null;
    }
}
// I believe that there's a infinite loop somehow

function Article({post, title, date = "January 1, 1970", preview, minutes}) { // Object.keys(post) === ["id", "title", "date", "preview", "minutes"]


    return (
        <article>
            <h3>{title}</h3>
            <small>{date} | {minutes} minutes = {fromMinutesToEmojis(minutes)}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article