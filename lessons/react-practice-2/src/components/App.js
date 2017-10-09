import React from "react";
import BlogPost from "./BlogPost";
function App() {
  return(
    <div>
      <BlogPost blog={title="A" subtitle="B"}/>
      <BlogPost blog={title="A" subtitle="B"}/>
      <BlogPost blog={title="A" subtitle="B"}/>
      <BlogPost blog={title="A" subtitle="B"}/>
    </div>
  )
}

export default App;
