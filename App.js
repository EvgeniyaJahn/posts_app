/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import Main from "./components/styles/Main.css";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  //State
  // const state = useState("first function");
  // console.log(state);
  // const [likes, setLikes] = useState(10);
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
    { id: 3, title: "JavaScript", body: "Description" },
  ]);
  const [posts1, setPosts1] = useState([
    { id: 1, title: "Python", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "Python", body: "Description" },
  ]);
  const [title, setTitle] = useState("");
  // const bodyInputRef = useRef();
  const [body, setBody] = useState("");

  //
  //Functions
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    console.log(newPost + " TITLE BODY");
    //   event.preventDefault();
    //   alert(title + "TITLE");
    //   console.log(title + "LOG TITLE");
    //   console.log(
    //     bodyInputRef.current.value,
    //     "CURRENT VALUE TOTZHE DOM ELEMENT no s sobstvennoj komponentoj ne rabotaet G..."
    //   );
  };
  //
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <form>
        {/* Upravlajemij komponent */}
        <MyInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Nazvanie"
        ></MyInput>
        {/* Neupravlajemij komponenty */}
        {/* <input type="text" placeholder="Opisanie" ref={bodyInputRef} ></input> */}
        {/* <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Opisanie"
        ></MyInput> */}
        {/* Upravlajemij komponent */}
        <MyInput
          value={body}
          onChange={(event) => setBody(event.target.value)}
          type="text"
          placeholder="Opisanie"
        ></MyInput>
        <MyButton onClick={addNewPost}>Sozdat post</MyButton>
      </form>
      <PostList posts={posts} title="Posty pro js" />
      <PostList posts={posts1} title="Posty pro python" />
      {/* <PostItem post={{ id: 1, title: "JavaScrippt", body: "Description" }} /> */}
    </div>
    // <div>
    //   <h1>{likes}</h1>
    //   <h1>{value}</h1>
    //   <input
    //     type="text"
    //     value={value}
    //     onChange={(event) => setValue(event.target.value)}
    //   />
    //   <button onClick={increment}>Increment</button>
    //   <button onClick={decrement}>Decrement</button>
    //   {/*<button onClick={() => (likes -= 1)}>Decrement</button> */}
    // </div>
  );
}

export default App;
