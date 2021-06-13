import React from "react"

function Article({post, title, date = "January 1, 1970", preview}) { // Object.keys(post) === ["id", "title", "date", "preview", "minutes"]

    return (
        <article>
            <h3>{post.title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article