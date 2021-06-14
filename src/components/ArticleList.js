import React from "react"
import Article from "./Article"

function ArticleList({posts}) { // posts is an array of objects and each objects has information about a specific post

    let articleElements = [];

    for(let i = 0; i < posts.length; i++) {
        let currentPost = posts[i]; // Object.keys(post) === ["id", "title", "date", "preview", "minutes"]
        let currentId = currentPost.id;
        articleElements.push(
            <Article 
                key={currentId} 
                post={currentPost}
                title={currentPost.title}
                date={currentPost.date}
                preview={currentPost.preview}
                minutes={currentPost.minutes} 
            />
        )
    }

    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList