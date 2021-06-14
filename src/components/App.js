import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

import blogData from "../data/blog";


function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} /> {/* you can pass image as a property to specify a logo, it displays the default one right now */}
      <ArticleList posts={blogData.posts} />

    </div>
  );
}

export default App;
