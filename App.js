/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import Main from "./components/styles/Main.css";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/Myselect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  //State
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
    { id: 3, title: "JavaScript", body: "Description" },
  ]);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [title, setTitle] = useState(" ");
  // const bodyInputRef = useRef();
  const [body, setBody] = useState("");
  //
  //Functions
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  //Getting posts from child's component
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  //
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostForm create={createPost}></PostForm>
      <PostList remove={removePost} posts={posts} title="Posty pro js" />
      <hr style={{ margin: "15px 0" }}></hr>
      {/* <div>
         <MySelect>
          defaultValue = 'Сортировка' options=
          {[
            { value: "title", name: "по названию" },
            { value: "body", name: "по описанию" },
          ]}
        </MySelect> 
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Posty pro js" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не были найдены </h1>
      )} */}
    </div>
  );
}

export default App;
