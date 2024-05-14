/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Counter from "./components/Counter";
import Main from "./components/styles/Main.css";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

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
  ]);

  // let likes = 0;
  // function increment() {
  //   likes += 1;
  //   console.log(likes);
  //   //Pri etoj funkcie ne renderet rezultat ego vidno v konsole potomu chto nado ego sochranat v state
  // }

  //Functions
  //Perepisyvaju obychnuju logiku na render logiku
  // let likes = 0;
  // function increment() {
  //   likes += 1;
  //   console.log(likes);
  //   //Pri etoj funkcie ne renderet rezultat ego vidno v konsole potomu chto nado ego sochranat v state
  // }
  // function increment() {
  //   setLikes(likes + 1);
  // }

  // function decrement() {
  //   setLikes(likes - 1);
  // }
  //
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <form>
        <input type="text" placeholder="Nazvanie"></input>
        <input type="text" placeholder="Opisanie"></input>
        <button className="btn">Sozdat post</button>
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
