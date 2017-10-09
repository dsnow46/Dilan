import React from "react";

function BlogPost(props){
  return (
    <div>
    <h1>{props.blog.title}</h1>
    <h3>{props.blog.subtitle}</h3>
    <p></p>
    </div>
  )
}

export default BlogPost;
